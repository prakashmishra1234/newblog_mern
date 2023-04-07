import React, { useState } from "react";
import {
  Autocomplete,
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import axios from "axios";
import CustomBackdrop from "../../common/CustomBackdrop";
import { toast } from "react-hot-toast";
import { Routeconstant } from "../../routing/Routeconstant";
import { useNavigate } from "react-router-dom";
import MetaData from "../../common/Metadata";

const category = ["Science"];

const CreatePost = () => {
  const [createPostData, setCreatePostData] = useState({
    text: "",
    title: "",
    category: "",
    images: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onClickUploadPost = () => {
    setLoading(true);
    const body = {
      text: createPostData.text ?? "",
      title: createPostData.title ?? "",
      category: createPostData.category ?? "",
      images: createPostData?.images ?? "",
    };
    axios
      .post("/api/v1/post/new", body)
      .then((res) => {
        toast.success(res.data.message);
        navigate(Routeconstant.HOME);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <MetaData title="Create Post" />
      {loading ? <CustomBackdrop loading={loading} /> : null}
      <Paper elevation={3} sx={{ padding: "1rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              value={createPostData.category}
              fullWidth
              size="small"
              id="combo-box-demo"
              options={category}
              onChange={(e, newValue) => {
                setCreatePostData({
                  ...createPostData,
                  category: newValue,
                });
              }}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <TextField {...params} label="Select category" />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              value={createPostData.title}
              size="small"
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(e) => {
                setCreatePostData({
                  ...createPostData,
                  title: e.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              rows={12}
              size="small"
              id="outlined-basic"
              label="Description"
              height={100}
              multiline
              value={createPostData.text}
              required
              variant="outlined"
              onChange={(e) => {
                setCreatePostData({
                  ...createPostData,
                  text: e.target.value,
                });
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <input
              className="form-control"
              type="file"
              name="avatar"
              accept="image/*"
              onChange={(e) => {
                const reader = new FileReader();
                reader.onload = () => {
                  if (reader.readyState === 2) {
                    setCreatePostData({
                      ...createPostData,
                      images: reader.result,
                    });
                  }
                };
                reader.readAsDataURL(e.target.files[0]);
              }}
            />
            <div style={{ paddingTop: "1rem" }}>
              {createPostData.images !== "" ? (
                <Avatar
                  sx={{
                    height: { xs: "100%", md: "25rem" },
                    width: { xs: "100%", md: "25rem" },

                    borderRadius: "10px",
                  }}
                  alt="post image"
                  src={createPostData.images}
                />
              ) : null}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button variant="outlined" onClick={onClickUploadPost}>
              Upload
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                setCreatePostData({
                  text: "",
                  title: "",
                  category: "",
                  images: "",
                });
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default CreatePost;
