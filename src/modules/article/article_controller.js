
import { validationResult } from 'express-validator';
import ResponseHelper from '../../helpers/response_helper';
import {
    getAllArticle,
    createArticle,
  } from './Article_repository';

const createArticleController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return ResponseHelper(res, 422, 'Validation Error', errors.array());
    }
  
    try {
      const newArticle = await createArticle({
        ...req.body
      });
  
      return ResponseHelper(res, 201, 'Success Create New Article', newArticle);
    } catch (error) {
      console.error(error);
      return ResponseHelper(res, 500, 'Failed Create New Article', error.message);
    }
};

const getAllArticleController = async (req, res) => {
  try {
    const query = req.query.query || '';
    const author = req.query.author || "";
    let page = parseInt(req.query.page || '1');
    let limit = parseInt(req.query.limit || '10');

    let requirement = {};

    if (query) requirement.query = query;
    if (author) requirement.author = author;

    let result = await getAllArticle(requirement, page, limit);

    const meta = {
      limit: limit,
      page: page,
      totalPage: Math.ceil(result.count / limit),
      totalData: result.count,
    };

    return ResponseHelper(res, 200, 'Success Get List Data Article', result.rows, meta);
  } catch (error) {
    console.error(error);
    return ResponseHelper(res, 500, 'Failed Get List Data Article', error.message);
  }
};

export { createArticleController, getAllArticleController };
