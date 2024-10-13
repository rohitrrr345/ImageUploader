// imageActions.js
import axios from 'axios';

export const uploadImage = (formData) => async (dispatch) => {
  try {
    dispatch({ type: 'uploadImageRequest' });
    console.log('iam here')

    const { data } = await axios.post(`${import.meta.env.VITE_SERVER}/api/images/upload`, formData, {

      headers: {
        'Content-type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    console.log('iam here')

    dispatch({
      type: 'uploadImageSuccess',
      payload: data.message,
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

    const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/api/images/images`, {
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
  // Dispatch request action to set loading state
  dispatch({ type: 'incrementViewCountRequest' });

  try {
    const { data } = await axios.put(
      `${import.meta.env.VITE_SERVER}/api/images/image/${imageId}/view`,
      {}, // Empty body for the PUT request
      { withCredentials: true }
    );

    // Dispatch success action with the full image data
    dispatch({
      type: 'incrementViewCountSuccess',
      payload: data, // full image data returned from the API
    });
  } catch (error) {
    // Dispatch failure action with error message
    dispatch({
      type: 'incrementViewCountFailure',
      payload: error.message,
    });
    console.error('Failed to increment view count:', error);
  }
};
