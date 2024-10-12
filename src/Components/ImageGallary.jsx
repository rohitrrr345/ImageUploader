// ImageGallery.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../actions/imageActions';
import ImageModal from './ImageModal';

const ImageGallery = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="gallery">
        {images.map((img) => (
          <div key={img._id} className="image-card" onClick={() => openModal(img)}>
            <img src={img.imageUrl} alt={img.title} />
            <h3>{img.title}</h3>
            <p>{img.description}</p>
            <p>Views: {img.viewCount}</p>
          </div>
        ))}
      </div>

      {/* Modal for image details */}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
    </div>
  );
};

export default ImageGallery;
