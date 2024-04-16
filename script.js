
// =========================Counter=================
function startCounterAnimation() {
    var counterSection = document.querySelector('.counter');
    var counterElements = counterSection.querySelectorAll('span');
    var windowHeight = window.innerHeight;
    var sectionPosition = counterSection.getBoundingClientRect().top;

    // Check if the counter section is in viewport
    if (sectionPosition < windowHeight) {
        counterElements.forEach(function (counterElement) {
            var elementPosition = counterElement.getBoundingClientRect().top;

            // Check if the counter element is in viewport
            if (elementPosition < windowHeight) {
                var targetCount = parseInt(counterElement.innerText);
                var currentCount = 0;
                var interval = setInterval(function () {
                    if (currentCount < targetCount) {
                        currentCount++;
                        counterElement.innerText = currentCount;
                    } else {
                        clearInterval(interval);
                    }
                }, 5);
            }
        });

        // Remove the scroll event listener once animation is triggered
        window.removeEventListener('scroll', startCounterAnimation);
    } else {
        // If user scrolls away, reattach the scroll event listener
        window.addEventListener('scroll', startCounterAnimation);
    }
}

// Add scroll event listener to trigger counter animation
window.addEventListener('scroll', startCounterAnimation);


// =========================Slick Slider=================

$('.singleSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1,
                autoplay: true,
            }
        },
    ]
});

// ================

$('.pensection').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
});

// ================

$('.headerslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
});

// =========================Responsive Nav=================

let btn = document.querySelector('.fa-bars');
let verticalNav = document.querySelector('.vertical-nav');


btn.addEventListener('click', () => {
    console.log('click');
    verticalNav.classList.toggle('hidden')
})