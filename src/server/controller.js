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
  console.log('THIS IS OUR REQ BODY', req.body)
  try {
    await Post.create(req.body)
    return next();
  }
  catch(err) {
    return next('Error in createPost' + err)
  }
}

controller.updatePost = async (req, res, next) => {
  try {
    console.log('THIS IS UPDATE POST')
    const { content, id } = req.body;
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

controller.addLike = async (req, res, next) => {
  try {
    console.log('HEELLLLLLOOOOOo')
    console.log(req.body)
    let { id, likes } = req.body
    likes += 1
    console.log(likes)
    res.locals.likes = likes
    await Post.findOneAndUpdate({_id: id}, {likes: likes}, {new: true});
    return next();
  }
  catch (err){
    return next('Error in addLike in controller.js' + err)
  }
}

export default controller;