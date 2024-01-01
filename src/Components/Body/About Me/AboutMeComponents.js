import { COLORS } from "../../../styles/theme";
import { aboutMeStyles } from "./AboutMeStyles";

const ContentWrapper = ({children}) => (
    <div style={aboutMeStyles.contentWrapperDiv}>
        {children}
    </div>
)

const AboutMeHeader = ({data,aboutMeContentRef}) => {

    const handleScroll = (ref) => {
        ref.scrollIntoView({
            behavior: 'smooth'
        })
    }

    var text = "I am " + data.name + "!";
    text = text.toUpperCase();

    return (
        <div style={aboutMeStyles.headerDiv}>
            <h1 style={aboutMeStyles.headerH1}>{text}</h1>
            <a onClick={()=>{handleScroll(aboutMeContentRef.current)}}>
                <span style={{color: COLORS.white, cursor: 'pointer', fontSize: 22}}>Click Here ↓</span>
            </a>
            <div style={{height: 1000}}></div>
        </div>
    )
}

const AboutMeContent = ({data,aboutMeContentRef}) => (
    <div
        ref={aboutMeContentRef}
        style={{
        // marginTop: 300,
        marginTop: '100vh',
        paddingTop: 20,
        paddingLeft: '20vw',
        paddingRight: '20vw',
        height: '80vh'
    }}>

        {
            data.lines.map((line)=>(
                <p style={{
                    fontSize: 28,
                    fontWeight: 'lighter'
                }}>{line}<br/><br/></p>
            ))
        }
        
    </div>
)

export { ContentWrapper,AboutMeHeader,AboutMeContent }