/**
 * 首页
 * @param req
 * @param res
 */
exports.index = function(req, res){
    var compines = require("xto/lib/namemapper");

    res.render("index", { title : '(〃ノ∇ノ) 快递喵', company : compines });
};
