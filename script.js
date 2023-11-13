
const menuBtn = document.getElementById('menu-btn-toggle');
const menuList = document.querySelector('ul');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('toggle-style');
});
