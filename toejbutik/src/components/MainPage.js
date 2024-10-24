import PieceOfClothing from "./PieceOfClothing";

function Mainpage(){
    const data = [
        {id: 1, src: "1302151-22.w610.h610.fill.webp", title: "Jumper", price: "129.99", size: "S", color: "Black", model: "Jumper", description: "A black jumper with a red stripe on the chest."},
        {id: 2, src: "APOF_Adine_Sienna_Blue_1.webp", title: "Jumper", price: "129.99", size: "S", color: "Black", model: "Jumper", description: "A black jumper with a red stripe on the chest."},
        {id: 3, src: "jc30044_1_cloudzoom.jpg", title: "Jumper", price: "129.99", size: "S", color: "Black", model: "Jumper", description: "A black jumper with a red stripe on the chest."},
        {id: 4, src: "toej-uden-tryk.png", title: "Jumper", price: "129.99", size: "S", color: "Black", model: "Jumper", description: "A black jumper with a red stripe on the chest."},
    ]

    return (
        <div>
            {data.map(item => 
                <PieceOfClothing id={item.id} src={item.src} title={item.title} price={item.price} size={item.size} color={item.color} model={item.model} description={item.description}/>
            )}
        </div>
    )
}

export default Mainpage;