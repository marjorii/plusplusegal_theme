// resize menu bar (and mail address div)
function resizeBar() {
    var bar = document.querySelector('.menu-bar');
    // var mail = document.getElementById('mail-address');
    var currentWidth = document.querySelector('section.right').offsetWidth;
    var finalWidth = currentWidth - 20;
    var portraitTablet = window.matchMedia("(min-width: 768px) and (max-height: 1366px) and (orientation: portrait)").matches;
    var isPortraitTablet = false;
    bar.style.cssText = 'width: ' + finalWidth + 'px';
    // mail.style.cssText = 'width: ' + finalWidth + 'px';
    if (window.location.pathname.includes('/projects/project.html') && portraitTablet) {
        isPortraitTablet = true;
        currentWidth = document.querySelector('#grid-container > div:last-of-type').offsetWidth;
        bar.style.cssText = 'width: ' + currentWidth + 'px';
        // mail.style.cssText = 'width: ' + currentWidth + 'px';
    }
    else {
        isPortraitTablet = false;
    }
    var isTactile = false;
    if ( /Android|webOS|iPhone|iPad|Kindle|Tablet|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isTactile = true;
        bar.style.cssText = 'width: ' + currentWidth + 'px';
        // mail.style.cssText = 'width: ' + currentWidth + 'px';
    }
    else {
        isTactile = false;
    }
}
resizeBar();
window.addEventListener('resize', resizeBar);


// left becomes top menu (portrait phones)
var left = document.querySelector('section.left');
var arrow = document.querySelector('div#buttons a:first-of-type');
arrow.addEventListener('click', function(event) {
    arrow.classList.toggle('rotate');
    left.classList.toggle('flex');
});
console.log(arrow);
