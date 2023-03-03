let burger = document.querySelector('.header__burger'),
    list = document.querySelector('.header__nav-list');


burger.addEventListener('click', function () {
    burger.classList.toggle('active')
    list.classList.toggle('active')
})