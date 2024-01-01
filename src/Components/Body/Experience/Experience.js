import { ContentBody } from "../ContentBody/ContentBody";
import data from "../../../data/experience.json";
import { ContentScrollViewWrapper, HorizontalScrollView,Card } from "./ExperienceComponents";

export const Experience = () => {
    return (
        <ContentScrollViewWrapper>
            <HorizontalScrollView>
                {data.experiences.map((experience)=>(<Card experience={experience}/>))}
            </HorizontalScrollView>
        </ContentScrollViewWrapper>
    )
}