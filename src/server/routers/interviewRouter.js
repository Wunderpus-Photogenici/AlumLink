import express from 'express';
import controller from '../controller.js';
const router = express.Router();

//interview router
router.get('/interview', (req, res) => {
    const messageTemplate = {
        title: 'This is the post title',
        content: 'This is our content for our inteview message',
        time: '3:00',
        username: 'NiceUsername69',
        likes: 420,
        messageType: 'interview'
    } 
    res.json(messageTemplate);
})

// module.exports = router;
export default router;