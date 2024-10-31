import ContactPerson from "./ContactPerson"
function MainPage(props) {
    
    const data =[
        {id: 1, firstname: 'Emil', lastname: 'Berg', email: 'Emil@emil', firm: 'DSB', position:'CEO'},
        {id: 2, firstname: 'Luca', lastname: 'Toft', email: 'Luca@gmail.com', firm: 'Jyskebank', position:'CEO'},
        {id: 3, firstname: 'Sophia', lastname: 'Bjørk', email: 'Sophia@gmial.dk', firm: 'Falk', position:'CEO'},
    ]
     
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
                firm={item.firm} 
                position={item.position}/>
            </div>
            )}

            </div>
        </main>
        
    )
}

export default MainPage