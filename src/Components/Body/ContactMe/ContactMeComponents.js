import { contactMeStyles } from "./ContactMeStyles";

const ContactMeContentWrapper = ({children}) => {
    return (
        <div style={contactMeStyles.contactMeWrapper}>
            {children}
        </div>
    )
}

const ContactDetailsDiv = ({data,copySuccessMessage}) => {
    return (
        <div style={contactMeStyles.contactDetailsDiv}>

            <p style={contactMeStyles.headerP}>CONTACT DETAILS</p>
            <PhoneNumberCard data={data} copySuccessMessage={copySuccessMessage}/>
            <EmailAddressCard data={data}copySuccessMessage={copySuccessMessage}/>

        </div>
    )
}

const SocialNetworkDetailsDiv = ({data}) => {

    return (
        <div style={contactMeStyles.socialNetworkDetailsDiv}>
            <p style={contactMeStyles.headerP}>SOCIAL NETWORK</p>
            <LinkedInCard data={data}/>
            <GithubCard data={data}/>
        </div>
    )
}

const PhoneNumberCard = ({data,copySuccessMessage}) => {

    return (
        <div className="copyContactDiv" 
             style={contactMeStyles.contactDetailsCardDiv}
             onClick={()=>copyTextToClipBoard(data.contactDetails.phoneNumber.value, 'phone number', copySuccessMessage.copySuccessMessage)}>

            <img src={require("../../../assets/phone-icon.png")} style={{height:40,width:'auto'}}/>
            <p style={contactMeStyles.labelP}>Copy Phone Number</p>

        </div>
    )
}

const EmailAddressCard = ({data,copySuccessMessage}) => {
    return(
        <div className="copyContactDiv" 
             style={contactMeStyles.contactDetailsCardDiv} 
             onClick={()=>copyTextToClipBoard(data.contactDetails.emailAddress.value, 'email address', copySuccessMessage.copySuccessMessage)}>
                
                <img src={require("../../../assets/email-icon.png")}
                     style={{height:'auto',width:55}}/>
                <p style={contactMeStyles.labelP}>Copy Email Address</p>
        </div>
    )
}

const copyTextToClipBoard = (text,contentType,copySuccessMessage) => {
    navigator.clipboard.writeText(text);
    copySuccessMessage(contentType);
}

const LinkedInCard = ({data}) => {
    return (
        <div style={contactMeStyles.socialNetworkCardDiv}>
            <a href={data.socialMediaContacts.linkedIn.websiteUrl} target="_blank" rel="noreferrer noopener">
                <img src={require("../../../assets/linkedin-icon.png")} 
                     style={{height: 40, width:'auto',zoom:'110%'}}/>
            </a>
            <p style={contactMeStyles.labelP}>LinkedIn</p>
    
        </div>
    )
}

const GithubCard = ({data}) => {
    return (
        <div style={contactMeStyles.socialNetworkCardDiv}>
            <a href={data.socialMediaContacts.github.websiteUrl} target="_blank" rel="noreferrer noopener">
                <img src={require("../../../assets/github-icon.png")} style={{height: 40, width:'auto'}}/>
            </a>
            <p style={contactMeStyles.labelP}>GitHub</p>
        </div>
    )
}


export { ContactMeContentWrapper, ContactDetailsDiv, SocialNetworkDetailsDiv }