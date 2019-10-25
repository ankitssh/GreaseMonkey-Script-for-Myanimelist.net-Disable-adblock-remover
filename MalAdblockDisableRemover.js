// ==UserScript==
// @name        MAL AD BLOCK
// @namespace   Myanimelist
// @version     1
// @grant       none
// ==/UserScript==
for(i=0;i<9;i++)
document.getElementsByClassName("mal-ad-unit")[i].setAttribute("style","display:none");
