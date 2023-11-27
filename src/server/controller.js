import Post from './models.js'

const controller = {}

controller.getPost = async (req, res, next) => {
  try {
    const { messageType } = req.params
    const data = await Post.find({messageType: messageType});
    res.locals.data = data;
    return next();
  }
  catch(err) {
    return next('Error in createPost' + err)
  }
};


controller.createPost = async (req, res, next) => {
  const { content } = req.body;
  try {
    await Post.create(req.body)
    return next();
  }
  catch(err) {
    return next('Error in createPost' + err)
  }
}
// update only updates content
controller.updatePost = async (req, res, next) => {
  try {
    const { content, id} = req.body;
    const data = await Post.findOneAndUpdate({_id: id}, {content: content}, {new: true});
    return next();
  }
  catch (err){
    return next('Error in updatePost' + err)
  }
}

controller.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Post.deleteOne({_id: id})
    return next();
  }
  catch(err) {
    return next('Error in deletePost' + err) 
  }
}

export default controller;