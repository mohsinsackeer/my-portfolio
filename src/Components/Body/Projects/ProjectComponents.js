// https://codesandbox.io/p/sandbox/horizontal-scroll-cards-example-2zzjj?file=%2Fsrc%2FApp.js
import {Paper} from '@material-ui/core'
import { COLORS } from '../../../styles/theme'

const ContentScrollViewWrapper = ({children}) => (
    <div style={{height:'79vh',backgroundColor:COLORS.primaryBackground}}>
        {children}
    </div>
)

const HorizontalScrollView = ({children}) => {
    return (
        <div style={{height:'100%',width: '100vw',height:'fit-content',overflow:'auto',display:'flex'}}>
            {children}
        </div>
    )
}

const Card = ({project}) => {
    
    return(
        <div style={{maxHeight:'75vh',width:'30vw',marginTop:'5vh',marginLeft:20,marginRight:20,backgroundColor:'#4f7eab',borderRadius:20}}>
            <Paper style={{height:'100%',width:'30vw',backgroundColor:'#4f7eab',borderRadius:20,overflow:'auto',paddingBottom:10}}>

                <div style={{}}>
                    <p style={{color:COLORS.white,fontSize:40,fontWeight:'lighter',fontFamily:'sans-serif'}}>{project.title}</p>
                </div>

                <div style={{margin: 20}}>
                    <p style={{color:COLORS.white}}>
                        <span style={{fontSize:20,fontWeight:'bold'}}>KEY TERMS: </span>
                        {project.keyTerms.map((term,index)=>(<span style={{fontSize:20,fontWeight:'lighter'}}>{(index!=0?(<span>, </span>):null)}{term}</span>))}
                    </p>
                </div>
                
                <div style={{padding: 10}}>
                    <p style={{color:COLORS.white,fontSize:20,fontWeight:'lighter'}}>
                        {project.description}
                    </p>
                </div>

                {project.links.map((link)=>(<div style={{margin:10}}><a href={link.link} style={{textDecoration:'none',color:COLORS.darkGrey,fontSize:20}}>{link.name.toUpperCase()}</a></div>))}

            </Paper>
        </div>
    )
}

export { ContentScrollViewWrapper, HorizontalScrollView, Card }