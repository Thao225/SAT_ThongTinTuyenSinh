window.onload = function () {
    document.querySelector('#more').addEventListener('click', function(event) {
        event.preventDefault();
        var moreDiv = document.querySelector('.more');
        if (moreDiv.style.display === 'none') {
            moreDiv.style.display = 'block';
        } else {
            moreDiv.style.display = 'none';
        }
    });
}