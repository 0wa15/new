// JavaScript for mouse-following effect and animations
document.addEventListener('DOMContentLoaded', function() {
    // Create cursor follower element
    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);

    // Mouse movement event for cursor follower
    document.addEventListener('mousemove', function(e) {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });

    // Hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .map-point, .culture-icon, .growth-icon');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursorFollower.style.width = '60px';
            cursorFollower.style.height = '60px';
            cursorFollower.style.backgroundColor = 'rgba(30, 144, 255, 0.4)';
        });
        
        element.addEventListener('mouseleave', function() {
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
            cursorFollower.style.backgroundColor = 'rgba(30, 144, 255, 0.2)';
        });
    });

    // Initialize animations when page loads
    initAnimations();
    
    // Add scroll event listener to trigger animations when scrolling
    window.addEventListener('scroll', function() {
        initAnimations();
    });
});

// Function to initialize animations
function initAnimations() {
    // Get all elements with animation classes that need to be activated on scroll
    const animatedElements = document.querySelectorAll('.fade-up, .fade-down, .fade-left, .fade-right, .scale-in, .scale-out, .slide-left, .slide-right, .rotate-in, .flip-x, .flip-y');
    
    animatedElements.forEach(element => {
        // Check if element is in viewport
        if (isElementInViewport(element)) {
            element.classList.add('active');
        }
    });
    
    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        if (isElementInViewport(bar)) {
            const parent = bar.parentElement;
            const progress = parent.getAttribute('data-progress');
            bar.style.width = progress + '%';
        }
    });
}

// Helper function to check if an element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
    );
}

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Add interactive effects to map points
const mapPoints = document.querySelectorAll('.map-point');
mapPoints.forEach(point => {
    point.addEventListener('mouseenter', function() {
        this.classList.add('pulse');
    });
    
    point.addEventListener('mouseleave', function() {
        this.classList.remove('pulse');
    });
});

// Add interactive effects to culture icons
const cultureIcons = document.querySelectorAll('.culture-icon i, .growth-icon i');
cultureIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.classList.add('pulse');
    });
    
    icon.addEventListener('mouseleave', function() {
        this.classList.remove('pulse');
    });
});
