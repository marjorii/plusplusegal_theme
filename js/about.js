var children = [...document.querySelector('section.left').children];
document.querySelector('section.left').prepend(document.createElement('div'));
var elem = document.querySelector('section.left > div');
children.forEach(function(child, index) {
    if (index != 6) {
        elem.appendChild(child);
    }
});
