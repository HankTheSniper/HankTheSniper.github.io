// ==========================================
// Personal Homepage - Main JavaScript
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollAnimations();
    initMobileMenu();
    initContactForm();
    initStatCounter();
});

// --- Navbar scroll effect ---
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Navbar background
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active nav link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// --- Scroll-triggered animations ---
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
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

    // Observe skill fills
    document.querySelectorAll('.skill-fill').forEach(el => {
        el.style.width = '0';
        observer.observe(el);
    });

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Observe stat cards
    document.querySelectorAll('.stat-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ${i * 0.1}s ease, transform 0.5s ${i * 0.1}s ease`;
        observer.observe(el);
    });
}

// Add CSS rules for visible class
const style = document.createElement('style');
style.textContent = `
    .skill-fill.visible { width: var(--target-width) !important; }
    .project-card.visible { opacity: 1 !important; transform: translateY(0) !important; }
    .timeline-item.visible { opacity: 1 !important; transform: translateX(0) !important; }
    .stat-card.visible { opacity: 1 !important; transform: translateY(0) !important; }
`;
document.head.appendChild(style);

// Store target widths for skill bars
document.querySelectorAll('.skill-fill').forEach(el => {
    const targetWidth = el.style.width;
    el.style.setProperty('--target-width', targetWidth);
});

// --- Mobile menu ---
function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            toggle.classList.remove('active');
        });
    });
}

// --- Contact form ---
function initContactForm() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            showFormMessage('请填写所有字段', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage('请输入有效的邮箱地址', 'error');
            return;
        }

        // Prepare mailto link as fallback since this is static hosting
        const mailtoLink = `mailto:zhq.game.design@gmail.com?subject=来自 ${encodeURIComponent(name)} 的留言&body=${encodeURIComponent('姓名: ' + name + '\n邮箱: ' + email + '\n\n留言:\n' + message)}`;

        showFormMessage('正在打开邮件客户端...', 'success');
        setTimeout(() => {
            window.open(mailtoLink, '_blank');
        }, 500);

        form.reset();
    });
}

function showFormMessage(msg, type) {
    const existing = document.querySelector('.form-message');
    if (existing) existing.remove();

    const div = document.createElement('div');
    div.className = 'form-message';
    div.textContent = msg;
    div.style.cssText = `
        margin-top: 12px;
        padding: 10px 16px;
        border-radius: 8px;
        font-size: 0.85rem;
        text-align: center;
        background: ${type === 'success' ? 'rgba(0, 255, 100, 0.1)' : 'rgba(255, 80, 80, 0.1)'};
        color: ${type === 'success' ? '#00ff64' : '#ff5050'};
        border: 1px solid ${type === 'success' ? 'rgba(0, 255, 100, 0.2)' : 'rgba(255, 80, 80, 0.2)'};
    `;
    document.getElementById('contactForm').appendChild(div);

    setTimeout(() => div.remove(), 4000);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// --- Animated stat counter ---
function initStatCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                const duration = 1500;
                const startTime = performance.now();

                function update(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * target);
                    if (progress < 1) {
                        requestAnimationFrame(update);
                    } else {
                        el.textContent = target + '+';
                    }
                }

                requestAnimationFrame(update);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => observer.observe(el));
}

// --- Smooth parallax for hero particles ---
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const icons = document.querySelectorAll('.floating-icon');
    icons.forEach((icon, i) => {
        const factor = (i + 1) * 15;
        const moveX = (x - 0.5) * factor;
        const moveY = (y - 0.5) * factor;
        icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
