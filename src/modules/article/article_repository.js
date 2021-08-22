import db from '../../database/models/index';
const {  Articles } = db;
import { Op } from 'sequelize';

// Get All Article
const getAllArticle = async ({ query, author }, page, limit) => {
  try {
    let result = await Articles.findAndCountAll({
      where: {
        [Op.or]:[{title: query ? { [Op.like]: `%${query}%` } : { [Op.like]: `%%` }},{body: query ? { [Op.like]: `%${query}%` } : { [Op.like]: `%%` }}],
        author: author ? author : { [Op.like]: `%%` },
      },
      offset: limit * (page - 1),
      limit: limit,
      order: [["id" , "desc"]],
    });
    return result;
  } catch (error) {
    console.error('[EXCEPTION] getAllArticle', error);
    throw new Error(error);
  }
};

// Create New Article
const createArticle = async (data, transaction) => {
  const t = transaction ? transaction : await db.sequelize.transaction();
  try {
    let result = await Articles.create(data, { transaction });
    if (!transaction) t.commit();
    return result;
  } catch (error) {
    if (!transaction) t.rollback();
    console.error('[EXCEPTION] createArticle', error);
    throw new Error(error);
  }
};


export {
  getAllArticle,
  createArticle,
}
