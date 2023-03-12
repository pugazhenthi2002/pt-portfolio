import React from "react";
import c from './C.png';
import cpp from './C++.png';
import python from './Python.png';
import mysql from './mysql.png';
import html from './HTML 5.png';
import css from './CSS 3.png';
import js from './JS.png';
import '../home/skills.css';

const Skills=()=>{
    return(
        <div>
                    <h1>Skills</h1>
                    <br></br>
                    <h2>Programming</h2>
                    <div className="tech_skill">
                        <section><img src={c} alt="C" width="150px"></img></section>
                        <section><img src={cpp} alt="CPP" width="150px"></img></section>
                        <section><img src={python} alt="Python" width="145px"></img></section>
                    </div>
                    <h2>DBMS</h2>
                    <div className="db_skill">
                        <section><img src={mysql} alt="mysql" width="150px"></img></section>
                    </div>
                    <h2>Web</h2>
                    <div className="web_skill">
                        <section><img src={html} alt="html" width="150px"></img></section>
                        <section><img src={css} alt="CSS" width="150px"></img></section>
                        <section><img src={js} alt="JS" width="150px"></img></section>
                    </div>
            
        </div>
    )
}

export default Skills;