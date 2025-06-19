document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselPrev = document.querySelector('.carousel .prev');
    const carouselNext = document.querySelector('.carousel .next');
    let currentCarouselIndex = 0;

    function showCarouselItem(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[index].classList.add('active');
    }

    function nextCarouselItem() {
        currentCarouselIndex = (currentCarouselIndex + 1) % carouselItems.length;
        showCarouselItem(currentCarouselIndex);
    }

    function prevCarouselItem() {
        currentCarouselIndex = (currentCarouselIndex - 1 + carouselItems.length) % carouselItems.length;
        showCarouselItem(currentCarouselIndex);
    }

    if (carouselNext) carouselNext.addEventListener('click', nextCarouselItem);
    if (carouselPrev) carouselPrev.addEventListener('click', prevCarouselItem);

    // Auto-rotate carousel
    setInterval(nextCarouselItem, 5000);

    // Project slider functionality
    const projectSlides = document.querySelectorAll('.project-slide');
    const projectPrev = document.querySelector('.project-slider .prev');
    const projectNext = document.querySelector('.project-slider .next');
    let currentProjectIndex = 0;

    function showProjectSlide(index) {
        projectSlides.forEach(slide => slide.classList.remove('active'));
        projectSlides[index].classList.add('active');
    }

    function nextProjectSlide() {
        currentProjectIndex = (currentProjectIndex + 1) % projectSlides.length;
        showProjectSlide(currentProjectIndex);
    }

    function prevProjectSlide() {
        currentProjectIndex = (currentProjectIndex - 1 + projectSlides.length) % projectSlides.length;
        showProjectSlide(currentProjectIndex);
    }

    if (projectNext) projectNext.addEventListener('click', nextProjectSlide);
    if (projectPrev) projectPrev.addEventListener('click', prevProjectSlide);

    // Review slider functionality
    const reviewSlides = document.querySelectorAll('.review-slide');
    const reviewDots = document.querySelectorAll('.dot');
    let currentReviewIndex = 0;

    function showReviewSlide(index) {
        reviewSlides.forEach(slide => slide.classList.remove('active'));
        reviewSlides[index].classList.add('active');
        
        reviewDots.forEach(dot => dot.classList.remove('active'));
        reviewDots[index].classList.add('active');
    }

    reviewDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            currentReviewIndex = index;
            showReviewSlide(index);
        });
    });

    // Auto-rotate reviews
    setInterval(function() {
        currentReviewIndex = (currentReviewIndex + 1) % reviewSlides.length;
        showReviewSlide(currentReviewIndex);
    }, 7000);

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send this data to your backend
            console.log('Form submitted:', { name, email, subject, message });
            
            // For demo purposes, show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});