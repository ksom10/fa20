function initListener(){
    $("#nav nav a").click(function (e){
        var btnID = this.id;
        MODEL.getView(btnID);
    });
}

function initView(){
    $.get("../views/nav.html", function(nav){
        $("#nav").html(nav);
        initListener();
    });

    $.get("../views/home/home.html", function(data){
        $("#content").html(data);
    });

}

$(document).ready(function(){
    initView();
});