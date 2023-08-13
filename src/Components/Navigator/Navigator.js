import { useState } from "react";
import { NavBar, NavLink, Wrapper } from "./Navigator.styles";

export const Navigator = ({setCurrScreen}) => {

    const handleClick = (event, a) => {
        // event.preventDefault();
        console.log(a);
        setCurrScreen(a);
    }

    // [currScreen, setCurrScreen] = useState('About Me');

    return (
        <Wrapper>
            <NavBar>
                <NavLink onClick={(event)=>handleClick(event,'About Me')}>
                    <img src={require("../../assets/hacker.png")}/>
                    <p>About Me</p>
                </NavLink>

                <NavLink onClick={(event)=>handleClick(event,'Skills')}>
                    <img src={require("../../assets/skills.png")}/>
                    <p>Skills</p>
                </NavLink>

                <NavLink onClick={(event)=>handleClick(event,'Experience')}>
                    <img src={require("../../assets/experience.png")}/>
                    <p>Experience</p>
                </NavLink>

                <NavLink onClick={(event)=>handleClick(event,'Projects')}>
                    <img src={require("../../assets/hardSkills.png")}/>
                    <p>Projects</p>
                </NavLink>

                <NavLink onClick={(event)=>handleClick(event,'Contact Me')}>
                    <img src={require("../../assets/man.png")}/>
                    <p>Contact me</p>
                </NavLink>
            </NavBar>
        </Wrapper>
    )
}