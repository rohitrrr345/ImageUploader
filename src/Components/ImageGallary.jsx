import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageModal from './ImageModal';
import { fetchImages } from '../Actions/imageActions';
import ImgMediaCard from './Card/Card';
import "./gallary.css";

const ImageGallery = ({username}) => {
  const dispatch = useDispatch();
  const imagesData = useSelector((state) => state.images);
  const [selectedImage, setSelectedImage] = useState(null); // to hold selected image data
  const [isModalOpen, setModalOpen] = useState(false); // to control modal visibility

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const openModal = (image) => {
    setSelectedImage(image); // pass the clicked image data to the state
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className='map'>
      <h1 style={{
        textAlign:'center',
        color:'white'
      }}> welcome Back {username}</h1>
      <div className="gallery">
        {imagesData.images?.images && Array.isArray(imagesData.images?.images) && imagesData.images.images.length > 0 ? (
          imagesData.images.images.map((img) => (
            <ImgMediaCard 
              key={img._id} 
              image={img.url} 
              title={img.title} 
              description={img.description} 
              views={img.views} 
              openModal={() => openModal(img)} // open modal with clicked image data
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>

      {/* Modal for image details */}
      <ImageModal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
    </div>
  );
};

export default ImageGallery;
