import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register, addUserToDb } from '../../config/firebase'
import swal from 'sweetalert';


// reactstrap components
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

// core components

function SignUp() {

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const history = useHistory()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [fullname, setFullname] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [confirmPassword, setConfirmPassword] = useState()



  function passChecker() {
    if (password === confirmPassword) {
      onSignUp()



    } else {
      swal("Pasword not matched", "failed")
    }
  }
  function onSignUp() {
    register(email, password).then(res => {
      addUserToDb({ email, password, fullname, phoneNumber, }).then(res => {
        swal('You have Successfully Signed up')


      }).catch(e => { alert(e.message) })




    }).catch(e => { alert(e.message) })

  }






















  return (
    <>
      <div
        className="section section-signup"
        style={{
          backgroundImage: "url(" + require("assets/img/newsignup.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          minHeight: "700px",
        }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    Sign Up
                  </CardTitle>
                  <div className="social-line">
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
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
                      onChange={(e) => setFullname(e.target.value)}
                      placeholder="Full Name..."
                      type="text"
                      onFocus={() => setFirstFocus(true)}
                      onBlur={() => setFirstFocus(false)}
                    ></Input>
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
                      onClick={(e) => setEmail(e.target.value)}
                      placeholder="Email..."
                      type="text"
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                    ></Input>
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
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password..."
                      type="password"
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
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password..."
                      type="password"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
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
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone Number..."
                      type="text"
                      onFocus={() => setLastFocus(true)}
                      onBlur={() => setLastFocus(false)}
                    ></Input>
                  </InputGroup>












                </CardBody>
                <CardFooter className="text-center">
                  <Button

                    className="btn-neutral btn-round"
                    color="primary"
                    onClick={(e) => { e.preventDefault(); passChecker() }}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          <div className="col text-center">
            <Button
              onClick={() => history.push('/')}

              className="btn-round btn-white"
              color="default"

              outline
              size="lg"
              tag={Link}
            >
              View Login Page
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SignUp;
