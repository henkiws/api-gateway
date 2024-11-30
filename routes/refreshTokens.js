const express = require('express');
const router = express.Router();

const refreshTokensHandler = require('./handler/refresh-tokens')
// const mediaHandler = require('./handler/media')

/* GET users listing. */
router.post('/', refreshTokensHandler.refreshToken)

module.exports = router;
