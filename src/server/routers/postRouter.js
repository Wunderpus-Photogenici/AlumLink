import express from 'express';
import controller from '../controller.js';
const router = express.Router();

//interview router
router.get('/post/:messageType', controller.getPost, (req, res) => {
    res.status(200).json(res.locals.data);
});

router.post('/post', controller.createPost, (req, res) => {
    res.status(201).json('Success!')
});

router.patch('/post', controller.updatePost, (req, res) => {
    res.status(201).json('Updated!')
});

router.delete('/post/:id', controller.deletePost, (req, res) => {
    res.status(202).json('Deleted!')
});

// module.exports = router;
export default router;