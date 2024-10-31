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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function MyModal() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
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
        
        <h1>TILFØJ NY KONTAKTPERSON</h1>
        <form style={formStyle}> 
          <label>
            First name:
            <input type="text" name="firstname" />
          </label>
          <label>
            Last name:
            <input type="text" name="lastname" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Firm:
            <input type="text" name="firm" />
          </label>
          <label>
            Position:
            <input type="text" name="position" />
          </label>
        </form>
        <button onClick={closeModal}>Tilføj Kontakt</button>
      </Modal>
    </div>
  );
}
