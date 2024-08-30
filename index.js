window.onscroll = function() {
//---------- HIỆU ỨNG CHO THANH MENU KHI TRƯỢT TRANG -----------------------------------------------------------//
const stickymenu = document.querySelector(".sticky");
const scrollY = window.scrollY; //số pixel đã được cuộn dọc theo trục Y
console.log(scrollY);
    if (scrollY > 0) {
        stickymenu.style.opacity = 0.85; 
    } 
    else {
        stickymenu.style.opacity = 1; 
    }
}
  
window.onload = function () {

//---------- RESPONSIVE THANHMENU -----------------------------------------------------------//
    let btn = document.querySelector("#menuBtn")
    let thanhMenu = document.querySelector(".thanhmenu")
    btn.onclick = function () {
        thanhMenu.classList.toggle("show");
    }
    let closemenu = document.getElementById("closeMenu")
    closemenu.onclick = function () {
        thanhMenu.classList.remove("show");
    } 
    


}
