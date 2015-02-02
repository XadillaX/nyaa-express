var xto = require("xto");

/**
 * query
 * @param {Request} req the request object
 * @param {Response} resp the response object
 */
exports.query = function(req, resp) {
    var params = req["params"];
    var company = params["company"];
    var number = params["number"];

    if(number === undefined) {
        return resp.send(200, {
            "status" : false,
            "msg"    : "请输入运猫号。",
            "data"   : []
        });
    }

    xto.query(number, company, function(err, data) {
        if(err) {
            return resp.send(200, {
                status: 0,
                msg: err.message
            });
        }

        data.stateText = xto.stateToText(data.state);
        resp.send(200, {
            status : 1,
            data   : data
        });
    });
};

/**
 * get company information
 * @param {Request} req the request object
 * @param {Response} resp the response object
 */
exports.companyInfo = function(req, resp) {
    var info = xto.companies;
    resp.send(200, info);
};

