import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { logout, getSpecificUser, } from "../../config/firebase"
// import 'bootstrap/dist/css/bootstrap.min.css'
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
  Input
} from "reactstrap";

function IndexNavbar({ user }) {


  const [navbarColor, setNavbarColor] = React.useState("blue");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [userDetails, setUserDetails] = useState([])
  const [loading, setloading] = useState(true)




  const history = useHistory()

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("blue");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  useEffect(() => {
    getSpecificUser(user.email).then(res => {
      setUserDetails(res)
      setloading(false)
      console.log(userDetails.map(item => { return item.picture }))


    })


  }, [])
return (
    <>

      <div>
        {collapseOpen ? (
          <div
            id="bodyClick"
            onClick={() => {
              document.documentElement.classList.toggle("nav-open");
              setCollapseOpen(false);
            }}
          />
        ) : null}
        <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info" >
          <Container >

            <div className="navbar-translate">



              <Col sm="3" >

                <img
                  onClick={() => history.push('/profilepage')}
                  style={{ height: 80, width: 350 }}
                  alt="..."
                  className="rounded-circle img-raised"
                  src={userDetails.map(item => { return item.picture })}
                ></img>
              </Col>
              <NavbarBrand
                style={{ paddingTop: 40, paddingLeft: 5 }}
                target="_blank"
                id="navbar-brand"
              >
                Dashboard
            </NavbarBrand>
              <UncontrolledTooltip target="#navbar-brand">
                Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip>
              <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                type="button"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </div>
            <Collapse
              className="justify-content-end"
              isOpen={collapseOpen}
              navbar
            >
              <Nav navbar>
                <NavItem>
                  <NavLink

                  >
                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>


                  </NavLink>
                </NavItem>

                <NavItem>
                  <Button
                    onClick={() => history.push('/sell')}
                    className="nav-link btn-neutral"
                    color="success"



                  >
                    <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                    <p style={{color:"black"}}>Sell items</p>
                  </Button>
                  <UncontrolledTooltip target="#upgrade-to-pro">
                    Become a seller
                </UncontrolledTooltip>
                </NavItem>
                <Button

                  className="nav-link btn-neutral"
                  color="primary"
                  href="#pablo"
                  id="upgrade-to-pro"
                  onClick={(e) =>  logout()}
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Log Out</p>
                </Button>

              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default IndexNavbar;
