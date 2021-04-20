var circle=document.getElementById('circle');
var bu=document.getElementById('bu');
var bd=document.getElementById('bd');
var rotateValue=circle.style.transform
var rotateSum;

bu.onclick=function(){
    rotateSum=rotateValue+"rotate(-90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
}

bd.onclick=function(){
    rotateSum=rotateValue+"rotate(90deg)";
    circle.style.transform=rotateSum;
    rotateValue=rotateSum;
}