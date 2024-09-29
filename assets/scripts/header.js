function showSidebar() {
    let sidebar = document.querySelector(".mobileMenu");

    // Ensure the element is visible before adding the animation
    sidebar.style.display = "block";

    // Remove any previous animation classes if necessary
    sidebar.classList.remove('animate__slideOutUp');

    // Add the slide-in animation classes
    sidebar.classList.add('animate__animated', 'animate__slideInDown');
}


function closeSidebar() {
    let sidebar = document.querySelector(".mobileMenu");

    // Remove any existing animation classes if necessary
    sidebar.classList.remove('animate__slideInDown');

    // Add the slide out animation classes
    sidebar.classList.add('animate__animated', 'animate__slideOutUp');

    // Wait for the animation to finish before hiding the sidebar
    sidebar.addEventListener('animationend', function() {
        sidebar.style.display = "none";
    }, { once: true });
}
