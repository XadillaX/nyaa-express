if(0) var $, company;

function refreshCompanyLabel() {
    $("#all-express-modal .modal-body").find("a").removeClass("label-danger").addClass("label-info");
    $("#all-express-modal .modal-body").find("a[code=" + company + "]").removeClass("label-info").addClass("label-danger");
}

$(function(){
    refreshCompanyLabel(company);

    $("#all-companies").click(function(){
        $("#all-express-modal").modal();
    });

    $("#all-express-modal .modal-body a").click(function(){
        company = $(this).attr("code");
        refreshCompanyLabel(company);
        $("#current-company").html($(this).html() + " ");
        $("#all-express-modal").modal("hide");
    });
});

