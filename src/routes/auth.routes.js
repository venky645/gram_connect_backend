// src/routes/auth.routes.js

const express = require('express');
const router = express.Router();
const authControler = require('../controllers/auth.controller');

// Example route
router.post('/login', authControler.login);

router.post('/signup', authControler.signup);

// Export the router
module.exports = router;
