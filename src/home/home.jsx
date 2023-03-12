import React from "react";
import './home.css'
import dbms from './dbms.png';
import cloud from './R.png';
import linkedin from './LinkedIn.png';
import github from './GitHub.png';
import leetcode from './leetcode.png';
import hackerrank from './HackerRank.png';
const Home=()=>{
    return(

        <div>
                    <div className="career_obj">
                        <h1>Home</h1>
                        Hello! I am Pugazhenthi Thaniarasu I R.<br></br>
                        <p>Seeking for a Challenging position in a fast-growing organization to utilize expertise in software development and testing, as well as deployment and support using agile development methodologies.</p>                       
                        <p>So, I just have designed my Resume as website. So that, you can go through my resume. If the resume satifies you, you can ping me.</p>
                    </div>
                    <div className="Areas">
                        <h1>Areas of Interest</h1>
                        <div className="Areas_pic">
                            <section><img src={dbms} alt="DBMS" width="100px"></img><p>DBMS</p></section>
                            <section><img src={cloud} alt="Cloud" width="100px"></img><p>Cloud</p></section>
                        </div>
                    </div>
                    <div className="Lang">
                        <h1>Languages Known</h1>
                        <table>
                            <tr>
                                <th>English</th>
                                <td>Speak, </td>
                                <td>Write, </td>
                                <td>Read</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Tamil</th>
                                <td>Speak, </td>
                                <td>Write, </td>
                                <td>Read</td>
                            </tr>
                            <br></br>
                            <tr>
                                <th>Kannada</th>
                                <td>Speak</td>
                            </tr>
                        </table>
                    </div>
                    <div className="social_profile">
                        <h1>Profiles</h1>
                        <section className="s_p">
                            <div><a href="https://www.linkedin.com/in/pugazhenthi-i-r/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" width="100px"></img></a></div>
                            <div><a href="https://github.com/pugazhenthi2002/" target="_blank" rel="noreferrer"><img src={github} alt="GitHub" width="100px"></img></a></div>
                            <div><a href="https://leetcode.com/pugazhenthiir2002/" target="_blank" rel="noreferrer"><img src={leetcode} alt="Leetcode" width="120px"></img></a></div>
                            <div><a href="https://www.hackerrank.com/pugazhenthiir201" target="_blank" rel="noreferrer"><img src={hackerrank} alt="HackerRank" width="100px"></img></a></div>
                        </section>
                    </div>
        </div>
    )
}

export default Home;