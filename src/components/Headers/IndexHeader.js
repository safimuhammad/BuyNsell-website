/*eslint-disable*/
import React ,{useState,useEffect}from "react";

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

function IndexHeader() {
  let pageHeader = React.createRef();
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const history=useHistory()









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
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/indexheader.jpg") + ")",
          }}
          ref={pageHeader}
        >
          
        </div>
        <Container>
        <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/now-logo.png")}
            ></img>
          </div>
          <div className="content-center brand" style={{paddingTop:500}}>
           
          <h1>Welcome to Online Selling Center</h1>
          </div>
          <h6 style={{margin:10}} className="category category-absolute">
         
            Your One Stop Shop
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
