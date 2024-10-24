import Bullit from './Bullit';

function ContactPerson() {

    const data =[
        {id: 1, message: 'Kontakt Person 1'},
        {id: 2, message: 'Kontakt Person 2'},
        {id: 3, message: 'Kontakt Person 3'},
        {id: 4, message: 'Kontakt Person 4'},
        {id: 5, message: 'Kontakt Person 5'},
        {id: 6, message: 'Kontakt Person 6'},
    ]
    const h1Style = {
        color: 'White',
        fontSize: '1.5em',
        marginTop: '20px',
        marginLeft: '50px',
    }
    return (

        <div>
            <h1 style={h1Style}>Kontakt Person</h1>
            {data.map(item =>
                <Bullit message={item.message} id={item.id}/>
            )}
        </div>
    );
}

export default ContactPerson