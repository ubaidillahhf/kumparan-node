import { createArticleController, getAllArticleController } from './article_controller';
import ResponseHelper from '../../helpers/response_helper';
import { BLUE } from '../../helpers/cli_color_helper';

/** Cache */
let cache = {}
let middlewareCache = (req, res, next) => {
  const key = req.url
  if (cache[key]) {
    console.log(BLUE,"## CACHE");

    let dataCache = JSON.parse(cache[key]);
    
    return ResponseHelper(res, 200, 'Success Get List Data Article', dataCache.data, dataCache.meta);
  } else {
    console.log(BLUE,"## QUERY_DB");
      // callback and save to cache from send response
      res.sendResponse = res.send
      res.send = (body) => {
          cache[key] = body
          res.sendResponse(body)
      }
      next()
  }
}

/** RestFull API Versioning */
let path = '/api/v1';

/** RestFull API Route */
const ArticleRoutes = (app) => {
  app.route(`${path}/article`).post(createArticleController);
  app.route(`${path}/article`).get(middlewareCache, getAllArticleController);
};

export { ArticleRoutes };
