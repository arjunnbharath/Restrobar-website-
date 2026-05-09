document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing after it becomes visible once
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for food items, title, and lights
    const foodItems = document.querySelectorAll('.comp-item');
    const heroTitle = document.querySelector('.hero-title');
    const heroLights = document.querySelectorAll('.hero-light');
    
    function updateParallax() {
        const scrollY = window.scrollY;
        
        // Food items parallax
        foodItems.forEach((item, index) => {
            const scrollSpeed = (index % 3 + 1) * 0.15;
            item.style.transform = `translateY(${scrollY * scrollSpeed}px)`;
        });

        // Hero title parallax (moves slower than scroll)
        if (heroTitle) {
            heroTitle.style.transform = `translateY(${scrollY * 0.4}px)`;
        }

        // Hanging lights parallax (moves even slower for depth)
        heroLights.forEach(light => {
            light.style.transform = `translateY(${scrollY * 0.2}px)`;
        });
    }
    
    // Add scroll listener and run once on load
    window.addEventListener('scroll', updateParallax);
    updateParallax();

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const navBackdrop = document.querySelector('.nav-backdrop');
    const bookBtn = document.querySelector('.book-btn');

    function setMenuOpen(isOpen) {
        if (!hamburger || !nav || !header) return;
        hamburger.classList.toggle('active', isOpen);
        nav.classList.toggle('active', isOpen);
        header.classList.toggle('menu-open', isOpen);
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        document.body.style.overflow = isOpen ? 'hidden' : '';
        if (navBackdrop) {
            navBackdrop.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        }
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            setMenuOpen(!nav.classList.contains('active'));
        });

        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        if (bookBtn) {
            bookBtn.addEventListener('click', closeMenu);
        }

        if (navBackdrop) {
            navBackdrop.addEventListener('click', closeMenu);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                closeMenu();
            }
        });
    }
});
