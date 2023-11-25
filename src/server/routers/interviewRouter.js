import express from 'express';
import controller from '../controller.js';
const router = express.Router();

//interview router
router.get('/interview', controller.getPost, (req, res) => {
    res.status(200).json(res.locals.data);
})

router.post('/interview', controller.createPost, (req, res) => {
    res.status(201).json(res.locals.message)
})

// module.exports = router;
export default router;