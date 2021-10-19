const express = require('express');
const router = new express.Router();
const Post = require('../models/post');

// conver request body to JSON
router.use(express.json());

// Get all posts  GET /api/post
router.get('/api/post', async (req, res) => {
  try {
    const all = await Post.find();
    res.status(200).send(all);
  } catch (error) {
    res.status(401).send();
  }
});

// Create new post  POST /api/post
router.post('/api/post', async (req, res) => {
  const data = req.body;
  console.log(data);
  const post = new Post({
    title: data.title,
    body: data.body,
    imageUrl: data.imageUrl,
  });

  try {
    await post.save();
    res.status(201).send({ created: true });
  } catch (error) {
    res.status(401).json({ error });
  }
});

module.exports = router;
