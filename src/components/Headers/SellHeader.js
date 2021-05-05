/*eslint-disable*/
import React ,{useState,useEffect}from "react";
import FbImageLibrary from 'react-fb-image-grid'
import swal from 'sweetalert';

// reactstrap components
import { Container } from "reactstrap";
// core components
// reactstrap components
import {useHistory} from 'react-router-dom'
import {uploadAdImage,addAdToDb} from '../../config/firebase'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  
  Row,
} from "reactstrap";

function SellHeader() {
  let pageHeader = React.createRef();
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const history=useHistory()
  const [loading, setloading] = useState(false)

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState([])
  const [city, setCity] = useState("")

  console.log(title)
  console.log(price)
  console.log(description)
  console.log(image)
  console.log(city)
  console.log("current image ",image)







  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });


function onSubmit(){
  addAdToDb({title,price,description,image,city}).then(res=>{
    swal('Ad uploaded')
    
  })
}
const adChecker=()=>{
  if(title === ""){
    swal("Title is Empty")
   
  }
  else if (price === ""){
    swal("Price is Empty")
    
  }
  else if (description === ""){
    swal("Description is empty")
   
  }
  else if (image.length === 0){
    swal("Please insert images")
    
  }
  else if(city === ""){
    swal("Please select your city ")
   
  }
  else{
    onSubmit()
  }
}


  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        
        <Container>
          <div className="content-center brand" style={{paddingTop:500}}>
           
            <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    
                      onChange={(e)=>setTitle(e.target.value)}
                      placeholder="TILE..."

                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      onChange={(e)=>setPrice(e.target.value)}
                      placeholder="PRICE..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (firstFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      onChange={(e)=>setDescription(e.target.value)}
                      placeholder="Add Description..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
                     <Input type="select"  value={city} onChange={(e) => { setCity(e.target.value) }}>
                                    <option>Your City Name</option>
                                    <option>Karachi</option>
                                    <option>Lahore</option>
                                    <option>Multan</option>
                                    <option>Quetta</option>
                                    <option>Bahawalpur</option>
                                    <option>Sukkur</option>
                                </Input>
                                {loading ?
                      <img style={{height:100,width:100}}src='https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif'/>
                       : <Input type="file" onChange={(e)=>{setloading(true); uploadAdImage(e.target.files).then(res=>{
                         setloading(true)
                      const array=[...image]
                      array.push(res)

                       setImage(array)
                       setloading(false)
                    })}}></Input>}
                    
                    <Button onClick={()=>adChecker()}>Upload Ad</Button>
                  </InputGroup>
                  <div style={{height:200,width:200}}><FbImageLibrary images={image.map(item=>{return item})}/></div>
                  <Button  onClick={()=>history.goBack()}>Back</Button>
          </div>
        
          

          
        </Container>
    

      
      </div>
     
    </>
  );
}

export default SellHeader;
