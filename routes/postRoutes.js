const express = require('express');
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');

//merge params
const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(postController.getAllPosts)
  .post(
    authController.restrictTo('user'),
    postController.setUserIds,
    postController.createPost,
  );

router
  .route('/:id')
  .get(postController.getPost)
  .delete(postController.deletePost);

module.exports = router;
