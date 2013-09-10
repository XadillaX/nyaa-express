/**
 * API
 * @param req
 * @param res
 */
var xto = require("xto");
exports.query = function(req, res){
    var params = req["params"];
    var company = params["company"];
    var number = params["number"];

    xto.query(number, company, function(status, msg, data){
        var result = {
            "status"        : status,
            "msg"           : msg,
            "data"          : data
        };
        var resultString = JSON.stringify(result);

        res.write(resultString);
        res.end();
    });
};
