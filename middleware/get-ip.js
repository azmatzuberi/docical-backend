const requestIp = require('request-ip');

module.exports = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req); 
	console.log("IP", clientIp)
	req.ip = clientIp
    next();
};

