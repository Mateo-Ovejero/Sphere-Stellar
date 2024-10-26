    function toggleMenu() {
        var navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }
    
    document.addEventListener('DOMContentLoaded', function() {

    const containers = document.querySelectorAll('main .container');


    containers.forEach(container => {
        const img = container.querySelector('img');
        const box = container.querySelector('.box');
        
        img.addEventListener('click', function() {
            if (box) {
                box.classList.toggle('show');
            }
        });
    });
});


const images = document.querySelectorAll('.container img');

images.forEach(image => {
    image.addEventListener('click', function () {
        const container = image.parentElement;

        if (container.classList.contains('foxy')) {
             container.classList.toggle('click-left');
        } else {
            container.classList.toggle('click-right');
        }
    });
});
