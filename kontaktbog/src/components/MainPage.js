import ContactPerson from "./ContactPerson"
function MainPage() {
    
    const StyleFirst = {
        paddingBottom: '20px',
        backgroundColor: '#ff9d88',
        marginBottom: '20px',
    }

    return(
        <main>
            <div style={StyleFirst}>
                <ContactPerson/>
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