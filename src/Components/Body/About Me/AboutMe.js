import data from '../../../data/about-me.json';
import { AboutMeContent, AboutMeHeader, ContentWrapper } from './AboutMeComponents';
import './AboutMe.css'
import { useRef } from 'react';


export const AboutMe = () => {

    const aboutMeContentRef = useRef(null);

    return (
        <ContentWrapper>
            <AboutMeHeader data={data} aboutMeContentRef={aboutMeContentRef}/>
            <AboutMeContent data={data} aboutMeContentRef={aboutMeContentRef}/>
        </ContentWrapper>
    )


    // return (
    //     <ContentBody data={data}/>
    // )
}