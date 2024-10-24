function NewContact() {

    const Style = {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '50px',
        display: 'flex',
        flexDirection: 'column',
        width: '350px',
    }
    const ButtonStyle = {
        width:'100px',
        marginTop: '20px',
    }
    return (
      <form style={Style}>
            <label>Fornavn:</label>
            <input type="text" maxLength="20"/>
            <label> Efternavn:</label>
            <input type="text" maxLength="20"/>
            <label> E-mail:</label>
            <input type="text" maxLength="20"/>
            <label> Tlf.:</label>
            <input type="text" maxLength="20"/>
            <label> Firma:</label>
            <input type="text" maxLength="20"/>
            <label> Position:</label>
            <input type="text" maxLength="20"/>

        <button type="submit" style={ButtonStyle}>Send</button>
      </form>
    )
  }

  export default NewContact