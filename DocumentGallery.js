import React from 'react';

function DocumentGallery() {
  // Mock data for demonstration
  const documents = [
    { id: 1, name: 'Document 1', url: 'example.com/document1.pdf' },
    { id: 2, name: 'Document 2', url: 'example.com/document2.pdf' },
    { id: 3, name: 'Document 3', url: 'example.com/document3.pdf' }
  ];

  return (
    <div className="document-gallery">
      <h2>Document Gallery ({documents.length})</h2>
      <div className="document-list">
        {documents.map(document => (
          <div key={document.id} className="document-item">
            <a href={document.url} target="_blank" rel="noopener noreferrer">{document.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentGallery;
