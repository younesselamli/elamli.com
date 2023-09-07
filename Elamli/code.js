document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the game cards container
    const gameCardsContainer = document.querySelector(".game-cards-container");

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the slide-up animation
    function handleAnimation() {
        if (isInViewport(gameCardsContainer)) {
            gameCardsContainer.style.opacity = 1;
            gameCardsContainer.style.transform = "translateY(0)";
            window.removeEventListener("scroll", handleAnimation); // Remove the scroll event listener once animation is triggered
        }
    }

    // Add a scroll event listener to trigger the animation
    window.addEventListener("scroll", handleAnimation);
});

