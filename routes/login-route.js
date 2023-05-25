const  express = require("express");
const router = express.Router();
const controllerLogin = require('../controllers/login-controller');

router.post("/", controllerLogin.PostLoginInfo);

module.exports = router;