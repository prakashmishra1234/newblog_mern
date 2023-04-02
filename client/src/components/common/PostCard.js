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
    <Card
      sx={{
        minHeight: {
          xs: "0",
          md: "34.3rem",
          marginBottom: { xs: "1rem", md: "0" },
        },
      }}
    >
      {data.images.url ? (
        <Carousel animation="slide">
          <CardMedia
            sx={{ height: "300px" }}
            image={data.images.url}
            title="Post Image"
          />
        </Carousel>
      ) : null}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.title ?? "N/A"}
        </Typography>
        {data?.text.length > 280 ? (
          <Typography style={{ wordBreak: "break-word" }}>
            {data?.text.slice(0, 280) + "..." ?? "N/A"}
          </Typography>
        ) : (
          <Typography style={{ wordBreak: "break-word" }}>
            {data?.text ?? "N/A"}
          </Typography>
        )}
      </CardContent>
      {data?.text.length > 280 ? (
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              navigate(Routeconstant.POST_DETAILS, { state: { data: data } });
            }}
          >
            Read More
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
}
