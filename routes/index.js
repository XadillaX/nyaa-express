/**
 * 首页
 * @param req
 * @param res
 */
var sugar = require("sugar");
var pinyin = require("pinyin");

exports.index = function(req, res){
    var compines = Object.clone(require("xto/lib/namemapper"), true);
    compines = compines.sortBy(function(e) {
        if(e.shortname === "auspost") e.shortname = "Auspost";
        var py = pinyin(e.shortname);

        var string = "";
        for(var i = 0; i < py.length; i++) {
            string += py[i][0];
            for(var j = 0; j < 20 - py[i][0].length; j++) string += " ";
        }
        return string;
    });

    res.render("index", { title : '(〃ノ∇ノ) 快递喵', company : compines });
};
