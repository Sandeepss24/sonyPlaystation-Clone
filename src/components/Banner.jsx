import React from 'react'
import './Banner.css'
import Button from 'react-bootstrap/Button';

function Banner() {
  return (
    <div style={{position:"relative"}}>
        <div class="dark-overlay">
        <img src='https://gmedia.playstation.com/is/image/SIEPDC/marvels-spider-man-2-logo-02-en-02dec22?$800px--t$' style={{width:"80%",height:"auto",marginLeft:"80px",marginTop:"70px"}}/>
        <h2 class="content-overlay-heading" className='fw-b mt-4 ms-5'>"We're going to heal the world"</h2>
        <p class="content-overlay-para" className='mt-4 ms-5'>
        Catch up with Peter Parker & Miles Morales in the brand new<br/>
        story trailer for Marvel's Spider-Man 2, coming to PS5 on October 20
        </p>
        <div class="content-overlay-buttons">
        {/* <Button variant="light" size="md" className='btn rounded-pill ms-5 mt-4' class="btn_blue">
          Watch the trailer
        </Button>{' '}           */}
        <Button className="btn_blue ms-5 mt-4" variant="primary" style={{ width: '100%', maxWidth: '200px', alignSelf: 'center' }}>
        Watch the trailer
        </Button>
        <Button variant="danger" size="sm" className="btn_blue ms-5 mt-4" style={{ width: '100%', maxWidth: '200px', alignSelf: 'center' }}>
          Pre-order now
        </Button>{' '} 
       </div>
        </div>
        <img style={{width:"100%",height:"100vh"}} src='https://64.media.tumblr.com/3fb62fd3739340e263a53045af7dff0d/5b71104488d44dad-d5/s540x810/edb7ac7b357afce060ce178d9a67266c41f336d0.gif' alt='no img'/>
        
    </div>
  )
}

export default Banner

