import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./imageUpload.css";
import toast from "react-hot-toast";
import {uploadImage} from '../../Actions/imageActions'
const ImageUpload = () => {
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');
const [title, settitle] = useState("");
const [description, setdescription] = useState("");

  const { loading, error, message } = useSelector((state) => state.images);
  const dispatch = useDispatch();

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
    myForm.append("title",title)
    myForm.append("description",description)

    myForm.append("file",image)


    await dispatch(uploadImage(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

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
