const dataTargets = document.querySelectorAll('[data-target]');

dataTargets.forEach((element) => {
  const target = Number(element.dataset.target || 0);
  const decimals = Number.isInteger(target) ? 0 : 1;
  let current = 0;

  const updateValue = () => {
    const increment = target / 90;
    current += increment;

    if (current >= target) {
      element.textContent = target.toFixed(decimals);
      return;
    }

    element.textContent = current.toFixed(decimals);
    requestAnimationFrame(updateValue);
  };

  requestAnimationFrame(updateValue);
});

const navAnchors = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('main section[id]');

const setActiveNav = () => {
  const index = Array.from(sections).findIndex((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= 140 && rect.bottom >= 180;
  });

  navAnchors.forEach((link) => {
    const active = link.getAttribute('href') === `#${sections[index]?.id}`;
    link.classList.toggle('active', active);
  });
};

window.addEventListener('scroll', setActiveNav, { passive: true });
setActiveNav();

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'Mensagem enviada';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    form.reset();
  }, 1800);
});
