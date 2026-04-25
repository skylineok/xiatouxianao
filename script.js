// ===== 导航栏滚动效果 =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    }
});

// ===== Capabilities 标签切换 =====
const capTabs = document.querySelectorAll('.cap-tab');
const capPanels = document.querySelectorAll('.cap-panel');

capTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        capTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        capPanels.forEach(p => p.classList.remove('active'));
        document.getElementById(`panel-${target}`).classList.add('active');
    });
});

// ===== FAQ 手风琴 =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // 关闭所有
        faqItems.forEach(i => i.classList.remove('open'));

        // 切换当前
        if (!isOpen) {
            item.classList.add('open');
        }
    });
});

// ===== 滚动动画 =====
const animateElements = document.querySelectorAll(
    '.section-header, .core-card, .skill-card, .demo-card, .comparison-table-wrapper, .comparison-quote, .faq-list'
);

animateElements.forEach(el => el.classList.add('animate-on-scroll'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(el => observer.observe(el));

// ===== 平滑滚动（导航链接） =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
