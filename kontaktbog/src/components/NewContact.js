import React from 'react';
import Modal from 'react-modal';
import ButtonBorderStyle from './ButtonBorderStyle.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  padding: '10px',
}

const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
  fontSize: '1.5em',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '20px',
  position:'fixed',
  bottom: '50px',
  right: '40px',
  zIndex: '2',
}

const buttonBorderStyle = {
  color: 'white',
  fontSize: '1.5em',
  border: 'none',
  padding: '14px 24px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '20px',
  position: 'fixed',
  bottom: '46px',
  right: '36px',
  backgroundImage: 'conic-gradient(from var(--angle), #ff4545, #00ff99, #006aff, #ff0095, #ff4545)',
  zIndex: '1',
};

const modalButtonStyle ={
  color: 'black',
  backgroundColor: 'white',
  fontSize: '1em',
  border: '1px solid black',
  padding: '14px 24px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '10px',
}



// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function MyModal(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function NewContact(){
    const Firstname = document.getElementById('firstname').value;
    const Lastname = document.getElementById('lastname').value;
    const Email = document.getElementById('email').value;
    const Phone = document.getElementById('phone').value;
    const Firm = document.getElementById('firm').value;
    const Position = document.getElementById('position').value;

    if(!Firstname || !Lastname || !Email || !Phone || !Firm || !Position) {
      alert('Du skal udfylde alle felter');
      return;
      //Når return står til sidst betyder at funktionen stopper med kører. 
    }

    const NewContactList = [...props.data, {firstname: Firstname, lastname: Lastname, email: Email, phone: Phone, firm: Firm, position: Position} ];
    props.setData(NewContactList);

    
  }
  function closeModal() {
    setIsOpen(false);
    NewContact();
  }


  return (
    <div>
      <button  style={buttonStyle} onClick={openModal}>Tilføj Ny Kontakt</button>
      <button className="spin-animation" style={buttonBorderStyle} onClick={openModal}>Tilføj Ny Kontakt</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        
        <h1>Udfyld kontaktformular</h1>
        <form style={formStyle}> 
          <label>
            First name:
            </label>
            <input type="text" name="firstname" id="firstname" />
          
          <label>
            Last name:
            </label>
            <input type="text" name="lastname" id="lastname" />
          
          <label>
            Email:
            </label>
            <input type="email" name="email" id="email" />

            <label>
            Telefon:
            </label>
            <input type="text" name="phone" id="phone" />
          
          <label>
            Firm:
            </label>
            <input type="text" name="firm" id="firm" />
          
          <label>
            Stilling:
            </label>
            <input type="text" name="position" id="position" />
          
        </form>
        <button style={modalButtonStyle} onClick={closeModal}>Tilføj Kontakt</button>
      </Modal>
    </div>
  );
}

export default MyModal
