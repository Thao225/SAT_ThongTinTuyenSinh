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
//---------- FO TO TOP --------------------------------------------------------------------//
    let goTop =document.getElementById("gotoTop")
    goTop.onclick = function() {
        document.documentElement.scrollIntoView({ //dùng để cuộn trang đến một phần tử cụ thể
            behavior: 'smooth'
        });
    }

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
//---------- ẢNH GIỚI THIỆU ---------------------------------------------------------------//
    let listImg = document.querySelector(".listImg")
    let imageGT = document.querySelectorAll(".gallery .image")
    let gallery = document.querySelector(".gallery")
    var current = 0;
    var w = gallery.offsetWidth;
    console.log(w);
    const changeImg = function() {
        if (current == imageGT.length-1) {
            listImg.style.transition = 'transform 0s';
            listImg.style.transform = `translateX(${0}px)`;
            current = 0; 
        }
        else {
            current++;
            listImg.style.transform = `translateX(${-w * current}px)`;
        }
    }
    let clear = setInterval(() => { changeImg()}, 2500);
    let prev = document.querySelector(".btnGT .prev")
    let next = document.querySelector(".btnGT .next")
    console.log(prev, next)
        prev.onclick = function() {
            clearInterval(clear);
            if (current == 0) {
                current = imageGT.length-1; 
                listImg.style.transition = 'transform 0s';
                listImg.style.transform = `translateX(${-w * current}px)`;
            }
            else {
                current--;
                listImg.style.transform = `translateX(${-w * current}px)`;
            }
            clear = setInterval(() => { changeImg()}, 2500); 
        }
        next.onclick = function() {
            clearInterval(clear);
            changeImg();
            clear = setInterval(() => { changeImg()}, 2500);
        }

//---------- NỘI DUNG ---------------------------------------------------------------//
    $(".tabContent > li:not(:first-child)").hide();
    $(".tab > li > a").click(function(event) {
        event.preventDefault();
        $(".tab > li > a").removeClass("active");
        $(".menuXettuyen a").removeClass("activeSub");
        $(this).addClass("active");
        let h = $(this).attr("href");
        $(".tabContent > li").hide();
        $(".menuContent > .tabContent").hide();
        $(h).show();
    });
    $(".menuXettuyen a ").click(function() {
        console.log("hi")
        $(".menuXettuyen a ").removeClass("activeSub");
        $(this).addClass("activeSub");
        let hh = $(this).attr("href");
        $(".menuContent > .tabContent").hide();
        $(hh).show();
    });






}
