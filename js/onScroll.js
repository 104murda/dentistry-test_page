const nav = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.style.opacity = 0.2;
    }
    else {
        nav.style.opacity = 1;
    }
})

nav.addEventListener('mouseover', (e) => {
    e.target.style.opacity = 1;
})

