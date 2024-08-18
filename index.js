window.onload = function () {
// Lấy tất cả các phần tử có class 'menuXettuyen'
var outB = document.querySelectorAll('.menuXettuyen');

// Lặp qua từng phần tử và gán sự kiện 'onclick'
outB.forEach(function(outerBlock) {
    outerBlock.onclick = function() {
        var inB = this.querySelectorAll('.displayHien');
        
        inB.forEach(function(innerBlock) {
            // Kiểm tra nếu phần tử hiện tại có class 'hide'
            if (innerBlock.classList.contains('hide')) {
                innerBlock.classList.remove('hide'); // Hiển thị block trong
            } else {
                innerBlock.classList.add('hide'); // Ẩn block trong nếu đã hiển thị
            }
        });
    };
});
}