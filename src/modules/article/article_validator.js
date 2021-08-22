import { body } from 'express-validator';

const validate = (method) => {
  switch (method) {
    case 'create': {
      return [
        body('author').not().isEmpty().withMessage('Author Cannot Be Empty'),
        body('title').not().isEmpty().withMessage('Title Cannot Be Empty'),
        body('body').not().isEmpty().withMessage('Body Cannot Be Empty'),
      ];
    }
    default:
      return [];
  }
};

export default validate;
