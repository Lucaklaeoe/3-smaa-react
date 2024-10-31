import {useState} from "react";

function Prices({bought}){

    var total = 0;

    bought.forEach(element => {
        total += Number(element.price);
    });

    return (
        <div>
            <h1>Total: {total}</h1>
        </div>
    )
}

export default Prices;