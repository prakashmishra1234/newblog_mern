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

const PostDetails = () => {
  const location = useLocation();
  const { data } = location.state;
  const context = useContext(AuthContext);
  const { userData } = context;

  return (
    <Paper
      elevation={3}
      sx={{
        marginBottom: { xs: "1rem", md: "0" },
        minHeight: { xs: "0", md: "38.6rem" },
      }}
    >
      <Box style={{ padding: "4px", display: "flex" }}>
        <Avatar
          style={{ height: "4rem", width: "4rem" }}
          alt="user"
          src={data.postedBy?.avatar?.url ?? userData?.avatar?.url ?? ""}
        />
        <div style={{ paddingLeft: "0.5rem", paddingTop: "0.3rem" }}>
          <Typography sx={{ fontWeight: "700" }}>
            {data?.postedBy?.name ?? userData?.name ?? ""}
          </Typography>
          <Typography>Posted on : {DateFormat(data?.date ?? null)}</Typography>
        </div>
      </Box>
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

          <Typography style={{ wordBreak: "break-word" }}>
            {data?.text ?? "N/A"}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default PostDetails;
