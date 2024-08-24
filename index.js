window.onload = function () {

//---------- ẢNH GIỚI THIỆU --------------------------------------------------------//
    let images = document.querySelectorAll(".anhGioiThieu img")
    let popImg = document.getElementById("popImg")
    let close = document.getElementById("closeButton")
    let pre = document.getElementById("preButton")
    let next = document.getElementById("nextButton")
    let gallery = document.querySelector(".gallery")
    let currentIndex = 1;
    function updateButton() {
        pre.classList.toggle('hide', currentIndex <= 1);
        next.classList.toggle('hide', currentIndex >= 5);
    }
    //Show anh
        for (let img of images)
            img.onclick = function () 
            {
                popImg.src = this.src;
                gallery.classList.add("show");
                currentIndex = this.getAttribute("index");
                updateButton();
            }
    //Close Button
        close.onclick = function ()
        { 
            gallery.classList.remove("show");
        }
    //Previous Button
        pre.onclick = function () 
        {
            if (currentIndex > 1)
            {
                currentIndex--;
                popImg.src = `img/anh${currentIndex}.jpg`;
                updateButton();
            }    
        }
    //Next Button
        next.onclick = function ()
        {
            if (currentIndex < 5)
                {
                    currentIndex++;
                    popImg.src = `img/anh${currentIndex}.jpg`;
                    updateButton();
                }    
        }
        updateButton();

//---------- GO TO TOP --------------------------------------------------------------//
    let gotoTop = document.getElementById("gotoTop")
    gotoTop.onclick = function()
    {
        document.documentElement.scrollTop = 0;
    }

//---------- ẨN HIỆN NỘI DUNG ---------------------------------------------------------------//
    let displayND = document.querySelectorAll(".menuXettuyen")
    let ND = document.querySelectorAll(".hiddenAn")
    displayND.forEach((NDs, index) => {
        NDs.onclick = function() {
            ND[index].classList.toggle("hiddenAn");
        };
    });
}
window.onscroll = function() {

//---------- CHẠY HIỆU ỨNG TRÁI -----------------------------------------------------------//
    let elements = document.querySelectorAll(".fly");
    elements.forEach((els, index) => {
        let position = els.getBoundingClientRect(); //Trả về vị trí theo viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
            els.classList.add("fromLeft");
        }
    });
}