import React from 'react';
import Modal from 'react-modal';

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
  backgroundColor: '#ff9d88',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '20px',
}

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
      <button style={buttonStyle} onClick={openModal}>Open Modal</button>
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
