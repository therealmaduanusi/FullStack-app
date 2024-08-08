const express = require("express");
const route = express.Router();
const { Comments } = require("../models")


route.post("/", async (req, res) => {
  const comment = req.body;
  console.log(comment);
  await Comments.create(comment);
  res.json(comment)
  
});

route.get("/:PostId", async (req, res) => {
  const postId = req.params.PostId;
  const comments = await Comments.findAll({ where: { PostId: postId}});
  res.json(comments);
});

module.exports = route;
