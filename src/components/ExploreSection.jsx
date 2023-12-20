import React from 'react'
import './ExpoloreSection.css';
function ExploreSection() {
  return (
    <div style={{display:'flex',flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px",marginTop:"50px",color:"black"}}>
        <h1 >Explore PlayStation<sup>®</sup> 4</h1>
      <p style={{color:"black"}}>
        Incredible games, non-stop entertainment. There's never been a better
        time to enjoy PS4.
      </p>
      <div class="explore-section-cards" >
        <div class="explore-section-card" >
          <img src="https://gameloot.in/wp-content/uploads/2020/12/4-1-300x343.jpg" alt="" />
          <h1>PlayStation 4</h1>
          <p style={{color:"black"}}>Incredible games live on PS4, with 1TB storage</p>
          <button class="btn_blue">Learn More</button>
        </div>
        <div class="explore-section-card">
          <img src="https://images.indianexpress.com/2018/05/sonyplaystationvr_big_1.jpg" alt="" />
          <h1>PlayStation VR</h1>
          <p style={{color:"black"}}>Over 500 games and experiences and couting. See them all</p>
          <button class="btn_blue">Learn More</button>
        </div>
        <div class="explore-section-card">
          <img src="https://i.inews.co.uk/content/uploads/2019/03/logitech-steering-wheel.jpg" alt="" />
          <h1 >Accessories</h1>
          <p style={{color:"black"}}>
            Enhance your PS4 experience with a range of official accessories
          </p>
          <button class="btn_blue">Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default ExploreSection