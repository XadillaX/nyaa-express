var apiurl = "api/query";
var querying = false;

function toQuery() {
    querying = true;

    var companyname = company;
    var number = $("#number").val();

    var url = apiurl + "/" + companyname + "/" + number;
    $.get(url, {}, function(e){
        querying = false;
        alert(e);
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
