import React, { useState } from 'react';
import './Home.css';
import '../components/PopUpDetails'
import PopUpDetails from '../components/PopUpDetails';
import { FaShapes,FaLaptopCode,FaChalkboardTeacher,FaGraduationCap,FaUser, FaEnvelope, FaDownload, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';


const Home = () =>{

   const [pop,setPop] = useState(false);
   const popUp = () =>{
      if(pop){
         document.body.style.overflow="scroll"
         setPop(!pop)
      }else{
         document.body.style.overflow="hidden"
         setPop(!pop)
      }
   }

    return(
      <div className='home-container'>
      <div className='home-header-section'>
        <div className='profile-card'>
            <div className='profile-card-header'>
              <h3>Md Tariqul Islam</h3> <button className='profile-card-cv-btn'>CV <FaDownload/></button>
            </div>
            <img alt='Profile Image' src='./images/luffy.jpeg' className='profile-card-imgsrc'/>
            <div className='profile-card-desc'>
               <p>tariq@gmail.com</p>
               <p>Dhaka, Bangladesh</p>
               <p>Researcher</p>
               <div className='social-links'>
                  <a href="https://www.instagram.com">
                  <FaInstagram size={32} />
                  </a>
                  <a href="https://www.facebook.com">
                  <FaFacebook size={32} />
                  </a>
                  <a href="https://www.linkedin.com/in">
                  <FaLinkedin size={32} />
                  </a>
                  <a href="https://github.com">
                  <FaGithub size={32} />
                  </a>
               </div>
            </div>
            <button className='mail-btn'>Send Mail</button>
         </div>
         <div className='h-section-row'>
            <div className='break-h1'>
            <div><FaUser size={50}/></div>
               <h1 className='h1-w1'>About</h1><h1 className='h1-w2'>Me</h1>
            </div>
            <p> <span style={{color:"#28e98c",fontSize:"22px",fontWeight:"bold"}}>Aspiring Scientist </span>| <span style={{color:"#28e98c",fontSize:"22px",fontWeight:"bold"}}> AI & Data Enthusiast </span>| <span style={{color:"#28e98c",fontSize:"22px",fontWeight:"bold"}}>Computer Science Graduate</span ></p>
            <p>Hello! I'm Tariqul Islam, an aspiring scientist with a strong background in Computer Science & Engineering, focusing on Machine Learning and Deep Learning. I have experience conducting research, managing conferences, overseeing data collection projects, and developing machine learning models. I'm passionate about using these technologies to solve real-world problems. My goal is to become a scientist and make significant contributions to this exciting field.</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            
            <div className='profile-keys'>
             <h3 className='key'>Research Interest:</h3>
                  <p className='keyn'> Casual Learning, </p>
                  <p className='keyn'> Deep Learning, </p>
                  <p className='keyn'> Health Learning in Ai, </p>
                  <p className='keyn'> Supervised Learning </p>
            </div>
         </div>
       </div>
       <div className='h-section-row'>
            <div className='break-h1'>
            <div><FaGraduationCap size={65}/></div>
               <h1 className='h1-w1'>Education</h1><h1 className='h1-w2'></h1>
            </div>
            <div className='h-section-content'>
                  <div className='h-section-content-head'>
                     <h1>BACHELOR IN COMPUTER SCIENCE & ENGINEERING</h1>
                     <button className='details-btn' onClick={popUp} >Details</button>
                  </div>
                  <div className='dotanddata'><div className='circle'></div><h4>10/08/2023 – 20/08/2023 </h4> </div>
                  <div className='dotanddata'>
                     <div className='circle'></div>
                     <p>Contributed to a multi-faceted research project funded by ARA and UKAID, conducted by
                     the Faculty of Graduate Studies at Daffodil International University.</p>
                  </div>
            </div>
         </div>
       <div className='h-section-row'>
            <div className='break-h1'>
            <div><FaChalkboardTeacher size={55}/></div>
               <h1 className='h1-w1'>Training</h1><h1 className='h1-w2'></h1>
            </div>
            <div className='h-section-content'>
                  <div className='h-section-content-head'>
                     <h1>Big Data Analysis</h1>
                     <button className='details-btn' onClick={popUp} >Details</button>
                  </div>
                  <div className='dotanddata'><div className='circle'></div><h4>10/08/2023 – 20/08/2023 </h4> </div>
                  <div className='dotanddata'>
                     <div className='circle'></div>
                     <p>Acquiring essential skills and hands-on experience in real-world projects while receiving
                        mentorship from industry experts, highlighting a strong aptitude for rapid learning and a
                        commitment to career growth.</p>
                  </div>
            </div>
            <div className='h-section-content'>
                  <div className='h-section-content-head'>
                     <h1>Big Data Analysis</h1>
                     <button className='details-btn' onClick={popUp} >Details</button>
                  </div>
                  <div className='dotanddata'><div className='circle'></div><h4>10/08/2023 – 20/08/2023 </h4> </div>
                  <div className='dotanddata'>
                     <div className='circle'></div>
                     <p>Acquiring essential skills and hands-on experience in real-world projects while receiving
                        mentorship from industry experts, highlighting a strong aptitude for rapid learning and a
                        commitment to career growth.</p>
                  </div>
            </div>
         </div>
         <div className='h-section-row'>
            <div className='break-h1'>
            <div><FaLaptopCode size={55}/></div>
               <h1 className='h1-w1'>Online</h1><h1 className='h1-w2'>Courses</h1>
            </div>
            <div className='h-section-content'>
                  <div className='h-section-content-head'>
                     <h1>BACHELOR IN COMPUTER SCIENCE & ENGINEERING</h1>
                     <button className='details-btn' onClick={popUp} >Details</button>
                  </div>
                  <div className='dotanddata'><div className='circle'></div><h4>10/08/2023 – 20/08/2023 </h4> </div>
                  <div className='dotanddata'>
                     <div className='circle'></div>
                     <p>Contributed to a multi-faceted research project funded by ARA and UKAID, conducted by
                     the Faculty of Graduate Studies at Daffodil International University.</p>
                  </div>
            </div>
         </div>
         <div className='h-section-row'>
            <div className='break-h1'>
            <div><FaShapes size={55}/></div>
               <h1 className='h1-w1'>Skills</h1><h1 className='h1-w2'></h1>
            </div>
            <div className='h-section-content'>
                  <div className='h-section-content-head'>
                     <h1>BACHELOR IN COMPUTER SCIENCE & ENGINEERING</h1>
                     <button className='details-btn' onClick={popUp} >Details</button>
                  </div>
                  <div className='dotanddata'><div className='circle'></div><h4>10/08/2023 – 20/08/2023 </h4> </div>
                  <div className='dotanddata'>
                     <div className='circle'></div>
                     <p>Contributed to a multi-faceted research project funded by ARA and UKAID, conducted by
                     the Faculty of Graduate Studies at Daffodil International University.</p>
                  </div>
            </div>
         </div>
         <PopUpDetails popState={pop} off={popUp}></PopUpDetails>
      </div>
    );
}

export default Home;