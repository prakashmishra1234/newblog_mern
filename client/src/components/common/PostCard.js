import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";
import { Routeconstant } from "../routing/Routeconstant";

export default function PostCard({ data }) {
  const navigate = useNavigate();
  return (
    <div
      className="card"
      style={{ minHeight: "33.5rem", marginBottom: "1rem" }}
    >
      {data.images.url ? (
        <img
          className="card-img-top"
          src={data.images.url}
          alt="Card image cap"
          style={{ maxHeight: "19rem" }}
        />
      ) : null}

      <div className="card-body" style={{ position: "absolute", bottom: "0" }}>
        <h4 className="card-title">{data?.title ?? "N/A"}</h4>
        {data?.text.length > 280 ? (
          <>
            <p className="card-text">
              {data?.text.slice(0, 280) + "..." ?? "N/A"}
            </p>
            <a
              className="btn btn-primary"
              style={{ textDecoration: "none" }}
              onClick={() => {
                navigate(Routeconstant.POST_DETAILS, { state: { data: data } });
              }}
            >
              Read More
            </a>
          </>
        ) : (
          <p className="card-text">{data?.text ?? "N/A"}</p>
        )}
      </div>
    </div>
  );
}
