import { useState } from "react";
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import '../App.css';


function LikeCounter() {
        // get     //set/ændre
    const [likes, setLikes] = useState(0);
    const [dislikes, setdislikes] = useState(0);
    
    function handleLikes(add) {
        setLikes(likes + add);
    }
    function handledislikes(add) {
        setdislikes(dislikes + add);
    }
    // JSX
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
     
            <button style={{color: 'white', margin: '0', fontSize: '1em', backgroundColor: 'transparent', border: 'none'}}  onClick={() => handleLikes(1)}><ThumbsUp className="thumbs" /></button>
            <p style={{color: 'white', margin: '0', fontSize: '1em'}}> {likes}</p>
            <button style={{color: 'white', margin: '0', fontSize: '1em', backgroundColor: 'transparent', border: 'none'}} onClick={() => handledislikes(1)}><ThumbsDown className="thumbs" /></button>
            <p style={{color: 'white', margin: '0', fontSize: '1em'}}> {dislikes}</p>
        </div>
    )
}

export default LikeCounter;