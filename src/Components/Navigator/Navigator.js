import { useState } from "react";
import './NavigatorStyles.css'
import { navZoom, navigatorStyles } from "./NavigatorStyles";

export const Navigator = ({currScreen, setCurrScreen}) => {

    const handleClick = (event, a) => {
        // event.preventDefault();
        console.log(a);
        setCurrScreen(a);
    }

    // [currScreen, setCurrScreen] = useState('About Me');

    return (
        <div style={navigatorStyles.wrapperDiv}>
            <nav style={navigatorStyles.navbarNav}>
                <div onClick={(event)=>handleClick(event,'About Me')}
                     style={{...navigatorStyles.navlinkDiv, zoom: (currScreen=='About Me'?navZoom:'100%')}}>
                    <img src={require("../../assets/hacker.png")} style={navigatorStyles.navImg}/>
                    <p style={navigatorStyles.navP}>About Me</p>
                </div>

                {/* <div onClick={(event)=>handleClick(event,'Skills')}
                     style={{...navigatorStyles.navlinkDiv, zoom: (currScreen=='Skills'?navZoom:'100%')}}>
                    <img src={require("../../assets/skills.png")} style={navigatorStyles.navImg}/>
                    <p style={navigatorStyles.navP}>Skills</p>
                </div> */}

                <div onClick={(event)=>handleClick(event,'Experience')}
                     style={{...navigatorStyles.navlinkDiv, zoom: (currScreen=='Experience'?navZoom:'100%')}}>
                    <img src={require("../../assets/experience.png")} style={navigatorStyles.navImg}/>
                    <p style={navigatorStyles.navP}>Experience</p>
                </div>

                <div onClick={(event)=>handleClick(event,'Projects')}
                     style={{...navigatorStyles.navlinkDiv, zoom: (currScreen=='Projects'?navZoom:'100%')}}>
                    <img src={require("../../assets/hardSkills.png")} style={navigatorStyles.navImg}/>
                    <p style={navigatorStyles.navP}>Projects</p>
                </div>

                <div onClick={(event)=>handleClick(event,'Contact Me')}
                     style={{...navigatorStyles.navlinkDiv, zoom: (currScreen=='Contact Me'?navZoom:'100%')}}>
                    <img src={require("../../assets/man.png")} style={navigatorStyles.navImg}/>
                    <p style={navigatorStyles.navP}>Contact me</p>
                </div>
            </nav>
        </div>
    )
}