function ContactPerson(props) {
    
    const ContactPersonStyle = {
        color: 'white',
        fontSize: '1em',
        marginTop: '10px',
        marginLeft: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    }
    return(
        
       <li style={ContactPersonStyle}>
        <div><b>Fornavn: </b>{props.firstname} </div>
        <div><b>Efternavn: </b>{props.lastname}</div>
        <div><b>E-mail: </b>{props.email}</div>
        <div><b>Telefon: </b>{props.phone}</div>
        <div><b>Firma: </b>{props.firm}</div>
        <div><b>Stilling: </b>{props.position}</div>
        </li>
    )
}

export default ContactPerson