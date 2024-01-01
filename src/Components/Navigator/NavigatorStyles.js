import { COLORS } from "../../styles/theme"

const navZoom = '115%';

const navigatorStyles = {
    wrapperDiv: {
        minHeight: '20vh',
        backgroundColor: COLORS.primaryBackground,
    },

    navbarNav: {
        height: '50%',
        paddingTop: '1vh'
    },

    navlinkDiv: {
        marginRight: '3em',
        marginLeft: '3em',
        display: 'inline-block'
    },

    navImg: {
        borderRadius: '50%',
        border: '5px solid white',
        width: 100,
        height: 'auto'
    },

    navP: {
        color: COLORS.white,
        margin: 20,
        fontSize: '1.25em',
        margin: 5,
    }
}

export { navZoom, navigatorStyles }