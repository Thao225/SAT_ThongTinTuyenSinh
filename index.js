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


//---------- CHẠY HIỆU ỨNG TRÁI PHẢI -----------------------------------------------------------//


//---------- ẨN HIỆN NỘI DUNG ---------------------------------------------------------------//







}