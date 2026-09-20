const progress = document.querySelector('.reading-progress');
const article = document.querySelector('.article-body');
if (progress && article) {
  let pending = false;
  let previousRatio = -1;
  const update = () => {
    pending = false;
    const start = article.offsetTop;
    const distance = article.offsetHeight - window.innerHeight;
    const ratio = Math.max(0, Math.min(1, (window.scrollY - start) / Math.max(1, distance)));
    if (ratio !== previousRatio) {
      progress.style.transform = `scaleX(${ratio})`;
      previousRatio = ratio;
    }
  };
  window.addEventListener('scroll', () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(update);
  }, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
  update();
  const links = [...document.querySelectorAll('.article-sidebar .toc a')];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        const current = decodeURIComponent(link.hash.slice(1)) === entry.target.id;
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '0px 0px -65% 0px' });
  article.querySelectorAll('h2').forEach(heading => observer.observe(heading));
}

function redirectLegacySection() {
  if (document.body.classList.contains('home-page') && ['#news', '#teaching'].includes(location.hash)) {
    location.replace('archive/' + location.hash);
  }
}
window.addEventListener('hashchange', redirectLegacySection);
redirectLegacySection();
