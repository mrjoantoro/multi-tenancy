// src/routes/userRoutes.js

const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/me', authMiddleware, userController.getUserProfile);
router.patch('/me', authMiddleware, userController.updateUserProfile);
router.delete('/me', authMiddleware, userController.deleteUser);

module.exports = router;