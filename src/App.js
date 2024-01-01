import { useState } from "react"
import { Header } from "./Components/Header/Header"
import { Navigator } from "./Components/Navigator/Navigator"
import { GlobalStyle } from "./GlobalStyle"
import { Body } from "./Components/Body/Body";
import { styles } from "./styles/common-styles";

export const App = () => {

    const [currScreen, setCurrScreen] = useState('About Me');

    return (
        <div style={styles.websiteWrapperDiv}>
            {/* <Header/> */}
            <Navigator currScreen={currScreen} setCurrScreen={setCurrScreen}/>
            <Body currScreen={currScreen}/>
            <GlobalStyle/>
        </div>
    )
}