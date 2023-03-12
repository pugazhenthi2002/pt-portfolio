import React from "react";

import './qualification.css';

const Qualification=()=>{
    return(
        <div>
        
                <h1>Qualification</h1>
                    <br></br>       
                <h2>Bachelor of Engineering</h2>
                <div className="BE">
                    <strong>Bannari Amman Institute of Technology</strong>
                    <p><i>2020-present</i></p>
                    <p>8.56 CGPA (Upto 5th Semester)</p>
                </div>
                <hr color="black"></hr>
                <h2>Higher Secondary Certificate</h2>
                <div className="HSC">
                    <strong>Vijayalakshmi Matric Hr Sec School</strong>
                    <p><i>2019-2020</i></p>
                    <p>82.16%</p>
                </div>
                <hr color="black"></hr>
                <h2>Secondary School Leaving Certificate</h2>
                <div className="SSLC">
                    <strong>Vijayalakshmi Matric Hr Sec School</strong>
                    <p><i>2017-2018</i></p>
                    <p>91.2%</p>
                </div>
            
        
    </div>
    )
}

export default Qualification;