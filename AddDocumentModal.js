import React from 'react';

function AddDocumentModal({ closeModal }) {
  const handleSubmit = event => {
    event.preventDefault();
    // Add your logic to handle form submission (e.g., uploading document)
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Add Document</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="documentName">Name:</label>
          <input type="text" id="documentName" name="documentName" required />
          <label htmlFor="documentFile">File:</label>
          <input type="file" id="documentFile" name="documentFile" accept=".pdf,.doc,.docx" required />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default AddDocumentModal;
