// ImageModal.js
import React from 'react';

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={image.imageUrl} alt={image.title} />
        <h3>{image.title}</h3>
        <p>{image.description}</p>
        <p>Views: {image.viewCount}</p>
      </div>
    </div>
  );
};

export default ImageModal;
