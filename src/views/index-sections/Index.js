import React, { useState, useEffect } from 'react'
import { getAllAds, uploadProfileImage } from '../../config/firebase'
import { useHistory } from 'react-router-dom'
import FbImageLibrary from 'react-fb-image-grid'
// reactstrap components
import {Input
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function Index({user}) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
   
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  const [ads, setAds] = useState([])
  const [loading, setLoading] = useState(true)
  const history = useHistory()
  const [searchItem, setSearchItem] = useState('')
  


  useEffect(() => {
    console.log("use effect active")

    getAllAds().then(res => {
      setAds(res)

      setLoading(false)
    })
  }, [])





  


  const filteredAds = ads.filter(ads => {

    return ads.title.toLowerCase().includes(searchItem.toLowerCase())
  })



  return (
    <>
      <IndexNavbar user={user}/>
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <div>
            <Input type="text"  placeholder="Search Ad" onChange={(e) => setSearchItem(e.target.value)}/>
            <h2>ALL TRENDING PRODUCTS</h2>
            <div style={{ margin: 'auto', width: 500}}>
              {loading ?
              <img style={{ height: 100, width: 100 }} src='https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif' /> :
              filteredAds.map(items => {
                return <>
                <div style={{ textAlign: "center", height: 'auto', width: '450px', borderRadius: '5px', backgroundColor: "#fff", margin: '40px', cursor: 'pointer' ,border:'solid'}}
                onClick={() => { history.push(`/dashboard/details/${items.id}`) }}>
                   <FbImageLibrary images={items.image}/>
                   <h4>{items.title}</h4> 
                   <h6>$ {items.price}</h6>
                   </div>
                   </>
                   })}
                  </div>
                  </div>
                  </div>
                  <DarkFooter />
                  </div>
    </>
  );
}

export default Index;
