import { useState } from 'react';
import '../App.css';
import { createAvatar } from '@dicebear/core';
import { bigEars } from '@dicebear/collection';



// js - destructure - pakker attributter fra et objekt op.
function AddPip({pips, setPips}) {
    const [pip, setPip] = useState(''); // what the user sees in the input type="text"
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const Christian = createAvatar(bigEars, {
        "seed": "Christian",
      });
      const christian = Christian.toDataUri();

      const Aiden = createAvatar(bigEars, {
        "seed": "Aiden",
      });
      const aiden = Aiden.toDataUri();
   
    
    const handleOnPipChange = (event) => {
        console.log(event.target.value);
        setPip(event.target.value);
    }
    
    function handleAddPip() {
        if (pip === '') {
            setError('Cannot add empty todo');
        } else {
          
            // opretter et nyt array og tilføjer det nye todo til array'et. YES!
           
            const newPipArray = [...pips, { id: pips.length + 1, title: pip, name: name, completed: false,  }];
            setPips(newPipArray);
        }
    }

    return (
        <div>
        <form>
        
          <img src={christian} alt="avatar" />
          <img src={aiden} alt="avatar" />
        
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
