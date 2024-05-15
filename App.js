import React, { useState } from 'react';
import DocumentGallery from './DocumentGallery';
import AddDocumentModal from './AddDocumentModal';
import './App.css'; // You can add your custom styles in App.css

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    
    <div className="app">
      <h1>Document Manager</h1>
      <DocumentGallery />
      <button className="add-document-btn" onClick={openModal}>+</button>
      {showModal && <AddDocumentModal closeModal={closeModal} />}
    </div>
  );
}

export default App;
