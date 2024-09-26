// app.js

$(document).ready(function() {
    // Smooth scrolling to sections
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Carousel functionality for testimonies
    let currentSlide = 0;
    const testimonies = $('.testimonio');
    function showSlide(index) {
        testimonies.hide();
        $(testimonies[index]).show();
    }
    
    showSlide(currentSlide);

    // Add button listeners or auto-slide
    setInterval(function() {
        currentSlide = (currentSlide + 1) % testimonies.length;
        showSlide(currentSlide);
    }, 5000);
});
