import IndexNavbar from 'components/Navbars/IndexNavbar'
import React from 'react'
import SellHeader from '../../components/Headers/SellHeader'
import DarkFooter from 'components/Footers/DarkFooter'
import ExamplesNavbar from '../../components/Navbars/ExamplesNavbar'

export default function Sell({user}) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
   
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
    return (
        <div>
          <IndexNavbar user={user}/>
          {/* <ExamplesNavbar/> */}
         <div >
         <SellHeader/>
           </div> 
          <DarkFooter/>
          
        </div>
    )
}
