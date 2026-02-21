import { AboutMe } from "./About Me/AboutMe"
import { ContactMe } from "./ContactMe/ContactMe"
import { Experience } from "./Experience/Experience"
import { Projects } from "./Projects/Projects"
import { Skills } from "./Skills/Skills"

export const Body = ({ currScreen }) => {
    return (
        <>
        {
            currScreen=='About Me' ? <AboutMe/> 
                : (currScreen == 'Skills'? <Skills/>
                    : (currScreen == 'Experience'? <Experience/>
                        : (currScreen == 'Projects'? <Projects/>
                            : (currScreen == 'Contact Me'? <ContactMe/>
                                : null
                            )
                        )
                    )
                )

        }
        </>
    )
}