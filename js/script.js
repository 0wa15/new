// JavaScript for Capstone Presentation Website

document.addEventListener('DOMContentLoaded', function() {
    // Add animation classes to elements
    const fadeElements = document.querySelectorAll('.text-content p, .image-content');
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });

    // Add slide-in classes to headings
    const headings = document.querySelectorAll('.slide h2');
    headings.forEach(heading => {
        heading.classList.add('slide-in-left');
    });

    // Initialize animations
    checkAnimations();
    
    // Check for animations when scrolling
    window.addEventListener('scroll', checkAnimations);
    
    // Initialize progress bars
    initProgressBars();
    
    // Highlight active navigation item based on scroll position
    highlightNavOnScroll();
    window.addEventListener('scroll', highlightNavOnScroll);
});

// Function to check which elements should be animated
function checkAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

// Function to initialize progress bars
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const progressFill = bar.querySelector('.progress-fill');
        const progress = bar.dataset.progress;
        
        // Initially set width to 0
        progressFill.style.width = '0%';
        
        // Create observer for progress bars
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate progress when in view
                    setTimeout(() => {
                        progressFill.style.width = progress + '%';
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(bar);
    });
}

// Function to highlight active navigation item based on scroll position
function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-links a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});
