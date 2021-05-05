import React,{useState,useEffect} from "react";
import {getSpecificUser} from '../../config/firebase'


// reactstrap components
import { Container } from "reactstrap";

// core components

function ProfilePageHeader({user}) {
  let pageHeader = React.createRef();
  const [userProfile, setUserProfile] = useState([])


  useEffect(() => {
    getSpecificUser(user.email).then(res => {
      setUserProfile(res)
     
     
  })
   
  }, [])



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
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg5.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="photo-container">
            <img style={{height:'100%',width:'100%'}} src={userProfile.map(item=>{return item.picture})}></img>
          </div>
          <h3 className="title">{userProfile.map(item =>{return item.fullname})}</h3>
          <p className="category"></p>
         
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
