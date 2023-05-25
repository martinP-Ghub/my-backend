const serviceLogin = require('../services/login-service');

exports.PostLoginInfo = (req,res) => {return serviceLogin.InsertUser(req.body);};