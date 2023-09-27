import React, { useState } from 'react'
import "./Model.css";


const data = ["Web Application Development", "E-commerce Website", "Digital Marketing",
"Web App Development", "Domain && Hoisting Services", "Customized Software Development"]


const Model = ({ setShowmodel }) => {
    const [type, setType] = useState("Web Application Development")

    const handletypeChange = (event) => {
        
        const choosetype = event.target.value;
        setType(choosetype)

    }
    return (
        <div className='model-wrapper'>
            <div style={{ color: "black" }} className='model-container'>

                <div className='model-left'>
                    <div className='model-image'>
                        <img src='./contact_img.png' alt='contact' />
                    </div>
                    <span style={{ color: "#fff", marginLeft: "17px" }}>Phone: +91 836-986-64496</span>
                    <span style={{ color: "#fff", marginLeft: "17px" }}>Email: info@monkconsultantancy.com</span>
           
       
                </div>
                <div className='model-right'>
                    <button style={{marginLeft:"260px",width:"20px",border:"none",backgroundColor:"#fff",
                      color:"black", marginTop:"3px"}} onClick={()=>setShowmodel(false)}>X
                    </button>
                    <p>Get in Touch With Us!</p>
                    <div className='model-input'>
                        <input type='text' placeholder='Name' />
                        <input type='number' placeholder='Number' />
                        <input type='email' placeholder='Email' />
                    </div>

                    <div className='selectoption'>

                        <select onChange={handletypeChange}>

                            {data.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className='buttn'>
                         <button>Submit Request</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Model
