import PieceOfClothing from "./PieceOfClothing";
import { useState } from "react";
import Prices from "./Prices";

const MainpageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100vw",
    gap: "50px",
    padding: "20px",
}

function Mainpage(){
    const [tobuy, settobuy] = useState([
        {id: 1, src: "1302151-22.w610.h610.fill.webp", title: "Frakke", price: 392.75, size: "L", color: "Mørke grøn", model: "Dame", description: "En grøn frage til alt slags vejr.", isbought: false},
        {id: 2, src: "APOF_Adine_Sienna_Blue_1.png", title: "Skjote", price: 100.50, size: "S", color: "Blå", model: "Herre", description: "Tergnet skjote.", isbought: false},
        {id: 3, src: "jc30044_1_cloudzoom.png", title: "Jumper", price: 150.99, size: "M", color: "Hvid", model: "Dame", description: "En hvid jumper.", isbought: false},
        {id: 4, src: "toej-uden-tryk.png", title: "T-Shirt", price: 175, size: "S", color: "Blå", model: "Herre", description: "En blå t-shirt.", isbought: false},
    ]);

    const [bought, setbought] = useState([]);

    return (
        <div style={MainpageStyle}>
            <Prices bought={bought}/>
            <div style={{display: "flex", gap: "50px"}}>
                <div>
                    <h1 style={{width: "50vw"}}>Buy {tobuy.length > 0 ? "(" + tobuy.length + ")" : " "} </h1>
                    {tobuy.map(item => 
                        <PieceOfClothing tobuy={tobuy} settobuy={settobuy} bought={bought} setbought={setbought} id={item.id} src={item.src} title={item.title} price={item.price} size={item.size} color={item.color} model={item.model} description={item.description} isbought={item.isbought}/>
                    )}
                </div>
                <div>
                    <h1 style={{width: "50vw"}}>In cart {bought.length > 0 ? "(" + bought.length + ")" : " "}</h1>
                    {bought.map(item =>
                        <PieceOfClothing tobuy={tobuy} settobuy={settobuy} bought={bought} setbought={setbought} id={item.id} src={item.src} title={item.title} price={item.price} size={item.size} color={item.color} model={item.model} description={item.description} isbought={item.isbought}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Mainpage;