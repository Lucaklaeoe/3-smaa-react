import React, { useState } from 'react';

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

    const [contactCount, setContactCount] = useState(0);
    function handleAddcontact() {

      alert("Kontakt tilføjet")
      setContactCount(count => count + 1);

      
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

            <p> Add kontakt</p>
            <button type="button" onClick={handleAddcontact}>Tilføj kontakt</button>
            {/* <button onClick={() => alert("Add kontakt")}> Add kontakt</button> */}
            Kontakter tilføjet: { contactCount.toString() }
      </form>
    )
  }

  export default NewContact