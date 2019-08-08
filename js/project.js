var text = document.querySelector('.text');

// allow click on filters
document.querySelector('#filters li:first-of-type input').addEventListener('click', function(e) {
    document.querySelectorAll('img').forEach(function(img) {
        img.classList.add('top');
    });
    text.classList.remove('top');
});
document.querySelector('#filters li:nth-child(2) input').addEventListener('click', function(e) {
    document.querySelectorAll('img').forEach(function(img) {
        img.classList.remove('top');
    });
    text.classList.add('top');
});

// move filters if portrait phones
function moveFilters() {
    if (window.matchMedia("(max-width: 600px) and (orientation: portrait)").matches) {
        document.querySelector('section.right').appendChild(document.getElementById('filters'));
    }
}
moveFilters();

//text resize
function resizeText() {
    var currentHeight = window.getComputedStyle(document.querySelector('#grid-container')).getPropertyValue('height');
    text.style.cssText = 'height: ' + currentHeight;
}
resizeText();

//specific
function resizeT() {
    if (window.location.href.includes('/projects/cache-cache') && window.matchMedia("(min-width: 1024px)").matches)  {
        text.classList.add('small');
        document.querySelector('.text-column').classList.add('small')
    }
}
resizeT();

// do on resize
window.onload = function() {
    resizeText();
    resizeT();
    moveFilters();
}
window.onresize = function() {
    resizeText();
    resizeT();
    moveFilters();
}
