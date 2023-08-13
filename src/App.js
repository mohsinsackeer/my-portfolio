import { useState } from "react"
import { Header } from "./Components/Header/Header"
import { Navigator } from "./Components/Navigator/Navigator"
import { GlobalStyle } from "./GlobalStyle"
import { Body } from "./Components/Body/Body";

export const App = () => {

    const [currScreen, setCurrScreen] = useState('About Me');

    return (
        <div>
            <Header/>
            <Navigator setCurrScreen={setCurrScreen}/>
            <Body currScreen={currScreen}/>
            <GlobalStyle/>
        </div>
    )
}