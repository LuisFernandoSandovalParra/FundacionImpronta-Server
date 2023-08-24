'use strict'

const router = require('express').Router();
const { createModule, getModule, getModulesList, updateModule, deleteModule } = require('../controllers/module.controller')

router.post('/create', createModule);
router.get('/search/:module_id', getModule);
router.get('/list', getModulesList);
router.put('/update/:module_id', updateModule);
router.delete('/delete/:module_id', deleteModule);

module.exports = router;