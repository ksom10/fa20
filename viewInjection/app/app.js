function initListeners(){
    $("#nav nav a").click(function(e){
        var btnID = this.id;
        MODEL.getView(btnID);
    });
}


function initView(){
    $.get("../views/nav.html", function(nav){
        $("#nav").html(nav);
        initListeners();
    });

    $.get("../views/home/home.html", function(data){
        $("#app").html(data);
    });

    $.get("../views/footer.html", function(data){
        $("#footer").html(data);
    });

    
}



$(document).ready(function(){
    initView();
});