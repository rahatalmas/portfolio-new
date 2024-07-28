import React, { useState } from 'react';
import './Home.css';
import IndexHeader from './IndexHeader';
import ProjectCard from './ProjectCard';


const Home = () =>{

    

    return(
      <div className='main-container'>
          <div className='home-container'>
             <section className='about-section'>
                 <div className='about-card-container'>
                     <div className='about-card'>
                        <div className='card-head'><h2>Profile Card</h2> <button className='cv-btn'>CV</button></div>
                        <div className='card-image-con'>
                           <img src='./images/vector2.png' className='about-image' />
                        </div>
                        <div className='card-info-con'>
                           <p className='degree'>B.Sc in Computer Science and Engineering</p>
                           <p>Daffodil International University</p>
                           <p>Dhaka, Bangladesh</p>
                           <p><span> G </span><span> L </span> <span> I </span></p>
                        </div>
                        <button className='mail-btn'>Send Mail</button>
                     </div>
                 </div>
                 <div className='about-decription-container'>
                    <IndexHeader title1={"Intro"}/>
                    <p className='my-keys'><span className='key'>Compettitive Programming | </span><span className='key'>Development | </span><span className='key'>Design</span></p>
                    <p>Developed a student-focused food delivery
                        and management website enabling meal or-
                        dering and monthly planning from home or
                        hostel. Implemented hotel integration for weekly
                        meal orders, providImplemented hotel integration for weekly
                        meal orders, providing students with diverse
                        dining options. Created a robust backend for hotels to man-
                        age menus, orders, and historical data, enhanc-
                        ing operational eﬃciency.ing students with diverse
                        dining options. created a robust backend for hotels to man-
                        age menus, orders, and historical data, enhanc-
                        ing operational eﬃciency.
                    </p>
                    <h3></h3>
                    <p>
                        <span className='attribute'>Programming Language:</span>
                        <span className='attr-value'> C, </span>
                        <span className='attr-value'>C++, </span>
                        <span className='attr-value'>Golang, </span>
                        <span className='attr-value'>JavaScript, </span>
                        <span className='attr-value'>Dart, </span>
                        <span className='attr-value'>Python</span>
                    </p>
                    <h3>Skills</h3>
                    <ul>
                        <li>
                            <div className='skill-container'>
                               <h4 className='skill-title'>Mobile App Development</h4>
                               <p className='skill-description'>Develop mobile app using flutter. </p>
                            </div>
                        </li>
                        <li>
                            <div className='skill-container'>
                               <h4 className='skill-title'>Mobile App Development</h4>
                               <p className='skill-description'>Develop mobile app using flutter. </p>
                            </div>
                        </li>
                        <li>
                            <div className='skill-container'>
                               <h4 className='skill-title'>Mobile App Development</h4>
                               <p className='skill-description'>Develop mobile app using flutter. </p>
                            </div>
                        </li>
                    </ul>
                 </div>
             </section>

             <section className='project-section'>
                 <IndexHeader
                   title1={"Projects"}
                 />
                 <div className='project-card-container'> 
                   <ProjectCard/>
                   <ProjectCard/>
                   <ProjectCard/>
                   <ProjectCard/>
                 </div>
                 
             </section>

             <section className='sitemap-section'>
             </section>
          </div>
      </div>
    );
}

export default Home;