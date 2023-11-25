import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.cjs';
import webpackHotMiddleware from 'webpack-hot-middleware';

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
// everytime a req comes to root router, use postRouter
app.use ('/', userRouter);

app.get('/', (req, res) => {
  res.send('hello world from express');
});



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
