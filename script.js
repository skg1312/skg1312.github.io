// script.js

// Smooth scroll for anchor links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href").substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    }

    // Custom Heart Emoji Cursor
    // Create a small canvas and draw a red heart emoji
    const canvas = document.createElement('canvas');
    canvas.width = 40;
    canvas.height = 40;
    const ctx = canvas.getContext('2d');
    ctx.font = "32px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("❤️", 20, 22);

    const heartCursor = `url(${canvas.toDataURL()}), auto`;
    document.body.style.cursor = heartCursor;
});

// Scroll reveal animation for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('main section');
    const windowHeight = window.innerHeight;
    for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = "none";
        }
    }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', () => {
    // Initial state for fade-in
    const sections = document.querySelectorAll('main section');
    for (const section of sections) {
        section.style.opacity = 0;
        section.style.transform = "translateY(40px)";
        section.style.transition = "opacity 0.7s, transform 0.5s";
    }
    revealOnScroll();
});

// Optional: Animate project cards on hover (subtle pop)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = "0 8px 28px rgba(255,53,122,0.11)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "0 2px 8px rgba(255,53,122,0.09)";
    });
});

// Optional: Animate navigation buttons (add ripple effect)
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${e.offsetX}px`;
        ripple.style.top = `${e.offsetY}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// (For ripple effect, add the following CSS to styles.css):
// .btn { position: relative; overflow: hidden; }
// .ripple {
//   position: absolute; border-radius: 50%; background: rgba(255, 53, 122, 0.33);
//   transform: scale(0); animation: ripple 0.6s linear;
//   pointer-events: none; width: 100px; height: 100px; opacity: 0.7;
//   left: 50%; top: 50%; translate: -50% -50%;
// }
// @keyframes ripple {
//   to { transform: scale(4); opacity: 0; }
// }
