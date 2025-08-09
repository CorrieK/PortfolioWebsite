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

    // Load articles and social content
    fetchMediumArticles();
    loadInstagramPosts();
});

// Fetch Medium articles
async function fetchMediumArticles() {
    try {
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@korigichuki');
        const data = await response.json();
        
        const articles = data.items
            .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
            .slice(0, 5);
        
        const articlesContainer = document.getElementById('medium-articles');
        articlesContainer.innerHTML = '';
        
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'article-card';
            
            let imageUrl = 'https://via.placeholder.com/80x80/ff8c00/white?text=Article';
            if (article.thumbnail) {
                imageUrl = article.thumbnail;
            }
            
            articleElement.innerHTML = `
                <div class="article-header">
                    <div class="article-image">
                        <img src="${imageUrl}" alt="${article.title}" onerror="this.src='https://via.placeholder.com/80x80/ff8c00/white?text=Article'">
                    </div>
                    <div class="article-title">
                        <h3>${article.title}</h3>
                    </div>
                </div>
                <a href="${article.link}" target="_blank" class="read-article">Read article</a>
            `;
            articlesContainer.appendChild(articleElement);
        });
    } catch (error) {
        document.getElementById('medium-articles').innerHTML = '<p>Unable to load articles at the moment.</p>';
    }
}

// Load Instagram posts
function loadInstagramPosts() {
    const instagramContainer = document.getElementById('instagram-posts');
    
    const mockPosts = [
        { image: 'https://via.placeholder.com/80x80/ff8c00/white?text=Cloud', caption: 'Working on cloud architecture diagrams today! #CloudEngineering #AWS' },
        { image: 'https://via.placeholder.com/80x80/0066cc/white?text=DevOps', caption: 'Just finished a great DevOps workshop. Amazing turnout! #DevOps #Learning' },
        { image: 'https://via.placeholder.com/80x80/009900/white?text=Data', caption: 'Data pipeline optimization complete. Performance improved by 40%! #DataEngineering' },
        { image: 'https://via.placeholder.com/80x80/cc0066/white?text=Tech', caption: 'Speaking at the tech conference next week. Excited to share insights! #TechTalk' },
        { image: 'https://via.placeholder.com/80x80/6600cc/white?text=Medium', caption: 'New blog post published on Medium about serverless architecture #Serverless' }
    ];
    
    instagramContainer.innerHTML = '';
    
    mockPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'instagram-post';
        postElement.innerHTML = `
            <div class="post-image">
                <img src="${post.image}" alt="Instagram post">
            </div>
            <div class="post-caption">
                <p>${post.caption}</p>
            </div>
        `;
        instagramContainer.appendChild(postElement);
    });
}

// Scroll functions
function scrollArticles(direction) {
    const container = document.getElementById('medium-articles');
    const scrollAmount = 300;
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}

function scrollSocial(direction) {
    const container = document.getElementById('instagram-posts');
    const scrollAmount = 300;
    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}

function clearForm() {
    document.getElementById('contact-form').reset();
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}
});