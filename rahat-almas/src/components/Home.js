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
              <h2>Md Tariqul Islam</h2> <button className='profile-card-cv-btn'>CV <FaDownload/></button>
            </div>
            <img alt='Profile Image' src='./images/luffy.jpeg' className='profile-card-imgsrc'/>
            <div className='profile-card-desc'>
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
            <p> <span style={{color:"#28e98c",fontSize:"20px",fontWeight:"bold"}}>Aspiring Scientist </span>| <span style={{color:"#28e98c",fontSize:"22px",fontWeight:"bold"}}> AI & Data Enthusiast </span>| <span style={{color:"#28e98c",fontSize:"22px",fontWeight:"bold"}}>Computer Science Graduate</span ></p>
            <p>I am Tariqul Islam, a passionate and driven individual from Narayanganj, Bangladesh, with a deep-rooted love for science and technology. My journey in the world of computer science began with a Bachelor’s degree in Computer Science and Engineering from Daffodil International University, where I immersed myself in the captivating field of machine learning. From a young age, I've been fascinated by how machines can learn and evolve, and this curiosity has shaped my academic and professional pursuits.</p>

            <p>Throughout my academic career, I've been fortunate to work on some truly exciting projects. One that stands out is my thesis on "Salinity-Resilient Crop Health Monitoring," where I explored the application of machine learning to agriculture, particularly focusing on disease detection in Luffa Aegyptiaca leaves. It was a project that combined my love for technology with a desire to make a tangible difference in people's lives, especially in regions like ours that are often hit hard by climate change. My work experience has been equally fulfilling. At HyperTag Solution Ltd., I had the opportunity to dive deep into practical machine learning applications, developing predictive models and handling real-world datasets. This hands-on experience has not only solidified my technical skills but also fueled my enthusiasm for applying machine learning to solve real-world problems.</p>

<p>What drives me is a passion for learning and an eagerness to contribute to the advancement of technology. I believe in the power of machine learning to transform industries and improve lives, and I am keen to explore this potential further through a Ph.D. program. I am particularly interested in research that can bridge the gap between theoretical advancements and practical applications, making complex technologies accessible and beneficial to a broader community.
I am excited about the prospect of joining a research community where I can collaborate with like-minded individuals, learn from experts in the field, and contribute to groundbreaking work that can shape the future. My goal is to continue pushing the boundaries of what’s possible with machine learning, driven by a commitment to excellence and a genuine passion for innovation.
</p>
            
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
                     <h2>BACHELOR IN COMPUTER SCIENCE & ENGINEERING</h2>
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
            <div className='train-sec'>
            <div className='training-content'>
               <div className='training-image-sec'>
                  <img src='./images/luffy.jpeg' className='train-sec-img'/>
               </div>
               <div>
               <div className='training-desc-sec'>
                  <h1 className='train-sec-title'>Big Data Analysis</h1>
                  <p className='train-sec-date'>Date: 10-05-23 - 10-05-24</p>
                  <p className='train-sec-short'>Acquiring essential skills and hands-on experience in re...</p>
                  <button className='train-details-btn'>Detaiils</button>
               </div>
               </div>
            </div>
            <div className='training-content'>
               <div className='training-image-sec'>
                  <img src='./images/luffy.jpeg' className='train-sec-img'/>
               </div>
               <div>
               <div className='training-desc-sec'>
                  <h1 className='train-sec-title'>Big Data Analysis</h1>
                  <p className='train-sec-date'>Date: 10-05-23 - 10-05-24</p>
                  <p className='train-sec-short'>Acquiring essential skills and hands-on experience in re...</p>
                  <button className='train-details-btn'>Detaiils</button>
               </div>
               </div>
            </div>
            <div className='training-content'>
               <div className='training-image-sec'>
                  <img src='./images/luffy.jpeg' className='train-sec-img'/>
               </div>
               <div>
               <div className='training-desc-sec'>
                  <h1 className='train-sec-title'>Big Data Analysis</h1>
                  <p className='train-sec-date'>Date: 10-05-23 - 10-05-24</p>
                  <p className='train-sec-short'>Acquiring essential skills and hands-on experience in re...</p>
                  <button className='train-details-btn'>Detaiils</button>
               </div>
               </div>
            </div>
            </div>
            
         </div>
         <PopUpDetails popState={pop} off={popUp}></PopUpDetails>
      </div>
    );
}

export default Home;