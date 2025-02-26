document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
