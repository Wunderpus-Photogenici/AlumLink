import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: { type: String},
    time: { type: String},
    username: { type: String},
    likes:{ type: String},
    messageType: { type: String}
})

const Post = mongoose.model('posts', PostSchema);
export default Post;