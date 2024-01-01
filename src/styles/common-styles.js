import { COLORS } from "./theme"

const styles = {
    websiteWrapperDiv: {
        height: '100vh'
    },

    wrapper: {
        backgroundColor: COLORS.contentBackgroundColor,
        height: "79vh",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },

    content: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '20vw',
        paddingRight: '20vw',
        margin: 0,
        fontFamily: 'Trebuchet MS',
        textAlign: 'justify',
    },

    paragraph: {
        color: COLORS.deepBlue
    }

}

export { styles }