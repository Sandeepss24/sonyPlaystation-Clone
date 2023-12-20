import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Newreleases from './components/Newreleases'
import ExploreSection from './components/ExploreSection'
import FollowUs from './components/FollowUs'
import Footer from './components/Footer'
function App() {
  return (
    <div>
    <div className=" position-fixed top-0 w-100" style={{width:'100%' , height:"30px" , display:'flex',justifyContent:"flex-end",backgroundColor:"black",zIndex:'-999'}}>
      <img style={{width:"70px"}}
        src="https://store.playstation.com/static/lib/shared-nav/2.4.0/assets/fonts/sony_logo.svg"
      />
    </div>
    <Header/>
    <Banner/>
    
    <Banner2/>
    <Section3/>
    {/* <Section4/> */}
      <Newreleases/>
      <ExploreSection/>
      <FollowUs/>
      <Footer/>
   </div>
  )
}

export default App