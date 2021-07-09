const router  = require('express').Router();
const postsController = require('../controller').postsController;

router.get('/', postsController.getPosts);
router.post('/', postsController.createPost);
router.put('/', postsController.updatePost);
module.exports = router;
