// import logo from './logo.svg';
import "./App.css";
import Modal from "react-modal";
import { useState } from "react";

function App() {
  const [modalIsOpen, SetModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => SetModalOpen(true)}>Modal</button>
      <Modal
        isOpen={modalIsOpen}
        style={{
          content: { height: "150px", width: "200px", top: "10%", left: "10%" }
        }}
        onRequestClose={() => SetModalOpen(false)}
        shouldCloseOnOverlayClick={true}
      >
        <h2>Test</h2>
        <p>Modal window</p>
        <button onClick={() => SetModalOpen(false)}>Close</button>
      </Modal>
    </>
  );
}

export default App;
