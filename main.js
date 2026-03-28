/* ============================================
   MITS GWALIOR PORTAL — MAIN JS
   ============================================ */

'use strict';

/* === SCROLL PROGRESS BAR === */
const progressBar = document.createElement('div');
progressBar.classList.add('scroll-progress');
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(scrollTop / docHeight) * 100}%`;
});

/* === NAVBAR SCROLL EFFECT === */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* === HAMBURGER MENU === */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* === ACTIVE NAV LINK === */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

/* === SCROLL REVEAL === */
const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* === SCHEME TABS === */
const tabs = document.querySelectorAll('.scheme-tab');
const contents = document.querySelectorAll('.scheme-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById(`tab-${tab.dataset.tab}`);
    if (target) {
      target.classList.add('active');
      // Trigger reveal for newly visible cards
      target.querySelectorAll('.reveal-up').forEach(el => {
        el.classList.remove('revealed');
        setTimeout(() => el.classList.add('revealed'), 50);
      });
    }
  });
});

/* === CONTACT FORM === */
function handleFormSubmit(btn) {
  const inputs = btn.closest('.contact-form-wrapper').querySelectorAll('.form-input');
  let valid = true;
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = 'var(--danger)';
      valid = false;
      setTimeout(() => input.style.borderColor = '', 2000);
    }
  });
  if (!valid) return;

  btn.textContent = 'Sending…';
  btn.style.opacity = '0.7';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Send Message';
    btn.style.opacity = '1';
    btn.disabled = false;
    inputs.forEach(input => input.value = '');
    showToast();
  }, 1500);
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* === SMOOTH ANCHOR SCROLL === */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* === TICKER PAUSE ON HOVER === */
const tickerTrack = document.querySelector('.ticker-track');
if (tickerTrack) {
  const ticker = tickerTrack.parentElement;
  ticker.addEventListener('mouseenter', () => tickerTrack.style.animationPlayState = 'paused');
  ticker.addEventListener('mouseleave', () => tickerTrack.style.animationPlayState = 'running');
}

/* === ANNOUNCE ITEMS STAGGER === */
document.querySelectorAll('.announce-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.08}s`;
  item.classList.add('reveal-up');
  revealObserver.observe(item);
});

/* === DEPT CARD STAGGER ON REVEAL === */
document.querySelectorAll('.dept-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
});

/* === RESOURCE CARD STAGGER === */
document.querySelectorAll('.resource-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.06}s`;
});

/* === KEYBOARD NAVIGATION SUPPORT === */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

/* === INIT HERO REVEALS === */
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('revealed'), i * 120);
    });
  }, 100);
});

console.log('%cMITS Gwalior — Student Portal', 'color:#c9a84c;font-size:1.2rem;font-weight:bold;');
console.log('%cDesigned for students, built with care.', 'color:#aaa;');
