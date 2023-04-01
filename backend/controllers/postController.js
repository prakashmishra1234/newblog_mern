const Post = require("../models/postModels");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");
const User = require("../models/userModel");
const ObjectId = require("mongoose").Types.ObjectId;

//Create Post
exports.createPosts = catchAsyncError(async (req, res, next) => {
  let images = [];
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }
  const imagesLinks = [];
  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "posts",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.author = req.user;

  const post = await Post.create(req.body);
  res.status(201).json({
    success: true,
    post,
  });
});

//Get All Posts
exports.getAllPosts = catchAsyncError(async (req, res, next) => {
  const resultPerPage = 5;
  const postCount = await Post.countDocuments();
  const ApiFeature = new ApiFeatures(Post.find(), req.query)
    .search()
    .pagination(resultPerPage);
  const posts = await ApiFeature.query;
  const result = [];
  for (let i = 0; i < posts.length; i++) {
    const user = await User.findById(posts[i].author.toString());
    const post = { ...posts[i]._doc };
    post.postedBy = user;
    result.push(post);
  }
  res.status(201).json({
    success: true,
    postCount,
    posts: result,
  });
});

//Update post
exports.updatepost = catchAsyncError(async (req, res, next) => {
  let post = await Post.findById(req.params.id);
  if (!post) return next(new ErrorHandler("Post not found", 404));
  post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "post updated",
    post,
  });
});

//Delete Post
exports.deletePost = catchAsyncError(async (req, res, next) => {
  let post = await Post.findById(req.params.id);
  if (!post) return next(new ErrorHandler("Post not found", 404));
  await post.remove();
  res.status(200).json({
    success: true,
    message: "Post Deleted Successfully",
  });
});

//Get post details
exports.postDetails = catchAsyncError(async (req, res, next) => {
  let post = await Post.findById(req.params.id);
  if (!post) return next(new ErrorHandler("Post not found", 404));
  await post.remove();
  res.status(200).json({
    success: true,
    post,
  });
});

// Get post by user
exports.postByUser = catchAsyncError(async (req, res, next) => {
  const result = await User.aggregate([
    {
      $match: {
        _id: ObjectId(req.user.id),
      },
    },
    {
      $lookup: {
        from: "posts",
        localField: "_id",
        foreignField: "author",
        as: "posts",
      },
    },
  ]);

  const posts = [...result[0].posts];
  const postCount = posts.length;
  res.status(201).json({
    success: true,
    postCount,
    posts,
  });
});
