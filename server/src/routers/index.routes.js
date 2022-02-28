const { Router } = require('express');
const { createUser, listUsers } = require('../controllers/index.controller');

const router = Router();

router.route('/').post(createUser);
router.route('/list').get(listUsers);

module.exports = router;
