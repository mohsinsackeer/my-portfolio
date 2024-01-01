import { COLORS } from "../../../styles/theme"

const contactMeStyles = {
    contactMeWrapper: {
        height:'79vh',
        backgroundColor:COLORS.primaryBackground,
        overflow: 'auto',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contactDetailsDiv: {
        display:'flex',
        justifyContent: 'space-between',
        width: '70vw',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        marginLeft: '15vw',
        marginTop: 100,
        borderWidth: 1,
        borderColor: COLORS.white,
        borderStyle: 'dashed'
    },
    socialNetworkDetailsDiv: {
        display:'flex',
        justifyContent: 'space-between',
        width: '70vw',
        paddingLeft: '5vw',
        paddingRight: '5vw',
        marginLeft: '15vw',
        marginTop: 100,
        borderWidth: 1,
        borderColor: COLORS.white,
        borderStyle: 'dashed'

    },

    contactDetailsCardDiv: {margin:10,cursor:'pointer'},

    socialNetworkCardDiv: {margin: 20},

    headerP: {margin:0,fontSize:38,fontWeight:'lighter',marginTop:30,width:400},

    labelP: {
        fontSize: 16,
        fontWeight: 'lighter'
    }
}

export { contactMeStyles }