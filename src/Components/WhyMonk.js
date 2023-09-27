import React from 'react'
import "./WhyMonk.css";

const WhyMonk = () => {
  return (
    <div className='monk'>
      <h4 style={{fontWeight:"bold"}}><i>WHY MONK IT SERVICES </i></h4>
      <div className='main-monk'>
        <div className='monk-child' style={{ backgroundColor: "#d1e8fe" }}>
          <img src='./first.png' alt='webkkk' />
          <h4 style={{ color: "#2390fc" }}>Strong Technical</h4>
          <button style={{ backgroundColor: "#118efc" }}>Read</button>
        </div>

        <div className='monk-child' style={{ backgroundColor: "#fcd7e0" }}>
          <img src='second.jpg'  alt='imgbbbb'/>
          <h4 style={{ color: "#fd769a" }}>Full Customized</h4>
          <button style={{ backgroundColor: "#fe688b" }}>Read </button>
        </div>

        <div className='monk-child' style={{ backgroundColor: "#c7f7ea" }}>
          <img src='fourth.jpg'alt='welllb' />
          <h4 style={{ color: "#1ebf9c" }}>Cost effective solutions</h4>
          <button style={{ backgroundColor: "#1dbf94" }}>Read </button>
        </div>

        <div className='monk-child' style={{ backgroundColor: "#c3eefd" }}>
          <img src='third.jpg' alt='imgjjjjj'/>
          <h4 style={{ color: "#2fa1b1" }}>Customer Centric</h4>
          <button style={{ backgroundColor: "#13a1b1" }}>Read </button>
        </div>

        <div className='monk-child' style={{ backgroundColor: "#ffd2be" }}>
          <img src='./fifth.png' alt='webnnn' />
          <h4 style={{ color: "#f17746" }}>Transparency</h4>
          <button style={{ backgroundColor: "#f17741" }}>Read </button>
        </div>

        <div className='monk-child' style={{ backgroundColor: "#ecdefd" }}>
          <img src='./sixth.jpg' alt='webccc' />
          <h4 style={{ color: "#ad8af1" }}>Trust & Support</h4>
          <button style={{ backgroundColor: "#ac74ee" }}>Read </button>
        </div>

        <div className='monk-child' style={{ backgroundColor: "#f5ecad" }}>
          <img src='./seventh.jpg' alt='webvvv' />
          <h4 style={{ color: "#cdb21b" }}>Creative Ideas</h4>
          <button style={{ backgroundColor: "#c3ab03" }}>Read </button>
        </div>

      </div>
    </div>
  )
}

export default WhyMonk;
