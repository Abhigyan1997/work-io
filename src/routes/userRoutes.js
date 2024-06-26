const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const userValidator = require('../validators/userValidator');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', 
   // authMiddleware, If Required
    userController.getUsers
);
router.get('/:userId', 
    //authMiddleware, 
    userController.getUserById
);
router.post('/', 
    userValidator.validateUser(),
     userController.createUser
    );
router.put('/:userId', 
    //authMiddleware, userValidator.validateUser(),
     userController.updateUser
    );
router.patch('/:userId',
     //authMiddleware, 
     userValidator.validateUser(),
      userController.updateUser
    );
router.delete('/:userId', 
   // authMiddleware, 
    userController.deleteUser
);

module.exports = router;
