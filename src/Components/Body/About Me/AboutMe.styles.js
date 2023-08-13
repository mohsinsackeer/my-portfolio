import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #C6E5BB;
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
    p{  
        margin-top: 0;
        padding: 0%;
        color: var(--deepBlue);
    }
`;

export const Introduction = styled.div`
    justify-content: center;
    align-items: center;
    /* display: flex; */
    padding-left: 20vw;
    padding-right: 20vw;
    margin: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: justify;

    p{
        margin: 0;
        color: black;
        font-size: 16px;
    }
`;