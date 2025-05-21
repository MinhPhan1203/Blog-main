var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var clientHeight = header.clientHeight;
mobileMenu.onclick = function() {
    var isCloser = header.clientHeight === clientHeight;
    if (isCloser) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}