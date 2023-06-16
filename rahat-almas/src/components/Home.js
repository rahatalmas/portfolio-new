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
                    <div>
                        language section
                    </div>
                    <div>
                        Skill section
                    </div>
                </div>
                <div className='projects'>
                    <div>
                        project card
                    </div>
                </div>
          </div>
     
       </div>
    );
}

export default Home;