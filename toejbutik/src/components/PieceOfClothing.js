const PieceOfClothingStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
    border: "1px solid black",
    margin: "10px",
    position: "relative",
    height: "130px",
    gap: "10px",
}
const PieceOfClothingInfoStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "5px",
}

/**
 * Renders a piece of clothing with details.
 * @param {string} props.id - The unique identifier for the clothing item.
 * @param {string} props.src - The source URL for the clothing image.
 * @param {string} props.title - The title/name of the clothing item.
 * @param {string} props.price - The price of the clothing item.
 * @param {string} props.size - The size of the clothing item.
 * @param {string} props.color - The color of the clothing item.
 * @param {string} props.model - The model/type of the clothing item.
 * @param {string} props.description - A description of the clothing item.
 */
function PieceOfClothing(props){
    const img = require(`./img/${props.src}`);

    return (
        <div id={props.id} style={PieceOfClothingStyle}>
            <img src={img} alt="" style={{height: "100%"}}/>
            <div style={PieceOfClothingInfoStyle}>
                <h1 style={{margin: "0px"}}>{props.title}</h1>
                <p style={{margin: "0px"}}>{props.price}kr</p>
                <p style={{margin: "0px"}}>{props.size} {props.color} {props.model}</p>
                <p style={{margin: "0px"}}>{props.description}</p>
            </div>
        </div>
    )
}

export default PieceOfClothing;