import React from 'react'
import Button from 'react-bootstrap/Button';
import './Banner2.css';
function Banner2() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 justify-content-center align-items-center" style={{marginTop:"110px"}}>
          {/* Content for the first column */}
          <h1 style={{ color: '#31a2d9', fontSize: '32px'}}>PlayStation 5 Console</h1>
          <p style={{ color: 'black', fontSize: '22px' }}>Experience an all-new generation of<br/>
              incredible PlayStation games.</p>
          <div className="d-flex ">
            <Button className="btn_blue " variant="primary" style={{ width: '100%', maxWidth: '200px', alignSelf: 'center' }}>
              Find out more
            </Button>
            <Button className="btn_blue ms-4" variant="primary" style={{ width: '100%', maxWidth: '200px', alignSelf: 'center' }}>
              Buy now
            </Button>
          </div>
        </div>
        <div className="col-md-6">
          {/* Content for the second column */}
          <img
            src='https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-horizontal-product-shot-01-ps5-en-23nov20?$4000px--t$'
            alt="PlayStation 5"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
    // <div className='expand-lg' style={{height:"100vh",width:"100%",display:'flex',flexDirection:"row",position:"relative"}}>
    //     <div style={{display:"flex",flexDirection:"column",gap:"30px",alignItems:"flex-start",justifyContent:"center",padding:"50px",paddingBottom:"90px"}}>
    //         <h1 style={{color:"#31a2d9",fontSize:"32px"}}>PlayStation 5 Console</h1>
    //         <p style={{color:"black",fontSize:"22px"}}>Experience an all-new generation of<br/>
    //          incredible PlayStation games.</p>
    //         <div style={{display:"flex"}}>
    //             <Button class="btn_blue" variant="primary" className='btn rounded-pill' >Find out more</Button>{' '}
    //             <Button class="btn_blue" style={{marginLeft:"2rem"}} variant="primary" className='ms-4 btn rounded-pill' >Buy now</Button>{' '}
    //         </div>
    //     </div>
    //     <div style={{width:"60%",margin:"0 auto"}}>
    //         <img src='https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-horizontal-product-shot-01-ps5-en-23nov20?$4000px--t$' style={{width:"100%",height:"100vh"}}/>
    //     </div>
    // </div>
  )
}

export default Banner2