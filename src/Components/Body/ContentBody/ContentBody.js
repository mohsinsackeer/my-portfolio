import { styles } from '../../../styles/common-styles';

export const ContentBody = ({data}) => {

    const print = (data) => {
        const tempArray = [];
        data['lines'].forEach(element => {
            tempArray.push(<p style={styles.paragraph}>{element}<br/><br/></p>);
        });
        return tempArray;
    }

    const printLink = (data) => {
        const tempArray = [];
        data['links'].forEach(element => {
            tempArray.push(<p style={styles.paragraph}><a href={element}>{element}<br/><br/></a></p>)
        });
        return tempArray;
    }

    console.log(data);
    return (
        <div style={styles.wrapper}>
            <div style={styles.content}>
                { data['lines'].length<=0?null:print(data) }
                { 'links' in data?printLink(data):null }
            </div>
        </div>
    )
}