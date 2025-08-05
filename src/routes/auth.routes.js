const express = require('express');
const router = express.Router();
const authControler = require('../controllers/auth.controller');



router.post('/login', authControler.login);

router.post('/signup', authControler.signup);



module.exports = router;
