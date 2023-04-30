const overlay = document.querySelector('footer .nav-list .overlay');
const nav_list = document.querySelectorAll('footer .nav-list ul li');

nav_list.forEach((list_item) => {
    list_item.addEventListener('mouseover', () => {
        overlay.classList.add('active');
        let position = list_item.getBoundingClientRect();
        overlay.style.left = position.x + 'px';
        overlay.style.top = position.y + 'px';
        overlay.style.height = position.height + 'px';
        overlay.style.width = position.width + 'px';
    });   
    list_item.addEventListener('mouseout', () => {
        overlay.classList.remove('active');
    });
});