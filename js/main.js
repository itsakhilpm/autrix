/* ═══════════════════════════════════════════
   AURTIX — Shared Scripts
   ═══════════════════════════════════════════ */

/* ── Navbar shadow on scroll ── */
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
}

/* ── Mobile hamburger menu ── */
const hamburger = document.getElementById('hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
    });

    // Close menu when a link inside it is clicked
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', (e) => {
            const parent = a.parentElement;
            // On mobile, "Products" toggles its submenu instead of navigating
            if (window.innerWidth <= 860 && parent.classList.contains('has-dropdown')) {
                e.preventDefault();
                parent.classList.toggle('open');
                return;
            }
            document.body.classList.remove('menu-open');
        });
    });
}

/* ── Reveal on scroll (with automatic stagger) ── */
document.querySelectorAll('.stagger').forEach(group => {
    Array.from(group.children).forEach((child, i) => {
        if (child.classList.contains('reveal')) {
            child.style.setProperty('--d', `${i * 0.1}s`);
        }
    });
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Animated counters ── */
function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
    }
    requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ── Cursor-follow glow on "why" cards ── */
document.querySelectorAll('.why-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
});

/* ── Hero carousel ── */
const heroSlidesData = [
    {
        headingHTML: 'Accurate Liquid Handling, <span>Reliable Results</span>',
        sub: 'Consistency starts with accuracy and ends with confidence',
    },
    {
        headingHTML: 'Precision in <span>Every Drop</span>',
        sub: 'Every microliter matters—achieve flawless precision with every dispense',
    },
    {
        headingHTML: 'Where Accuracy Meets <span>Fluid Control</span>',
        sub: 'Master every transfer with precision, control, and confidence.',
    },
];

const heroSlideEls = document.querySelectorAll('#heroSlides .hero-slide');
const heroHeadline = document.getElementById('heroHeadline');
const heroSub = document.getElementById('heroSub');
const heroDotEls = document.querySelectorAll('#heroDots .dot');
let heroIndex = 0;
let heroTimer;

function renderHeroSlide(index) {
    heroSlideEls.forEach((s, i) => s.classList.toggle('active', i === index));
    heroDotEls.forEach((d, i) => d.classList.toggle('active', i === index));

    heroHeadline.classList.add('fade-out');
    heroSub.classList.add('fade-out');
    setTimeout(() => {
        heroHeadline.innerHTML = heroSlidesData[index].headingHTML;
        heroSub.textContent = heroSlidesData[index].sub;
        heroHeadline.classList.remove('fade-out');
        heroSub.classList.remove('fade-out');
    }, 300);
}

function resetHeroTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => moveHeroSlide(1), 6000);
}

function goToHeroSlide(index) {
    heroIndex = index;
    renderHeroSlide(heroIndex);
    resetHeroTimer();
}

function moveHeroSlide(dir) {
    heroIndex = (heroIndex + dir + heroSlideEls.length) % heroSlideEls.length;
    renderHeroSlide(heroIndex);
    resetHeroTimer();
}

if (heroSlideEls.length && heroHeadline && heroSub) {
    resetHeroTimer();
}

/* ── Carousel (index product cards) ── */
const carouselState = {};

function moveCarousel(id, dir) {
    const el = document.getElementById(id);
    const total = el.querySelectorAll('.carousel-slide').length;
    carouselState[id] = ((carouselState[id] || 0) + dir + total) % total;
    renderCarousel(id);
}

function goToSlide(id, idx) {
    carouselState[id] = idx;
    renderCarousel(id);
}

function renderCarousel(id) {
    const el = document.getElementById(id);
    el.querySelector('.carousel-track').style.transform = `translateX(-${carouselState[id] * 100}%)`;
    el.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === carouselState[id]));
}

/* ── Product-page gallery ── */
function swapGallery(btn, src) {
    const main = document.getElementById('gallery-main-img');
    if (!main || main.getAttribute('src') === src) return;
    main.classList.add('switching');
    setTimeout(() => {
        main.setAttribute('src', src);
        main.classList.remove('switching');
    }, 220);
    document.querySelectorAll('.gallery-thumbs button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

/* ── Product description tabs (Overview / Specifications) ── */
function switchTab(btn, tabName) {
    const wrap = btn.closest('.product-description');
    if (!wrap) return;
    wrap.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    wrap.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    wrap.querySelector(`.tab-panel[data-tab="${tabName}"]`).classList.add('active');
}
