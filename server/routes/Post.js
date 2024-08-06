const express = require("express");
const route = express.Router();
const { Posts } = require('../models');


route.get("/", async (req, res) => {
  const listOfPost = await Posts.findAll();
  res.json(listOfPost);
});
route.post("/", async (req, res) => {
  const post = req.body;
  await Posts.create(post);
  res.json(post)
});

module.exports = route;
