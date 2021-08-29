import React from 'react';
import {AiOutlineDribbble, AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const FootBar = () => {
    return (
        <div className="footer">
            <div >
            <div className="iconsDiv" >
                <p> Designed and developed by Ryan Warner.<br/>
                Built with Gatsby. Hosted on Firebase. Type set in Jost *.
                </p>
                <br/>
                <div className="Ficon">
                <AiOutlineTwitter  className="icons"/>
                <AiFillGithub  className="icons"/>
                <AiOutlineDribbble  className="icons"/>
                </div>
            </div>  
        </div>
        </div>
    )
}

export default FootBar
