var express = require('express');
var router = express.Router();

let landing = require('../controllers/landing');
let index = require('../controllers/index')

/* GET home page. */
router.get('/', landing.get_landing);
router.get('/index', index.index);

/* POST email */
router.post('/', landing.submit_lead);


module.exports = router;
