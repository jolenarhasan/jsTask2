var header =document.querySelector("div h2");
var para =document.querySelector("div p");
var lFontSize=document.querySelector(".largeFontSize");
var sFontSize=document.querySelector(".smallFontSize");
function largeFontSize(){
 para.classList.add("paraLargeFontSize");
 header.classList.add("headerLargeFontSize");
}
function SmallFontSize(){
    para.classList.add("paraSmallFontSize");
    header.classList.add("headerSmallFontSize");
   }
lFontSize.onclick=largeFontSize;
sFontSize.onclick=SmallFontSize;