
// nav bar background

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });



// body scroll right-left
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".contianerr").forEach(container => {
        gsap.to(container, {
            x: 0, 
            opacity: 1, 
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: container,
                start: "top 80%", 
                toggleActions: "play none none none",
            }
        });
    });
});


// return button 
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
    let scrollPosition = document.documentElement.scrollTop;
    let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (scrollPosition > pageHeight / 2) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};




