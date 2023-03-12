import React from "react";
import proj1 from './project1.png';

import './project.css'

const Project=()=>{
    return(
        <div>
        
                <h1>Project</h1>
                    <br></br>
                <div className="proj1">
                    <section><img src={proj1} alt="super-market-project" width="350px" height="200px"></img></section>
                    <section>
                        <p><strong>Super-Market Management</strong></p>
                        <p>This is a prototype solution for my Supermarket Data Management Application Project with basic C++ Structure Concept. Has two user access. With able to Update, insert and view the data only for Administrator and able to enter customer goods pick up and view their details for cashier</p>
                        <div className="repos">
                            <a href="https://github.com/pugazhenthi2002/Super-Market-Data-Management">Repository</a>
                        </div>
                    </section>
                </div>
                   
            
        
    </div>
    )
}

export default Project;