import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./imageUpload.css";
const ImageUpload = () => {
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');
const [title, settitle] = useState("");
const [description, setdescription] = useState("");

  const { loading, error, message } = useSelector((state) => state.like);
  const dispatch = useDispatch();
  const alert = useAlert();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const myForm =new FormData();
    myForm.append("caption",caption)
    myForm.append("file",image)


    await dispatch(createNewPost(myForm));
    dispatch(loadUser());
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (message) {
      alert.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message, alert]);

  return (
    <div className="newPost">
      <form className="newPostForm" onSubmit={submitHandler}>
        <Typography variant="h3">New Post</Typography>

        {imagePrev && <img src={imagePrev} alt="post" />}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
         <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <Button disabled={loading} type="submit">
          Post
        </Button>
      </form>
    </div>
  );
};

export default ImageUpload;
