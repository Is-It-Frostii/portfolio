const SetupObserver = () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-show");
                } else {
                    entry.target.classList.remove("animate-show");
                }
            });
        },
        { threshold: 0.2 },
    );
    const animateElements = document.querySelectorAll(".animate-hidden");
    animateElements.forEach((element) => observer.observe(element));
};

window.addEventListener("load", SetupObserver);
