
import LikeCounter from './LikeCounter';
function PipItem({ key, title, name, deadline }) {
    

    const timestamp = new Date(); //new Date giver dato og tid lige nu.

    const PipItemStyle = {
        color: 'white',
        padding: '1.5em',
        border: '1px solid white',
        margin: '1.5em',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
     }

    const PipBeskedStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
    return (
        <div id={key} style={PipItemStyle}>
            { timestamp > deadline }
            <div style={PipBeskedStyle}>
            <p>{title}</p>
            <p>{name}</p>
             </div>
            <LikeCounter />
        </div>
    )
}
export default PipItem;