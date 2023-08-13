import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: #72a9ba;
    p{
        color: var(--darkBlue);
        margin: 20px;
        font-size: 1.25em;
    }
`;

export const NavBar = styled.nav`
    height: 50%;
    padding-top: 10px;
`;

export const NavLink = styled.div`
    margin: 0em 3em 0px 3em;
    display: inline-block;

    :hover{
        cursor: pointer;
    }

    img{
        border-radius: 50%;
        border: 5px solid black;
        width: 100px;
        height: auto;
    }

    p{
        margin: 5px;
    }
`;