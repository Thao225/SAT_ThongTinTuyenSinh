
window.onload = function () {
//---------- GO TO TOP --------------------------------------------------------------------//
    let goTop =document.getElementById("gotoTop")
    goTop.onclick = function() {
        //cuộn trang đến một phần tử cụ thể mượt hơn
        document.documentElement.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

//---------- RESPONSIVE THANHMENU -----------------------------------------------------------//
    let btn = document.querySelector("#menuBtn")
    let thanhMenu = document.querySelector(".thanhmenu")
    btn.onclick = function () {
        thanhMenu.classList.toggle("show");
        document.documentElement.scrollIntoView({ 
            behavior: 'smooth' 
        });

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
    let popup = document.getElementById("popup")
    let x = document.querySelector(".closeBtn")
    let form = document.querySelector('.formDangKi')
    x.onclick = function() {
        popup.classList.add("hide");
        document.body.style.overflow = '';
    }
    document.getElementById("openFormLink").addEventListener('click', function(event) {
        event.preventDefault(); 
        popup.classList.add("hide");
        form.classList.remove("hide");
        form.classList.add("show");
        document.body.style.overflow = 'hidden';
    });
    document.querySelector(".btnClose").addEventListener('click', function() {
        form.classList.add("hide");
        form.classList.remove("show");
        document.body.style.overflow = '';
    });
    document.querySelector(".btnSubmit").addEventListener('click', function() {
        alert('Đã hoàn tất đăng kí! Kết quả sẽ được thông báo ngày 20/9, chúc bạn may mắn!');
        form.classList.add("hide");
        form.classList.remove("show");
        document.body.style.overflow = '';
    });
    document.getElementById("openForm").addEventListener('click', function(event) {
        event.preventDefault(); 
        form.classList.remove("hide");
        form.classList.add("show");
        document.body.style.overflow = 'hidden';
    });

    document.querySelectorAll('.faqQuestion').forEach((item) => {
        item.addEventListener('click', () => {
            var faqItem = item.parentElement;
            faqItem.classList.toggle('ac');
        });
    });

    $(".tabContent > li:not(:first-child)").hide();
    $(".tab > li:first-child > a").addClass("active");
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
        $(".menuXettuyen a ").removeClass("activeSub");
        $(this).addClass("activeSub");
        let hh = $(this).attr("href");
        $(".menuContent > .tabContent").hide();
        $(hh).show();
    });
    $(".mucLuc a").click(function() {
        let tabCon = $(this).attr("href");
        $(".tab > li > a").removeClass("active");
        $(".tab > li > a[href='" + tabCon + "']").addClass("active");
        $(".tabContent > li").hide();
        $(tabCon).show();
        $('html').animate({
            scrollTop: $(tabCon).offset().top - 320
        }, 500);
    });
}
