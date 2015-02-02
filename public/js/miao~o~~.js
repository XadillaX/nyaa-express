var apiurl = "api/query";
var querying = false;

if(0) var $, company;

function initQuery() {
    querying = true;

    /**
     * 如果被关闭了。
     */
    if($("#miao-wrong-sign").next() === undefined || $("#miao-wrong-sign").next().attr("id") !== "miao-wrong") {
        $("#miao-wrong-sign").after('<div id="miao-wrong" class="alert alert-danger alert-dismissable">' +
            '<button type="button" data-dismiss="alert" aria-hidden="true" class="close">&times;</button>' +
            '<strong>错误信息：</strong><span id="miao-wrong-text"></span></div>');
    }

    $("#miao-wrong").css("display", "none");
    $("#result-panel").slideDown("normal");
    $("#table-wrapper").html("");

    $("#miao-status").html("查询中...");
}

function toQuery() {
    initQuery();

    var companyname = company;
    var number = $("#number").val();

    var url = apiurl + "/" + companyname + "/" + number;
    $.get(url, {}, function(e){
        var json;
        try {
            json = typeof e === "object" ? e : JSON.parse(e);
        } catch(newe) {
            $("#miao-status").html("获取错误");
            $("#miao-wrong-text").html("服务器错误，请稍后再试。");
            $("#miao-wrong").slideDown("normal");
            querying = false;
            return;
        }

        if(!json.status) {
            var status = "";
            if("请输入运猫号。" === json.msg) status = "输入错误";
            else status = "查询错误";

            $("#miao-status").html(status);
            $("#miao-wrong-text").html(json.msg);
            $("#miao-wrong").slideDown("normal");
            querying = false;

            return;
        }

        $("#miao-status").html(json.data.stateText);

        /**
         * 新建一个表格
         */
        var table = "<table class='table table-condensed table-hover table-striped'>";
        table += "<thead><tr>";
        table += "<th width='30%'>时间</th>";
        table += "<th width='70%'>状态</th>";
        table += "</tr></thead>";
        table += "<tbody>";

        for(var i = 0; i < json.data.data.length; i++) {
            table += "<tr" + (i === 0 ? " class='success'" : "") + ">";
            table += "<td>" + json.data.data[i].time + "</td>";
            table += "<td>" + json.data.data[i].context + "</td>";
            table += "</tr>";
        }

        table += "</tbody>";
        table += "</table>";

        $("#table-wrapper").html(table);

        querying = false;
    });
}

$(function(){
    $("#query-button").click(function(){
        if(!querying) toQuery();
    });

    $("#number").keydown(function(e) {
        if(e.keyCode === 13) {
            if(!querying) toQuery();
        }
    });
});

