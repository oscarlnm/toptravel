document.addEventListener( 'DOMContentLoaded', function () {

    const menu = document.querySelector('#menu');
    const menuBtn = document.querySelector('#menu_btn');
    const grid = document.querySelector('body');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        menu.classList.toggle('on_menu');
        grid.classList.toggle('on_hidden');
    })



    let ul = document.getElementById('menu');

    ul.addEventListener('click', function(e) {
        if (e.target.tagName === 'A'){
            menuBtn.classList.toggle('open');
            menu.classList.toggle('on_menu');
            grid.classList.toggle('on_hidden');
        }
    })

});


