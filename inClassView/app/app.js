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

    initListeners();    
}
function initListeners(){
    $("#nav nav a").click(function(e){
        var btnID = this.id;
        MODEL.getView(btnID);
    });

    $.get(`views/${id}/${id}.html`, (page)=>{
        $("#app").html(page);

        if(id == "recipes") {
            let ingredNumber = 4;
            $("#app #addIngred").click((e) =>{
                console.log("add ingred");
            });

            $("#app #addInstruction").click((e) =>{
                console.log("add ingred");
            })
        }
    })
}


$(document).ready(function(){
    initView();
});