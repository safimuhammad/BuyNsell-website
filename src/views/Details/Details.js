import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getSpecificAd } from '../../config/firebase'
import IndexNavbar from '../../components/Navbars/IndexNavbar'
import FbImageLibrary from 'react-fb-image-grid'
import { Container,Button } from "reactstrap";
import DarkFooter from '../../components/Footers/DarkFooter'




export default function Details({user}) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-collapse");
   
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });


    let pageHeader = React.createRef();
    
    
    const history = useHistory()


    const { adId } = useParams()
    const [adDetail, setAdDetail] = useState({})
    useEffect(() => {
        getSpecificAd(adId).then(response => {
            setAdDetail(response)
        })

    })






    return (
        <div>
            <IndexNavbar user={user}/>
          <div  className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px",
            backgroundImage: "url(" + require("assets/img/indexheader.jpg") + ")",
          }}
          ref={pageHeader}
        >
          
        </div>
        <Container>
        <Button onClick={() => history.goBack()} color="primary">Back</Button>
    
        <div style={{ margin: 'auto', width: 500 }}>
            
            
            <h1>AD Details</h1>
            <div style={{ margin: 20 }}>
               <FbImageLibrary images={adDetail.image}/>
                <br />
                <h2>Rs.{adDetail.price}</h2>
                <p>{adDetail.title}</p>
                <p>{adDetail.description}</p>
                <hr />

            </div>



          </div>
         
        </Container>
        <DarkFooter/>
      </div>
      

      
        </div>
     
    

    )
}
