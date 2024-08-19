window.onload = function () {
    let images = document.querySelectorAll(".anhGioiThieu img")
    let popImg = document.getElementById("popImg")
    let close = document.querySelector(".closeButton")
    let pre = document.querySelector(".preButton")
    let next = document.querySelector(".nextButton")
    let gallery = document.querySelector(".gallery")
        for (let img of images)
            img.onclick = function () 
            {
                popImg.src = this.src;
                gallery.classList.add("show");
            }
        close.onclick = function ()
        { 
            gallery.classList.remove("show");
        } 

}