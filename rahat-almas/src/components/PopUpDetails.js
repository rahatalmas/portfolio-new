import React from "react";
import './Home.css';
import './PopUpDetails.css';

const PopUpDetails = ({popState,off}) =>{
    return(
       <div className={popState?"DetailsdisplayOn":"DetailsdisplayOff"}>
          <div className="popUpContent">
            <div className="popUpHead">
                <h1 className='h1-pw1'>Education</h1><h1 className='h1-w2'></h1>
                <h1 className="h1-px" onClick={off}>X</h1>
            </div>
            <div className="popUpMain">
                <div className="popUpImg">
                   <img src="./images/luffy.jpeg" className="popUpContentImg" />
                </div>
                <div className="popUpContentDetails">
                <p>a</p>
                  <p>b</p>
                  <p>c</p>
                  <p>d</p>
                  <p>e</p>                  <p>a</p>
                  <p>b</p>
                  <p>c</p>
                  <p>d</p>
                  <p>e</p>                  <p>a</p>

                </div>
            </div>
          </div>
       </div>
    );
}

export default PopUpDetails;