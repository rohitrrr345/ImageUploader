// imageActions.js
import axios from 'axios';

export const uploadImage = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'uploadImageRequest' });

    const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/api/images`, formData, {
      withCredentials: true,
    });

    dispatch({
      type: 'uploadImageSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'uploadImageFailure',
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const fetchImages = () => async (dispatch) => {
  try {
    dispatch({ type: 'fetchImagesRequest' });

    const { data } = await axios.get(`${process.env.REACT_APP_SERVER}/api/images`, {
      withCredentials: true,
    });

    dispatch({
      type: 'fetchImagesSuccess',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'fetchImagesFailure',
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const incrementViewCount = (imageId) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${process.env.REACT_APP_SERVER}/api/images/${imageId}/views`, {}, {
      withCredentials: true,
    });

    dispatch({
      type: 'incrementViewCountSuccess',
      payload: { imageId, viewCount: data.viewCount },
    });
  } catch (error) {
    console.error('Failed to increment view count:', error);
  }
};
