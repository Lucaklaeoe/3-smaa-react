import { useState } from 'react';
import '../App.css';
import { createAvatar } from '@dicebear/core';
import { bigEars } from '@dicebear/collection';



// js - destructure - pakker attributter fra et objekt op.
function AddPip({pips, setPips}) {
    const [pip, setPip] = useState(''); // what the user sees in the input type="text"
    const [name, setName] = useState('');
    const [error, setError] = useState(null);

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
    
    const handleOnPipChange = (event) => {
        console.log(event.target.value);
        setPip(event.target.value);
    }
    
    function handleAddPip() {
        if (pip === '') {
            setError('Cannot add empty todo');
        } else {
          
            // opretter et nyt array og tilføjer det nye todo til array'et. YES!

            const avatar = document.querySelector(".active").src;

            const newPipArray = [...pips, { id: pips.length + 1, title: pip, name: name, avatar: avatar}];
            setPips(newPipArray);
        }
    }

                
    const avarar = document.querySelectorAll('#avatars img');
    function handleRemovePip(avatar) {

        avarar.forEach(element => {
            element.classList.remove('active');
        });

        avatar.classList.add('active');
    }

    return (
        <div>
        <form>
            <div style={{display: 'flex', justifyContent: 'space-between'}} className='avatars' id='avatars'>
                <img src={christian} alt="avatar" onClick={(event) => handleRemovePip(event.target)}/>
                <img src={aiden} alt="avatar" onClick={(event) => handleRemovePip(event.target)}/>
                <img src={rayn} alt="avatar" onClick={(event) => handleRemovePip(event.target)}/>
                <img src={wyatt} alt="avatar" onClick={(event) => handleRemovePip(event.target)}/>
                <img src={robert} alt="avatar" onClick={(event) => handleRemovePip(event.target)}/>
                <img src={oliver} alt="avatar" onClick={(event) => handleRemovePip(event.target)}/>
            </div>
        
            <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(event) => setName(event.target.value)} 
            />
                <textarea    
                    type="text" 
                    placeholder="Message" 
                    value={pip} 
                    onChange={handleOnPipChange} 
                />
                
                {/* Conditional rendering: Vis kun p-tag hvis error ikke er null */}
                { error !== null && <p style={{color: 'red'}}>{error}</p> }

                <button type="button" onClick={handleAddPip} >Send</button>
            </form>

        </div>
    )
} 

export default AddPip;
