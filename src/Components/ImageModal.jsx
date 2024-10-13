import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from redux
import { incrementViewCount } from '../Actions/imageActions'; // Import the action to increment views
import './modal.css';

const ImageModal = ({ isOpen, onClose, image }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen && image) {
      // Dispatch the action to increment the view count when the modal opens
      dispatch(incrementViewCount(image._id));
    }
  }, [isOpen, image, dispatch]);

  if (!isOpen || !image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={image.url} alt={image.title} className="modal-image" />
        <div className="modal-details">
          <h3>{image.title}</h3>
          <p>{image.description}</p>
          <p><strong>Views:</strong> {image.views}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
