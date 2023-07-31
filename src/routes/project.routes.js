'use strict'

const projectController = require('../controllers/project.controller');
const router = require('express').Router();

router.post('/create', projectController.createProject);
router.get('/search_project/:project_id', projectController.getProject);
router.get('/list', projectController.getProjectList);
router.put('/edit/:project_id', projectController.updateProject);
router.delete('/delete/:project_id', projectController.deleteProject);

module.exports = router;