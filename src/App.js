import React, { useState, useEffect } from 'react'
import Navigation from './config/router'
import { auth, logout, getAllUsers } from './config/firebase'
// import IndexNavbar from './components/Navbars/IndexNavbar'
// import 'bootstrap/dist/css/bootstrap.css';



// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit



function App() {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)
  // const [specificUser, setSpecificUser] = useState([])
  // const [profilePicture, setProfilePicture] = useState([])


  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      setUser(user)
      
   


      setLoading(false)



    })
  




  }, [])
  // console.log(specificUser)'




  return (
    <div>
      {loading ? <img style={{margin:'auto',width:'100%'}}src='https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif' />:<Navigation user={user} />}

      


    </div>

  );
}

export default App;

