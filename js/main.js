/**
 * Xiaoyu Xu - Personal Academic Homepage
 * Main JavaScript File
 */

(function() {
    'use strict';

    // ========================================
    // DOM Elements
    // ========================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // ========================================
    // Navigation - Scroll Shadow
    // ========================================
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check

    // ========================================
    // Navigation - Mobile Menu Toggle
    // ========================================
    function toggleMobileMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't close for CV download
            if (!link.classList.contains('nav-cv')) {
                closeMobileMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Active Navigation Link Highlighting
    // ========================================
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + navbar.offsetHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);

    // ========================================
    // CV Download Handler
    // ========================================
    const cvDownload = document.getElementById('cv-download');
    if (cvDownload) {
        cvDownload.addEventListener('click', (e) => {
            e.preventDefault();
            // TODO: Add CV PDF path when available
            // For now, show a message
            alert('CV will be available for download soon.');
            // When CV is ready, use:
            // window.open('path/to/cv.pdf', '_blank');
        });
    }

    // ========================================
    // Google Scholar Link (configured)
    // ========================================
    // Google Scholar link is now set in HTML

    // ========================================
    // Intersection Observer for Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.timeline-item, .publication-card, .award-item, .skill-tag').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .timeline-item.visible,
        .publication-card.visible,
        .award-item.visible,
        .skill-tag.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ========================================
    // Avatar Image Error Handler
    // ========================================
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.addEventListener('error', function() {
            // Create a placeholder with initials
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';
            this.style.color = 'white';
            this.style.fontSize = '4rem';
            this.style.fontWeight = '700';
            this.alt = 'XX';
            
            // Replace with a div showing initials
            const placeholder = document.createElement('div');
            placeholder.className = 'avatar-placeholder';
            placeholder.textContent = 'XX';
            placeholder.style.cssText = `
                width: 280px;
                height: 280px;
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, #3b82f6, #2563eb);
                color: white;
                font-size: 4rem;
                font-weight: 700;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
            `;
            this.parentNode.replaceChild(placeholder, this);
        });
    }

    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c👋 Hello!', 'font-size: 24px; font-weight: bold;');
    console.log('%cWelcome to Xiaoyu Xu\'s personal academic homepage.', 'font-size: 14px;');
    console.log('%cInterested in LLM Interpretability, Multimodal Learning, and RAG Systems.', 'font-size: 12px; color: #666;');

})();
