import React from 'react';
import { FaShapes,FaLaptopCode,FaChalkboardTeacher,FaGraduationCap,FaUser, FaEnvelope, FaDownload, FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import "../utility/profileCard.css";

const ProfileCard = () => {
    return <div className='profile-card'>
    <div className='profile-card-header'>
      <h2 className='profile-card-h'>Md Tariqul Islam</h2> <button className='profile-card-cv-btn'>CV <FaDownload/></button>
    </div>
    <img alt='Profile Image' src='./images/luffy.jpeg' className='profile-card-imgsrc'/>
    <div className='profile-card-desc'>
    
       <div className='profile-card-data'>
        
        <p className='profile-card-p'>Researcher</p>
        <p className='profile-card-p'>Dhaka, Bangladesh</p>
    
       </div>
       <div className='social-links'>
        <div className='icon-container'>
          <a href="https://www.instagram.com">
            <FaInstagram size={20} />
          </a>
        </div>
        <div className='icon-container'>
          <a href="https://www.facebook.com">
            <FaFacebook size={20} />
          </a>
        </div>
        <div className='icon-container'>
          <a href="https://www.linkedin.com/in">
             <FaLinkedin size={20} />
          </a>
        </div>
        <div className='icon-container'>
          <a href="https://github.com">
             <FaGithub size={20} />
          </a>
        </div>
       </div>
    </div>
    <button className='mail-btn'>Send Mail</button>
 </div>
}

export default ProfileCard;