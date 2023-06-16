import React from 'react';
import './Home.css';

const Home = () =>{
    return(
       <div className='component-container'>
          <div className='intro-image-container'>
               <img alt='rahat-almas' src='./images/vector2.png' style={{width:"500px",}}/>
          </div>
          <div className='intro-text-container'>
               <h1>Hi, I'm Rahat Almas</h1>
               <p>I'm a Full Stack Developer</p>
          </div>
       </div>
    );
}

export default Home;