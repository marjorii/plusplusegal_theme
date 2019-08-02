var text = document.querySelector('.text');

// allow click on filters
document.querySelector('#filters li:first-of-type input').addEventListener('click', function(e) {
    text.classList.add('end');
    text.classList.remove('top');
});
document.querySelector('#filters li:nth-child(2) input').addEventListener('click', function(e) {
    text.classList.add('top');
    text.classList.remove('end');
});

// move filters if portrait phones
if (window.matchMedia("(max-width: 600px) and (orientation: portrait)").matches) {
    document.querySelector('section.right').appendChild(document.getElementById('filters'));
}

//text resize
function resizeText() {
    var currentHeight = window.getComputedStyle(document.querySelector('#grid-container')).getPropertyValue('height');
    text.style.cssText = 'height: ' + currentHeight;
}
resizeText();
window.addEventListener('onload', resizeText);
window.addEventListener('resize', resizeText);
