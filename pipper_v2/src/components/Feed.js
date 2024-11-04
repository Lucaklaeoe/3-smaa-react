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
            <h2>Feed</h2>  
            {pips.map(item => {
                return <PipItem 
                    key={item.id} 
                    title={item.title} 
                    name={item.name}
                    avatar={item.avatar} 
                />
            })}
        </div>
    )
}

export default Feed;