function showSidebar() {
    let sidebar = document.querySelector(".mobileMenu");

    sidebar.style.display = "block";

    sidebar.classList.remove('animate__slideOutUp');

    sidebar.classList.add('animate__animated', 'animate__slideInDown');
}


function closeSidebar() {
    let sidebar = document.querySelector(".mobileMenu");

    sidebar.classList.remove('animate__slideInDown');

    sidebar.classList.add('animate__animated', 'animate__slideOutUp');

    sidebar.addEventListener('animationend', function() {
        sidebar.style.display = "none";
    }, { once: true });
}
