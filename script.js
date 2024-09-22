const header = document.querySelector('header');
const menuButton = document.getElementById('menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links');

document.addEventListener('scroll', () =>{
    header.classList.toggle('scrolled', window.scrollY > header.offsetHeight)
})

menuButton.addEventListener('click', () =>{
    console.log('click');
    mobileNav.classList.toggle('on')
})

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () =>{
        mobileNav.classList.toggle('on');
    })
})