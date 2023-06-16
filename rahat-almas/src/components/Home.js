import React from 'react';
import './Home.css';

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
                </div>
          </div>


          <div className='about'>
                <div className='language-skills'>
                    <div className='language-skills-item'>
                        <h4>Language :</h4>
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
                                <li>Dart</li>
                                <li>Java</li>
                            </ul>
                        </div>
                    </div>
                    <div className='language-skills-item'>
                        <h4>Skills :</h4>
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
                   
                        <div className='project-row'> 
                                <div className='project-card'>
                                        <div className='card-title-section'>
                                            <img className='project-image' src='./images/languages/cutie.png' />
                                            <h3>Rest API (NodeJs)</h3>
                                        </div>
                                        <div className='card-description-section'>
                                            <p>
                                                description...
                                            </p>
                                            <div>
                                                links ...
                                            </div>
                                        </div>
                                </div>

                                <div className='project-card'>
                                        <div className='card-title-section'>
                                            <img className='project-image' src='./images/languages/cutie.png' />
                                            <h3>title</h3>
                                        </div>
                                        <div className='card-description-section'>
                                            <p>
                                                description...
                                            </p>
                                            <div>
                                                links ...
                                            </div>
                                        </div>
                                </div>

                                <div className='project-card'>
                                        <div className='card-title-section'>
                                            <img className='project-image' src='./images/languages/cutie.png' />
                                            <h3>title</h3>
                                        </div>
                                        <div className='card-description-section'>
                                            <p>
                                                description...
                                            </p>
                                            <div>
                                                links ...
                                            </div>
                                        </div>
                                </div>
                        </div>
                </div>
          </div>

          <div>
            Footer
          </div>
     
       </div>
    );
}

export default Home;