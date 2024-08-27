window.onload = function () {

    let mB = document.querySelectorAll(".menuNoiDung li")
    let nd = document.querySelectorAll(".noiDung")

  
    // function lapLai(){
    //     mB.forEach(li => {
    //       li.style.color = 'black';
    //     })
    //     nd[0].innerHTML=nd[count].innerHTML
    //     mB[count].style.color='#Da18DD'
    //     count++
    //     if (count === mB.length) {
    //           count=0
    //     }
    //   }
      
    //   let count = 0;
    //   let timerId = setInterval(lapLai, 3000);
      
      for (let i = 0; i < mB.length; i++){
        mB[i].onclick=function() {
            mB.forEach(li => {
                li.style.color = 'black';
            })
            nd.forEach(div => {
                div.style.display = 'none';
            })
            mB[i].style.color='#Da18DD';
            
            nd[i].style.display = 'block';
            nd[i].style.position = 'relative';
            
        }
      }

}
