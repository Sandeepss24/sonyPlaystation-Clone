import React from 'react'
import './FollowUs.css'
function FollowUs() {
  return (
    <div className="follow-us-section" style={{ width: '100%', marginTop: '30px', backgroundColor: '#f5f7fa',height:"70vh" }}>
      <div className="container d-flex flex-column align-items-center justify-content-center p-4">
        <h1 style={{ color: 'black', fontFamily: 'SST Light2', fontSize: '35px', textAlign: 'center' }}>Follow us on Social Media</h1>

        <div className="d-flex align-items-center justify-content-center follow-us-section-icons d-grid grid-gap-2 grid-template-columns-sm-2 grid-template-columns-md-4 cursor-pointer mt-5" >
          <img
            src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
            alt="Twitter"
            style={{ width: '90%', height: '90%', objectFit: 'contain', maxWidth: '70px' }}
          className='m-2 icons'/>
          <img
            src="https://icons-for-free.com/iconfiles/png/512/facebook+logo+media+network+social+icon-1320192913497992427.png"
            alt="Facebook"
            style={{ width: '90%', height: '90%', objectFit: 'contain', maxWidth: '70px' }}
            className='m-2 icons'/>
          <img
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"
            alt="Instagram"
            style={{ width: '90%', height: '70%', objectFit: 'contain', maxWidth: '70px' }}
            className='m-2 icons'/>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/512px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png"
            alt="YouTube"
            style={{ width: '90%', height: '90%', objectFit: 'contain', maxWidth: '70px' }}
            className='m-2 icons'/>
        </div>
      </div>
    </div>
    // <div class="follow-us-section " style={{width:"100%",marginTop:"30px",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:" #f5f7fa",padding:"100px",gap:"50px"}}>
    // <h1 style={{color:"black",fontFamily: "SST Light2",fontSize:"35px"}}>Follow us on Social Media</h1>

    // <div class="follow-us-section-icons" style={{width:"40%",display:"grid",gridGap:"10px",gridTemplateColumns:"repeat(4,1fr)",cursor:"pointer"}}>
    // <img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt=""  style={{width:"90%",height:"90%",objectFit:"contain"}}/>
    // <img src="https://icons-for-free.com/iconfiles/png/512/facebook+logo+media+network+social+icon-1320192913497992427.png" alt="" style={{width:"90%",height:"90%",objectFit:"contain"}}/>
    // <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="" style={{width:"90%",height:"90%",objectFit:"contain"}}/>
    // <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg/512px-YouTube_play_button_icon_%282013%E2%80%932017%29.svg.png" alt="" style={{width:"90%",height:"90%",objectFit:"contain"}}/>
    // </div>
    // </div>
  )
}

export default FollowUs