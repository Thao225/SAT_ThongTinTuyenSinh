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
                popImg.src = `img/anh${currentIndex}.png`;
                updateButton();
            }    
        }
    //Next Button
        next.onclick = function ()
        {
            if (currentIndex < 5)
                {
                    currentIndex++;
                    popImg.src = `img/anh${currentIndex}.png`;
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

//---------- RUN WITH TIMER ---------------------------------------------------------------// 
    // let listSv = document.querySelector(".listSpace")
    // let w = listSv.offsetWidth; 
    // console.log(w); //810
    // let contents = document.querySelectorAll(".item")
    // let l = (contents.length/2);  // 3
    // console.log(l);
    // let current = 0;
    // setInterval( () =>
    // {
    //         let w = listSv.offsetWidth; 
    //         current++;
    //         listSv.style.transform = `translateX(${w *-1 *current})`;
    // }, 4000)
    let listSv = document.querySelector(".listSpace");
    let contents = document.querySelectorAll(".item");
    let totalItems = contents.length / 2;  // Mỗi lần hiển thị 2 item, nên chia đôi
    let current = 0;

    // setInterval(() => {
    //     let w = listSv.offsetWidth; // Chiều rộng của listSpace
    //     current++;
        
    //     // Nếu current vượt quá số lượng items cần hiển thị, reset lại
    //     if (current >= totalItems) {
    //         current = 0;
    //     }

    //     // Dịch chuyển listSpace bằng cách sử dụng translateX
    //     listSv.style.transform = `translateX(${-w * current}px)`;
    //     listSv.style.transition = 'transform 0.5s ease-in-out'; // Thêm hiệu ứng chuyển động
    // }, 4000);

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