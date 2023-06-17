import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import About from './About';
const Home = () =>{
    return(
       <div className='component-container'>

          <div className='home'>
                <div className='intro-image-container'>
                    <img alt='rahat-almas' src='./images/vector2.png' style={{width:"500px",}}/>
                </div>
                <div className='intro-text-container'>
                    <h1>Hi, I'm Rahat Almas</h1>
                    <p>I'm a Full Stack Developer</p>
                    <div className='profiles'>
                       <p> "_"  ^.^ "." ^_^  </p>
                       <p> "_"  ^.^ "." ^_^  </p>
                    </div>
                    <button className='intro-section-button'>Knock!</button>
                </div>
          </div>


          <div className='about'>
                <div className='language-skills'>
                    <div className='language-skills-item'>
                        <h4>Language ~$</h4>
                        <div className='l-s-img-row'>
                            <img className='l-s-img' alt='c++' src='./images/languages/cpp.png'/>
                            <img className='l-s-img' alt='javascript' src='./images/languages/js.png'/>
                            <img className='l-s-img' alt='python' src='./images/languages/python.png'/>
                            <img className='l-s-img' alt='dart' src='./images/languages/golang.png'/>
                            <img className='l-s-img' alt='java' src='./images/languages/java.png'/>
                        </div>
                        <div className='l-s-description'>
                            <ul>
                                <li>C++ : Hello from cpp </li>
                                <li>JavaScript</li>
                                <li>Python</li>
                                <li>GoLang</li>
                                <li>Java</li>
                            </ul>
                        </div>
                    </div>
                    <div className='language-skills-item'>
                        <h4>Skills ~$</h4>
                        <div className='l-s-img-row'>
                            <img className='l-s-img' alt='React' src='./images/skills/react.png'/>
                            <img className='l-s-img' alt='Nodejs' src='./images/skills/nodejs.png'/>
                            <img className='l-s-img' alt='Express' src='./images/skills/express.png'/>
                            <img className='l-s-img' alt='prisma-orm' src='./images/skills/prisma.svg'/>
                            <img className='l-s-img' alt='MySql' src='./images/skills/sql.png'/>
                        </div>
                        <div className='l-s-description'>
                            <ul>
                                <li>React</li>
                                <li>Nodejs</li>
                                <li>Express</li>
                                <li>prisma-orm</li>
                                <li>MySql</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='projects'>
                        <h3 className='project-header' style={{paddingLeft:"2%",textAlign:"center",color:""}}>Projects ~$</h3>
                        <div className='project-row'> 
                                <About/>
                                <About/>
                                <About/>
                                <About/>
                                <About/>
                                <About/>
                        </div>
                </div>
          </div>

          <footer className='site-map'>
              <div className='intro'> 
                    <div className='intro-image-name'>
                        <img className='rahat-almas' alt='rahat-almas' src='./images/vector2.png' style={{width:"75px",}}/>
                        <h3>Rahat Almas</h3>
                    </div>
                    <div className='intro-details'>
                        <a className='sitemap-link'>Email : rahatalmas55@gmail.com</a>
                        <a className='sitemap-link'>Alternative : almas15-3914@diu.edu.bd</a>
                        <a className='sitemap-link'>Phone: +8801*********</a>
                        <a className='sitemap-link'>Education : Daffodil International University</a>
                        <a className='sitemap-link'>Department : Computer Science & Engineering</a>

                    </div>
              </div>
              <div className='profile-container'>
                    <a href='#' className='sitemap-link'><span></span>GitHub</a>
                    <a href='#' className='sitemap-link'>LinkedIn</a>
                    <a href='#' className='sitemap-link'>HackerRank</a>
                    <a href='#' className='sitemap-link'>LeetCode</a>
                    <a href='#' className='sitemap-link'>YouTube</a>
                    <a href='#' className='sitemap-link'>FaceBook</a>
              </div>
              <div className='map'>
                     <Link to="/" className='sitemap-link'>Projects</Link>
                     <Link to="/" className='sitemap-link'>Skills</Link>
                     <Link to="/" className='sitemap-link'>About</Link>
                     <Link to="/" className='sitemap-link'>Blogs</Link>
                     <Link to="/" className='sitemap-link'>Photography</Link>
              </div>
          </footer>
          <div className='end-line'>
             
          </div>

       </div>
    );
}

export default Home;