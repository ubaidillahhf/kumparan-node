import { ArticleRoutes } from '../modules/article/article_routes';

const MainRoutes = (app) => {
  // Testing Routes
  app.route('/hello').get((req, res) => {
    res.send({
      message: 'Hello World!',
    });
  });

  // Article  Routes
  ArticleRoutes(app)
};

export default MainRoutes;
