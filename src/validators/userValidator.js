const { body } = require('express-validator');

const validateUser = () => {
    return [
        body('email').isEmail().withMessage('Invalid email format'),
        body('name').notEmpty().withMessage('Name is required'),
        body('age').isInt({ min: 0 }).withMessage('Age must be a positive integer'),
        body('city').notEmpty().withMessage('City is required'),
        body('zipCode').isPostalCode('any').withMessage('Invalid zip code format')
    ];
};

module.exports = {
    validateUser
};
