import data from "../../../data/contact-me.json";
import { ContactDetailsDiv, ContactMeContentWrapper, SocialNetworkDetailsDiv } from "./ContactMeComponents";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export const ContactMe = () => {

    const copySuccessMessage = (contentType) => {
        NotificationManager.success('Successfully copied the ' + contentType + '!');
    }

    return (
        <ContactMeContentWrapper>
            <ContactDetailsDiv data={data} copySuccessMessage={{copySuccessMessage: copySuccessMessage}}/>
            <SocialNetworkDetailsDiv data={data}/>
            <NotificationContainer/>
        </ContactMeContentWrapper>
    )
}