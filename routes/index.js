require("sugar");
var pinyin = require("han");

var companies = Object.clone(require("xto").companies, true).sortBy(function(e) {
    e.shortname = e.shortname.capitalize();
    var py = pinyin.letter(e.shortname, "-");
    return py;
});

/**
 * index
 * @param {Request} req the request object
 * @param {Response} resp the response object
 */
exports.index = function(req, resp){
    resp.render("index", { title : "(〃ノ∇ノ) 快递喵", company : companies });
};

