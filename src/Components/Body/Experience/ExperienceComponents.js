import { Paper } from '@material-ui/core';
import { COLORS } from '../../../styles/theme';

const ContentScrollViewWrapper = ({children}) => (
    <div style={{height:'79vh',backgroundColor:COLORS.primaryBackground}}>
        {children}
    </div>
)

const HorizontalScrollView = ({children}) => {
    return (
        <div style={{height:'fit-content',width:'100vw',
                    // overflow:'auto',
                    display:'flex'}}>
            {children}
        </div>
    )
}

const Card = ({experience}) => {

    return (
        <div style={{maxHeight:'70vh',width:'30vw',marginTop:'5vh',marginLeft:'10vw',marginRight:'10vw',backgroundColor:'#4f7eab',borderRadius:20}}>
            <Paper style={{height:'100%',width:'30vw',backgroundColor:'#4f7eab',borderRadius:20,padding:20,overflow:'auto'}}>
                <div>
                    <p style={{color:COLORS.white,fontSize:40,fontWeight:'lighter',fontFamily:'sans-serif'}}>{experience.title}</p>
                    <p style={{color:COLORS.white,fontSize:20,fontWeight:'normal'}}>{experience.company} <br/><span style={{fontSize:15,fontWeight:'lighter'}}>({experience.tenure})</span></p>
                    <p>
                        <span style={{fontSize:20,fontWeight:'bold'}}>SKILLS: </span>
                        {experience.skillsAcquired.map((skill,index)=>(<span style={{fontSize:20,fontWeight:'lighter'}}>{(index!=0?(<span>, </span>):null)}{skill}</span>))}
                    </p>
                </div>
                <div style={{padding: 10}}>
                    <p style={{color:COLORS.white,fontSize:20,fontWeight:'lighter'}}>{experience.description}</p>
                </div>
            </Paper>
        </div>
    )
}

export { ContentScrollViewWrapper,HorizontalScrollView,Card }