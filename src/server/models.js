import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: { type: String },
    content: { type: String, required: true},
    time: { type: String},
    username: { type: String},
    likes:{ type: Number},
    messageType: { type: String}
})

const Post = mongoose.model('posts', PostSchema);
export default Post;

// "title": "Google Interview Process",
// "content": "The google interview process is pretty difficult",
// "time": "Oct 10th, 3:00PM",
// "username": "John_Cena",
// "likes": 0,
// "messageType": "interview"