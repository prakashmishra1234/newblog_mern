import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import { margin } from "@mui/system";
import { baseName } from "../../Config";
import { Grid, IconButton, Paper } from "@mui/material";

export default function PostCard({ data }) {
  return (
    <Card sx={{ margin: "20px" }}>
      <Carousel animation="slide">
        {[1, 2, 3].map((item, index) => {
          return (
            <CardMedia
              key={index}
              sx={{ height: 300 }}
              image={`${baseName}myimage.jpeg`}
              title="green iguana"
            />
          );
        })}
      </Carousel>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.title ?? "N/A"}
        </Typography>
        <Typography>{data?.text.slice(0, 280) + "..." ?? "N/A"}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
}
