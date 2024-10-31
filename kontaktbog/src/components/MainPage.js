import ContactPerson from "./ContactPerson"
import NewContact from "./NewContact"
function MainPage() {
    
    const StyleFirst = {
        paddingBottom: '20px',
        backgroundColor: '#ff9d88',
        margin: '20px',
        borderRadius: '10px',
        paddingTop: '5px',
    }

    //JSX minder rigtig meget om HTML kode, fx. <div></div>
    return(
        <main>
            <div style={StyleFirst}>
                <ContactPerson NewContact={NewContact}/>
            </div>
            <div style={StyleFirst}>
                <ContactPerson/>
            </div>
            <div style={StyleFirst}>
                <ContactPerson/>
            </div>

        </main>
        
    )
}

export default MainPage