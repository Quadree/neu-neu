var studentnames=[];
function enter(){
    var array2=[];
    for (var j=1;j<=4;j++){
        var newvar=document.getElementById("name_of_the_student_"+j).value;
        console.log(newvar);
        studentnames.push(newvar);
    }
    var lengthofarray=studentnames.length;
    for (var k=0;k<lengthofarray;k++){
        array2.push("<h4>NAME - "+ studentnames[k] + "</h4>");
        console.log(array2)
        
    }
    document.getElementById("display_name_with_commas").innerHTML=array2;
    var withoutcommas=array2.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=withoutcommas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    studentnames.sort();
    var blanksorting=[];
    var lengthofsortng=studentnames.length;
    for (var q=0;q<lengthofsortng;q++){
        blanksorting.push("<h4>NAME - "+ studentnames[q] + "</h4>");
        console.log(blanksorting);
    }
    var withoutcomas=blanksorting.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=withoutcomas;
}
function new_update() { document.getElementById("display_name_without_commas").innerHTML = "<h1>" + studentnames +"</h1>"; }
