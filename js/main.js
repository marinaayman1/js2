var x=prompt("what is the number");
if(x<20){
    alert("cheap");
}else if(x==20){
    alert("cool");

}else if ("x>20"){
    alert("expensive");
}else{
    alert("not a number");
}




function convertDollar(){
var dollar = document.getElementById("dollar").value;
var result = document.getElementById("result");
result.innerHTML = dollar*50;


if(isNaN(dollar)){
    result.innerHTML ="Enter Number Not Text";
}else if(dollar<0){
    result.innerHTML ="Enter Postive Number";
}else if(dollar==0){
    result.innerHTML ="Enter Number Rather Than 0";
}else{
    result.innerHTML =dollar*50 + "Egyption Pound";
}
return false
}