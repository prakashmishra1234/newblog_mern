import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";
import { useLocation, useNavigate } from "react-router-dom";
import { DateFormat } from "../../../services/moment";
import { AuthContext } from "../../../store/store";
import MetaData from "../../common/Metadata";

const PostDetails = () => {
  const location = useLocation();
  const { data } = location.state;
  const context = useContext(AuthContext);
  const { userData } = context;

  return (
    <>
      <MetaData title="Post Details" />
      <div className="card">
        {data.images.url ? (
          <img
            className="card-img-top"
            src={data.images.url}
            alt="Card image cap"
          />
        ) : null}

        <div className="card-body">
          <h4 className="card-title">{data?.title ?? "N/A"}</h4>
          <p className="card-text">{data?.text ?? "N/A"}</p>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
