import React, { useEffect, useState } from 'react';

const ProjectCard = () =>{

    const images = [
        "luffy.jpeg","naruto.png"
    ]
    
    const [idx,setIdx] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
           setIdx((idx)=>{
             if(idx === (images.length-1)){
                return 0
             }else{
                return idx+1
             }
           });
        },5000)
        return ()=>clearInterval(interval)
    },[])

    return(
        <div className='project-card'>
        <div className='project-card-image-con'>
            <img className='project-card-img' src={"./images/"+images[idx]}/>
            <div className='slide-circle-container'><div className='slide-circle'></div><div className='slide-circle'></div></div>
            <h3 className='project-domain'>Project Domain Name</h3>
        </div>
        <div className='project-card-info'>
             <h1 className='project-title'>Title</h1>
             <p className='project-description'>Description</p>
             <div className='project-btn-container'>
                <button className='p-c-btn'>Live Link</button>
                <button className='p-c-btn'>Source Code</button>
             </div>
        </div>
    </div>
    );
}

export default ProjectCard;