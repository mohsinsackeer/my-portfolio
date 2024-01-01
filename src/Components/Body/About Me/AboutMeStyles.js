import { COLORS } from "../../../styles/theme";

const aboutMeStyles = {
    contentWrapperDiv: {
        overflowY: 'scroll',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '80vh',
        backgroundColor: COLORS.primaryBackground,
    },

    headerDiv: {
        height: '20vh',
        marginTop: 20
        // backgroundColor: COLORS.lightGrey,
    },

    headerH1: {
        fontSize: 90,
        fontFamily: "Verdana, san-serif",
        color: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
    }
}

export { aboutMeStyles }