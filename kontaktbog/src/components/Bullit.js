function Bullit(props) {
    
    const bullitStyle = {
        color: 'white',
        marginTop: '10px',
        marginLeft: '50px',
    }
    return(
        
       <li style={bullitStyle}>
        {props.message}
        </li>
    )
}

export default Bullit