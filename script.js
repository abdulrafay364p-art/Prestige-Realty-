  function toggleNav() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  document.querySelectorAll('.property-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });

  function submitForm() {
    const name = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (!name || !email || !message) {
      alert('Please fill in your name, email, and message.');
      return;
    }
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
  }

  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('[id]').forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--gold)' : '';
    });
  });
