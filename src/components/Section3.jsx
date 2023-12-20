import React from 'react'
import './Section3.css'
import Button from 'react-bootstrap/Button';

function Section3() {
  return (
    <div className="section d-flex flex-wrap" style={{ width: '100%', height: '100vh', position: 'relative' }}>
    <div className="col-lg-6 col-md-12 d-flex flex-column p-4 gap-3">
      <img src="https://raw.githubusercontent.com/7Mudit/play-station/main/img.webp" style={{ height: '75%', width: '75%' }} alt="PlayStation" />
      <p style={{ lineHeight: '26px', color: 'black' }}>
        Enhance your PlayStation experience with access to online multiplayer, monthly games, exclusive discounts and
        more.
      </p>
      <Button className="btn_blue" variant="primary" className="ms-4 btn rounded-pill" style={{ width: '200px' }}>
        Explore PlayStation Plus
      </Button>
    </div>
    <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center p-4">
      <img
        src="https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-jul-monthly-games-featured-image-block-01-28jun23$en?$1600px--t$"
        alt="PlayStation Plus Monthly Games"
        style={{ width: '90%', height: '90%', margin: '0 auto' }}
      />
    </div>
  </div>
    // <div class="section" style={{width:"100%",height:"100vh",position:"relative"}}>
    //     <div style={{width:"50%",display:"flex",flexDirection:"column",padding:"80px",gap:"30px"}}>
    //         <img src='https://raw.githubusercontent.com/7Mudit/play-station/main/img.webp' style={{height:"75%",width:"75%"}}></img>
    //         <p style={{lineHeight:"26px", color:"black"}}>
    //         Enhance your PlayStation experience with access to online
    //         multiplayer, monthly games, exclusive discounts and more.
    //       </p>
    //       <Button class="btn_blue" variant="primary" className='ms-4 btn rounded-pill' style={{width:"200px"}}>Explore PlayStation Plus</Button>{' '}
    //     </div>
    //     <div style={{width:"50%",display:"flex",alignItems:"center",justifyContent:"center",padding:"50px"}}>
    //         <img src='https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-jul-monthly-games-featured-image-block-01-28jun23$en?$1600px--t$' media="(min-width: 1024px),(min-width: 768px),(min-width: 320px),"   style={{width:"90%",height:"90%",margin:"0 auto"}}/>
            
    //     </div>
    // </div>
  )
}

export default Section3