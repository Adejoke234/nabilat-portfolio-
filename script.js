// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  toggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// Fade in sections on scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

faders.forEach(el => observer.observe(el));

// Copy Code buttons
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const wrapper = btn.closest('.code-block-wrapper');
    const codeEl = wrapper.querySelector('.code-block code');
    const codeText = codeEl.textContent;

    navigator.clipboard.writeText(codeText).then(() => {
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');

      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('copied');
      }, 2000);
    }).catch(() => {
      btn.textContent = 'Copy failed';
      setTimeout(() => {
        btn.textContent = 'Copy Code';
      }, 2000);
    });
  });
});

// Code & Technical Skills tabs
const codeTabs = document.querySelectorAll('.code-tab');
const codePanels = document.querySelectorAll('.code-panel');

codeTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    codeTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    codePanels.forEach(panel => {
      panel.classList.toggle('active', panel.dataset.panel === target);
    });
  });
});
