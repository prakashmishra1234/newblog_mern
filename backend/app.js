const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const fileUpload = require("express-fileupload");

//Handle cors
var corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route Imports
const posts = require("./routes/postRoute");
const newUser = require("./routes/userRoute");

app.use("/api/v1", posts);
app.use("/api/v1", newUser);
app.set("trust proxy", 1);

// static file
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

//Middleware for error
app.use(errorMiddleware);

module.exports = app;
