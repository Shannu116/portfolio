// ===============================================
// Loading Screen with Terminal Animation
// ===============================================
const loadingScreen = document.getElementById('loadingScreen');
const typingLoader = document.querySelector('.typing-loader');

const loadingMessages = [
    'initializing system...',
    'loading modules...',
    'connecting to server...',
    'decrypting files...',
    'compiling portfolio...',
    'ready!'
];

let loadingMessageIndex = 0;
let loadingCharIndex = 0;

function typeLoadingMessage() {
    if (loadingMessageIndex < loadingMessages.length) {
        if (loadingCharIndex < loadingMessages[loadingMessageIndex].length) {
            typingLoader.textContent += loadingMessages[loadingMessageIndex].charAt(loadingCharIndex);
            loadingCharIndex++;
            setTimeout(typeLoadingMessage, 50);
        } else {
            if (loadingMessageIndex < loadingMessages.length - 1) {
                setTimeout(() => {
                    typingLoader.textContent = '';
                    loadingCharIndex = 0;
                    loadingMessageIndex++;
                    typeLoadingMessage();
                }, 500);
            } else {
                setTimeout(() => {
                    loadingScreen.classList.add('hidden');
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }, 800);
            }
        }
    }
}

// Start loading animation
window.addEventListener('load', () => {
    setTimeout(typeLoadingMessage, 500);
});

// ===============================================
// Navigation
// ===============================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinkElements = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===============================================
// Active Navigation on Scroll
// ===============================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinkElements.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Add shadow to navbar on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===============================================
// Typing Effect
// ===============================================
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['CYBERSECURITY ANALYST', 'PENETRATION TESTER', 'SOC ANALYST', 'THREAT HUNTER'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let heroCharIndex = 0;

function type() {
    if (heroCharIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(heroCharIndex);
        heroCharIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (heroCharIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, heroCharIndex - 1);
        heroCharIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// ===============================================
// Smooth Scroll
// ===============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===============================================
// Intersection Observer for Animations
// ===============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section > .container > *');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// ===============================================
// Scroll Progress Indicator
// ===============================================
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #00d9ff, #5865F2);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ===============================================
// Stats Counter Animation
// ===============================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h4');
            const targetValue = parseInt(statNumber.textContent);
            animateCounter(statNumber, targetValue, 2000);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ===============================================
// GSAP Scroll Animations
// ===============================================
gsap.registerPlugin(ScrollTrigger);

// Hero animations
gsap.from('.hero-title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.terminal-prefix', {
    duration: 0.8,
    x: -50,
    opacity: 0,
    ease: 'power2.out',
    delay: 0.3
});

// Glitch effect on scroll
ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    onUpdate: (self) => {
        const glitchElements = document.querySelectorAll('.glitch');
        if (self.progress > 0.7) {
            glitchElements.forEach(el => {
                el.style.animation = 'none';
                setTimeout(() => {
                    el.style.animation = '';
                }, 10);
            });
        }
    }
});

// Section reveals
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section.children, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });
});

// Project cards animation
gsap.utils.toArray('.project-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        delay: index * 0.08,
        ease: 'power2.out'
    });
});

// Certification cards animation
gsap.utils.toArray('.cert-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none'
        },
        x: index % 2 === 0 ? -80 : 80,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power2.out'
    });
});

// Skill categories with improved animation
gsap.utils.toArray('.skill-category').forEach((skill, index) => {
    gsap.from(skill, {
        scrollTrigger: {
            trigger: skill,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none none'
        },
        y: 40,
        scale: 0.9,
        opacity: 0,
        duration: 0.7,
        delay: index * 0.1,
        ease: 'power2.out'
    });
});

// Terminal headers slide in
gsap.utils.toArray('.terminal-header').forEach(header => {
    gsap.from(header, {
        scrollTrigger: {
            trigger: header,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Stats counter with GSAP
gsap.utils.toArray('.stat').forEach(stat => {
    const number = stat.querySelector('h4');
    const targetText = number.textContent.trim();
    const target = parseFloat(targetText);
    
    // Check if it's a decimal number (like CGPA)
    const isDecimal = targetText.includes('.');
    
    gsap.from(number, {
        scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        textContent: 0,
        duration: 2,
        ease: 'power1.inOut',
        snap: isDecimal ? { textContent: 0.01 } : { textContent: 1 },
        onUpdate: function() {
            const currentValue = this.targets()[0].textContent;
            if (isDecimal) {
                number.textContent = parseFloat(currentValue).toFixed(2);
            } else {
                number.textContent = Math.ceil(parseFloat(currentValue)) + '+';
            }
        }
    });
});

// Parallax effect on hero
gsap.to('.hero::before', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 200,
    opacity: 0
});

// ===============================================
// RGB Split Effect on Images
// ===============================================
document.querySelectorAll('.project-image img, .image-wrapper img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.filter = 'contrast(1.2)';
        this.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.filter = 'none';
        this.style.transform = 'scale(1)';
    });
});

// ===============================================
// Neon Glow Pulse Animation
// ===============================================
setInterval(() => {
    const neonElements = document.querySelectorAll('.neon-text, .neon-number');
    neonElements.forEach(el => {
        el.style.animation = 'none';
        setTimeout(() => {
            el.style.animation = 'neonPulse 2s ease-in-out infinite alternate';
        }, 10);
    });
}, 5000);

// ===============================================
// Static Burst Effect on Hover
// ===============================================
document.querySelectorAll('.cyber-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        // Create static overlay
        const static_overlay = document.createElement('div');
        static_overlay.style.cssText = `
            position: absolute;
            inset: 0;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noise)" opacity="0.3"/></svg>');
            pointer-events: none;
            opacity: 0;
            z-index: 10;
            animation: staticBurst 0.3s ease-out;
        `;
        
        this.style.position = 'relative';
        this.appendChild(static_overlay);
        
        setTimeout(() => {
            static_overlay.remove();
        }, 300);
    });
});

// Add static burst keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes staticBurst {
        0% { opacity: 0.6; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

console.log('🔥 CYBERPUNK PORTFOLIO LOADED SUCCESSFULLY 🔥');
console.log('> SYSTEM STATUS: ONLINE');
console.log('> SECURITY LEVEL: MAXIMUM');
console.log('> READY FOR DEPLOYMENT');
