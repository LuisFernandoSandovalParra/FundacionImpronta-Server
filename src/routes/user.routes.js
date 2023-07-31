'use strict'

const router = require('express').Router();

const userController = require('../controllers/user.controller');

router.post('/create_user', userController.createUser);
router.get('/search_user/:document_number', userController.getUser);
router.get('/list', userController.getUserList);
router.put('/edit/:document_number', userController.updateUser);
router.delete('/delete/:document_number', userController.deleteUser)

module.exports = router;