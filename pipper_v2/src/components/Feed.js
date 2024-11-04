import PipItem from "./PipItem";
import { useState } from 'react';
import AddPip from './AddPip'; 




function Feed() {
    // state: isChristianHappy='getter', setIsChristianHappy='setter'
    const [pips, setPips] = useState([
       
    ]);
    
    return (
        <div> 
            <AddPip pips={pips} setPips={setPips}/>          
            {
                pips.map(item => {
                    return <PipItem 
                        key={item.id} 
                        title={item.title} 
                        name={item.name}
                        completed={item.completed}
                       
                    />
                })
            }
        </div>
    )
}

export default Feed;