function initListeners(){
    $("#nav nav a, button").click(function(e){
        var btnID = this.id;
        MODEL.getView(btnID);
    });
    $("#footer footer a, button").click(function(e){
        var btnID = this.id;
        MODEL.getView(btnID);
    });
    $(".navicon").click(function(e){
        $('#nav').toggleClass("navMobileView");
        $("#nav nav a").toggleClass("navMobileView")
    });
}

function btnListener(){
    $("#view").click(function(e){
        $.get("views/view.html", function(data){
            $("#app").html(data);
        })
    })
}


function initView(){
    $.get("views/nav.html", function(nav){
        $("#nav").html(nav);
        initListeners();
    });

    $.get("views/home.html", function(data){
        $("#app").html(data);
        btnListeners();
    });

    $.get("views/footer.html", function(data){
        $("#footer").html(data);
        initListeners();
    });
}





$(document).ready(function () {
    initView();
});

