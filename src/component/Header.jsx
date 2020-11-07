// react core component

import React from "react";
import logo from "../assets/images/image2.jpg";
import {Link} from "react-router-dom";

//Media Assets Import for 


export default function Header(){
    return(

        <nav>
        <img className="logo" 
        src={logo}
        alt="Logo of the company"/>
        

        <ul className="nav-links" />

        <Link to ="/FAQ" />
        
        
     </nav>

    );
    
}
