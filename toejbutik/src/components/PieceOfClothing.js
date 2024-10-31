import {useState} from "react";

const PieceOfClothingStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
    position: "relative",
    height: "fit-content",
    gap: "10px",
    color: "white",
    backgroundColor: "#778fbd",
    borderRadius: "10px",
    width: "40vw",
    marginBottom: "20px",
}
const PieceOfClothingInfoStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "10px",
    width: "50%",
    textAlign: "left",
}
const knapStyle = {
    position: "absolute",
    right: "10px",
    bottom: "10px",
    border: "none",
    borderRadius: "10px",
    padding: "5px",
    fontSize: "1.2em",
    cursor: "pointer",
    transition: "0.2s ease-in-out",
}

/**
 * Renders a piece of clothing with details.
 * @param {string} props.id - The unique identifier for the clothing item.
 * @param {string} props.src - The source URL for the clothing image.
 * @param {string} props.title - The title/name of the clothing item.
 * @param {number} props.price - The price of the clothing item.
 * @param {string} props.size - The size of the clothing item.
 * @param {string} props.color - The color of the clothing item.
 * @param {string} props.model - The model/type of the clothing item.
 * @param {string} props.description - A description of the clothing item.
 * @param {boolean} props.isbought - Whether the clothing item is in the cart or not.
 */
function PieceOfClothing(props){

    function movecart(){
        if(props.isbought){
            //if is bought and buttonclicked remove

            //remove from bought
            const newBoughtList = props.bought.filter(item => item.id !== props.id);
            props.setbought(newBoughtList);

            //add to datalist
            const NewToejData = [...props.tobuy, {id: props.id, src: props.src, title: props.title, price: props.price, size: props.size, color: props.color, model: props.model, description: props.description, isbought: false} ];
            props.settobuy(NewToejData);
        }
        else{
            //else add to cart

            //add to cart
            const newBoughtList = [...props.bought, {id: props.id, src: props.src, title: props.title, price: props.price, size: props.size, color: props.color, model: props.model, description: props.description, isbought: true} ];
            props.setbought(newBoughtList);
    
            //remove from datalist
            const NewToejData = props.tobuy.filter(item => item.id !== props.id);
            props.settobuy(NewToejData);
        }
    }

    const img = require(`./img/${props.src}`);

    return (
        <div id={props.id} style={PieceOfClothingStyle}>
            <img src={img} alt="" style={{width: "100px"}}/>
            <div style={PieceOfClothingInfoStyle}>
                <h1 style={{margin: "0px"}}>{props.title}</h1>
                <p style={{margin: "0px"}}>{props.price} kr</p>
                <p style={{margin: "0px"}}>{props.size} {props.color} {props.model}</p>
                <p style={{margin: "0px"}}>{props.description}</p>
            </div>

            {props.isbought ? 
                <button id={props.id + "button"} className="knap" style={knapStyle} onClick={() => movecart()}>Remove from cart</button> :
                <button  id={props.id + "button"} className="knap" style={knapStyle} onClick={() => movecart()}>Add to cart</button>
            }

        </div>
    )
}

export default PieceOfClothing;