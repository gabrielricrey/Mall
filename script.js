const menuButton = document.getElementById('menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links');

menuButton.addEventListener('click', () =>{
    console.log('click');
    mobileNav.classList.toggle('on')
})

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () =>{
        mobileNav.classList.toggle('on');
    })
})