
import LikeCounter from './LikeCounter';
import { createAvatar } from '@dicebear/core';
import { bigEars } from '@dicebear/collection';

function PipItem({ key, title, name, deadline, avatar }) {
    
    //import personer
    const Aiden = createAvatar(bigEars, {
        "seed": "Aiden",
    });
    const Christian = createAvatar(bigEars, {
        "seed": "Christian",
    });
    const Ryan = createAvatar(bigEars, {
        "seed": "Ryan",
    });
    const Wyatt = createAvatar(bigEars, {
        "seed": "Wyatt",
    });
    const Robert = createAvatar(bigEars, {
        "seed": "Robert",
    });
    const Oliver = createAvatar(bigEars, {
        "seed": "Oliver",
    });

    //declear personer
    const christian = Christian.toDataUri();
    const aiden = Aiden.toDataUri();
    const rayn = Ryan.toDataUri();
    const wyatt = Wyatt.toDataUri();
    const robert = Robert.toDataUri();
    const oliver = Oliver.toDataUri();

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

    const PipAvatarStyle = {
        width: '75px',
        height: '75px',
        borderRadius: '50%',
    }
    const TitleStyle ={
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        alignItems: 'center',
    }

    return (
        <div id={key} style={PipItemStyle}>
            <div style={PipBeskedStyle}>

            <p style={TitleStyle}>
                <img src={avatar} style={PipAvatarStyle} alt="Avatar" /> 
                {title} 
            </p>

            <p>{name}</p>
             </div>
            <LikeCounter />
        </div>
    )
}
export default PipItem;