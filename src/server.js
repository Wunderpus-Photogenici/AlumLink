import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.cjs';
import webpackHotMiddleware from 'webpack-hot-middleware';
import interviewRouter from './server/routers/interviewRouter.js'

// This create the API and connection between server and client
const app = express();
const PORT = 3000;

// handle parsing req body
app.use(express.json());

//compiles and configures webpack
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler, {}));


// router method to create new router
const userRouter = express.Router();
// everytime a req comes to root router, use these Routers
app.use ('/', interviewRouter);
// app.use ('/jobs', jobRouter);
// app.use ('/network', networkRouter);


//Not found 404
app.use((req, res) => res.status(404).send('Error: 404, Page Not Found'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listens on port from port variable
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
