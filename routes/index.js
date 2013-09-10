/**
 * 首页
 * @param req
 * @param res
 */
exports.index = function(req, res){
    res.render("index", { title : '(〃ノ∇ノ) 快递喵' });
};
