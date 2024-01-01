import { ContentBody } from "../ContentBody/ContentBody";
import data from "../../../data/projects.json"
import { ContentScrollViewWrapper,HorizontalScrollView,Card } from "./ProjectComponents";

export const Projects = () => {
    return (
        // <ContentBody data={data}/>

        <ContentScrollViewWrapper>
            <HorizontalScrollView>
                {data.projects.map((project)=>(<Card project={project}/>))}
            </HorizontalScrollView>
        </ContentScrollViewWrapper>
    )
}