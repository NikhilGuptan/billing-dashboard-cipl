import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa";
import { SiSunrise } from "react-icons/si";
import { RxAvatar } from "react-icons/rx";

function NavBar(){

    return(
        <div style={{border:"1px solid black",backgroundColor:"white",display:"flex",alignItems:"center",justifyContent:"space-between",width:"1020px"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <GiHamburgerMenu/>
                <p>Consumption Intelligence</p>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <FaRegBell/>
            <SiSunrise/>
            <p>Nishant Garg</p>
            <RxAvatar/>
            </div>
        </div>
    )
    
}

export default NavBar;