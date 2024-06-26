function toggleMenu() {
    const menu = document.querySelector(".menuLinks");
    const icon = document.querySelector(".hamburgerIcon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
};

document.addEventListener('DOMContentLoaded', function() {
    const typeWriter = new Typed(".typewriter", {
        strings: ["am a full-stack dev", "code stuff on the web", "am a Webflow dev", "am a UI Designer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const typeWriter = new Typed(".typingDots", {
        strings: ["..."],
        loop: true,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 2000,
    });
});