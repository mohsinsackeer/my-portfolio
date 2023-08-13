import { Introduction, Wrapper } from "./AboutMe.styles"
import data from '../../../data/about-me.json';

export const AboutMe = () => {

    const print = (data) => {
        const tempArray = [];
        data['paragraph'].forEach(element => {
            tempArray.push(<p>{element}<br/><br/></p>);
        });
        return tempArray;
    }

    return (
        <Wrapper>
            <Introduction>
                {data['paragraph'].length<0?null:print(data)}
            </Introduction>
        </Wrapper>
    )
}