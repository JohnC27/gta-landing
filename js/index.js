var headerContainer = document.querySelector('.header__container');
var mobMenuBtn = document.querySelector('.header-mob');
var burgerMenuElems = document.querySelectorAll('.header-mob-container span');

// Открытие-закрытие nav на мобильный устройствах
function toggleHeaderMenu(el) {
    if (!el.classList.contains('mob-header-active')) {
        el.classList.add('mob-header-active');
        burgerMenuElems.forEach(function(item) {
            item.style.background = 'black'
        })
        return;
    }

    el.classList.remove('mob-header-active')
    burgerMenuElems.forEach(function(item) {
        item.style.background = 'white'
    })
}

mobMenuBtn.addEventListener('click', function () {toggleHeaderMenu(headerContainer)});


// Parallax.js library
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);