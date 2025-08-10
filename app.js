document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navbarMenu = document.querySelector(".navbar__menu");

    mobileMenu.addEventListener("click", function () {
        mobileMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    });
});

function checkLogin(event, destination) {
    event.preventDefault();
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn === "true") {
        window.location.href = destination;
    } else{
        alert("You must sign in first.");
        window.location.href = "signin.html"
    }
}

document.getElementById("logoutButton").addEventListener("click", function() {
    // Clear user session data
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");

    //Redirect to the login page or home page
    window.location.href = "index.html";
});