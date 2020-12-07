var obj ={"Students":[
    {
        "key": "value",
        "firstName": "Todd",
        "lastName": "Shelton",
        "grades": [
            {
                className: "n315",
                grade: "B",
            },
            {
                className: "n215",
                grade: "D",
            },
        ],
    },
    {
        "key": "value",
        "firstName": "To",
        "lastName": "Shelto",
    },
],

}


function init(){
$(".getData").click(function(e) {
    
//for loop example
    //for(let i = 0; i < obj.Students.length; i++){
      //  console.log("obj " + i + " ", obj.Students[i]);
    //}
    $.each(obj.Students, function(idx, student){
        console.log(student.firstName);
        $(".content").append(student.firstName);
        $.each(student.grades, function(idx, grades){
            console.log(grades.className + " " + grades.grade);
            $(".content").append(" " + grades.className + " " + grades.grade + " ");
            
        })
    })
})

    $(".navicon").click(function(e){
        console.log("clicked");
        $("nav").toggleClass("navLabelView");
        $("links").toggleClass("linksMobileView");
        $("a").toggle();
    })
}

$(document).ready(init());