import React,{useState,useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import {uploadProfileImage,getSpecificUser,updatingUserData} from '../../config/firebase'
import swal from 'sweetalert';

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
    Container,
    Row,
  } from "reactstrap";

export default function EditUser({user}) {
    const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const history = useHistory()
  
 
  
  const [fullname, setFullname] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  
  const [profilePicture, setProfilePicture] = useState("")
  const [currentUserId, setCurrentUserId] = useState()
  const [loading, setloading] = useState(false)

  useEffect(() => {
      getSpecificUser(user.email).then(res=>{
          res.map(item=>{return setCurrentUserId(item.id)})
      })
     
  }, [])



function  onUpdate(){
    updatingUserData(fullname,phoneNumber,currentUserId,profilePicture).then(res=>{
        history.push('/profilepage')

        
    }
        )
} 

const infoChecker=()=>{
  if (fullname === ""){
    swal("Confirm Your fullname field is empty")
   
  }
  else if(phoneNumber === ""){
    swal("Confirm Your Phone Number field is empty")
   
  }
  else if(profilePicture === ""){
    swal("please upload your new profile picture")
    
  }
  else{
    onUpdate()
   
  
  }


}




    
    
    

     


    
    
    
    
    
    
    
    return (
      
        <>
       
        <div
          className="section section-signup"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px",
          }}
        >
            <Button onClick={()=>history.push('/profilepage')}>Back</Button>
          <Container>
            <Row>
              <Card className="card-signup" data-background-color="blue">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Edit Your Information
                    </CardTitle>
                  
                  </CardHeader>
                  <CardBody>
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
                        onChange={(e)=>setFullname(e.target.value)}
                        placeholder="Full Name..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (lastFocus ? " input-group-focus" : "")
                      }
                    >
                     
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                      
                        value={user.email}
                        type="text"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                     
                    </InputGroup>
      
  
  
                    <InputGroup
                      className={
                        "no-border" + (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons text_caps-small"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={(e)=>setPhoneNumber(e.target.value)}
                        placeholder="Phone Number..."
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                      
                      
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border" + (lastFocus ? " input-group-focus" : "")
                      }
                    >
                     </InputGroup>
                     <div className="col text-center">
            {loading ?
                      <img style={{height:100,width:100}}src='https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif'/>
                       :<Input
                        onChange={(e)=>{setloading(true); uploadProfileImage(e.target.files).then(res=>{setProfilePicture(res)
                            setloading(false)})} }
                        placeholder="Upload Profile Picture..."
                        type="file"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>}
        
            </div>
                   </CardBody>
                  <CardFooter className="text-center">
                    <Button
                    
                      className="btn-neutral btn-round"
                      color="info"
                      onClick={()=>infoChecker()}
                      size="lg"
                    >
                      Update Information
                    </Button>
                    
                  </CardFooter>
                </Form>
              </Card>
            </Row>
           
          </Container>
         
        </div>
      
      </>
    )
}
