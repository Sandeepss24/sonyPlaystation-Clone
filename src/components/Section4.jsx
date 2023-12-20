import React from 'react'
import './Section4.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap'
function Section4() {
  return (
    <div class="section-4">
      <div class="media-block__img" style={{width:"100%",height:"140vh"}}>
        <p style={{fontSize:"34px",fontWeight:"bolder"}} className='fw-b'>THIS MONTH</p>
        <p style={{fontSize:"40px",fontWeight:"bolder"}}>ON PLAYSTATION</p>
        <p style={{fontSize:"16px"}}>
          Check out this month's biggest releases along with <br/>
          dedicated features,guides and more.
        </p>
        <Button variant="light" className='ms-4 btn rounded-pill' >Find out more</Button>{' '}
  
      <div class="cards-section">
          <div class="cards-section1">
          <img src='https://gmedia.playstation.com/is/image/SIEPDC/21-games-keyart-01-07jun23$en?$1600px$'  media="(min-width: 1024px),(min-width: 768px)" />
          <p>21 great games you might've missed in 2023</p>
          </div>
  
          <div class="cards-section2">
          <img src='https://gmedia.playstation.com/is/image/SIEPDC/best-fighting-games-keyart-02-en-27jun23?$1600px$'  media="(min-width: 1024px),(min-width: 768px)" />
          <p>The best fighting games on PS4 and PS5</p>
          </div>
  
          <div class="cards-section3">
          <img src='https://gmedia.playstation.com/is/image/SIEPDC/single-player-action-keyart-01-en-21oct22?$1200px$'  media="(min-width: 1024px),(min-width: 768px)" />
          <p>Best single-player story-driven games on PS4 and PS5</p>
          </div>
      </div> 
        
      </div>
    </div>
  )
}

export default Section4


