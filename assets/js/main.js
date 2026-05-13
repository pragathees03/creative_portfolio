/* ============================================
   PRAGATHEESWARAN S K — PORTFOLIO JAVASCRIPT
   ============================================ */

/* ---------- CUSTOM CURSOR ---------- */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animRing() {
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

// Cursor scale on interactive elements
document.querySelectorAll('a, button, .work-tab, .poster-card, .video-card, .model-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
    cursor.style.background = 'rgba(255,92,0,.4)';
    ring.style.transform = 'translate(-50%,-50%) scale(1.4)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.background = 'var(--accent)';
    ring.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});

/* ---------- NAV SCROLL ---------- */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', scrollY > 60);
});

/* ---------- TYPEWRITER ---------- */
const words = ['Poster Designer', 'Motion Creator', '3D Artist', 'Brand Builder', 'Video Editor'];
let wi = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const word = words[wi];
  if (!deleting) {
    tw.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    tw.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 55 : 90);
}
type();

/* ---------- SCROLL REVEAL ---------- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ---------- WORK TABS ---------- */
function switchTab(name, btn) {
  document.querySelectorAll('.work-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.work-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('panel-' + name).classList.add('active');
}

/* ---------- CONTACT FORM ---------- */
function handleForm(e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.style.display = 'block';
  e.target.reset();
  setTimeout(() => msg.style.display = 'none', 4000);
}

/* ---------- HOW TO ADD YOUR WORK ----------
   To replace placeholder cards with your own images:

   1. Put your image file in: assets/images/posters/  (or video-thumbnails/ or 3d-renders/)
   2. In index.html, find the <div class="card-ph"> inside the card you want to replace
   3. Replace the entire <div class="card-ph">...</div> with:
      <img src="assets/images/posters/your-file.jpg" style="width:100%;height:100%;object-fit:cover;">

   To link your Google Drive portfolio:
   - In index.html, find <a href="#" class="drive-btn">
   - Replace # with your actual Google Drive share link
   ============================================ */
