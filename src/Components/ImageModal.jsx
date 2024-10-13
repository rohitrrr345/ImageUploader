import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { fetchImages, incrementViewCount } from '../Actions/imageActions'; 
import './modal.css';

const ImageModal = ({ isOpen, onClose, image }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen && image) {
      dispatch(incrementViewCount(image._id));
    }
  }, [isOpen, image, dispatch]);
useEffect(() => {
  
  dispatch(fetchImages());

 
}, [onClose])

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
