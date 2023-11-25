import Post from './models.js'

const controller = {}

controller.getPost = async (req, res, next) => {
  try {
    const data = await Post.find({content:'Entry1'});
    res.locals.data = data;
    console.log('This is our getPosts data:',data);

  }
  catch(err) {
    return next('Error in createPost' + err)
  }
};


controller.createPost = async (req, res, next) => {
  const { content } = req.body;
  try {
    await Post.create(req.body)
    res.locals.message = 'sucess'
    return next();
  }
  catch(err) {
    return next('Error in createPost' + err)
  }
}

export default controller;