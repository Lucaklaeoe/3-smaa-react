import ContactPerson from "./ContactPerson"
import {useState} from "react"
import NewContact from "./NewContact"
function MainPage(props) {
    
//Når noget står inde i nogen krølleparentese {} skriver man istedet for at skrive props. Det kaldes også destructering.  

    const [data, setData] = useState([ 
        {id: 1, firstname: 'Emil', lastname: 'Hansen', email: 'Emil@gmail.com', phone: '12345678', firm: 'DSB', position:'CEO'},
        {id: 2, firstname: 'Luca', lastname: 'Klæø', email: 'Luca@gmail.com', phone: '12345678', firm: 'Jyskebank', position:'CEO'},
        {id: 3, firstname: 'Sophia', lastname: 'Kingstone', email: 'Sophia@gmial.dk', phone: '12345678', firm: 'Falk', position:'CEO'},
    ])
     
    const ContactStyle = {
        paddingBottom: '20px',
        backgroundColor: '#181a1c',
        margin: '20px',
        borderRadius: '10px',
        paddingTop: '5px',
    }
    const h1Style = {
        color: 'White',
        fontSize: '1.5em',
        marginTop: '20px',
        marginLeft: '50px',
    }

    //JSX minder rigtig meget om HTML kode, fx. <div></div>
    return(
        <main>
            <div>
                

            {data.map(item =>
            <div style={ContactStyle} >
                <h1 style={h1Style}>Kontakt Person</h1>
                
                <ContactPerson 
                key={item.id} 
                firstname={item.firstname} 
                lastname={item.lastname} 
                email={item.email} 
                phone={item.phone}
                firm={item.firm} 
                position={item.position}/>
            </div>
            )}

            </div>
            <NewContact 
            data={data} 
            setData={setData}
            />
        </main>
        
    )
}

export default MainPage