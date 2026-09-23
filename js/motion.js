// Rishabh Ladha — motion layer. Reveals, parallax marks, counters, dot rail, cursor.
(function () {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) document.documentElement.classList.add('js');

  // split statement headlines into words so they can stagger in
  if (!reduce) {
    document.querySelectorAll('[data-words]').forEach((el) => {
      const frag = document.createDocumentFragment();
      let n = 0;
      [...el.childNodes].forEach((node) => {
        if (node.nodeType === 3) {
          node.textContent.split(/(\s+)/).forEach((tok) => {
            if (!tok.trim()) { frag.appendChild(document.createTextNode(tok)); return; }
            const s = document.createElement('span');
            s.className = 'w';
            s.textContent = tok;
            s.style.transitionDelay = (n++ * 55) + 'ms';
            frag.appendChild(s);
          });
        } else {
          frag.appendChild(node.cloneNode(true));
        }
      });
      el.textContent = '';
      el.appendChild(frag);
    });
  }

  // reveals — IntersectionObserver first (renderer-driven, survives throttled timers),
  // with a rect sweep as the fallback path
  let pending = [...document.querySelectorAll('[data-rise],[data-stagger],[data-words],.shot')];
  const reveal = (el) => {
    if (el.hasAttribute('data-stagger')) {
      [...el.children].forEach((c, i) => { c.style.transitionDelay = (i * 80) + 'ms'; });
    }
    el.classList.add('is-in');
    pending = pending.filter((p) => p !== el);
  };
  const sweep = () => {
    if (reduce) { pending.slice().forEach(reveal); return; }
    const h = window.innerHeight;
    pending.slice().forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < h * 0.92 && r.bottom > 0) reveal(el);
    });
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.04 });
    pending.forEach((el) => io.observe(el));
  }

  // counters
  const fmt = (n, dec) => dec ? n.toFixed(dec) : Math.round(n).toLocaleString('en-IN');
  const runCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const dec = (el.dataset.count.split('.')[1] || '').length;
    const pre = el.dataset.pre || '', post = el.dataset.post || '';
    const t0 = performance.now(), dur = 1100;
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + fmt(target * e, dec) + post;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  let counters = [...document.querySelectorAll('[data-count]')];
  if (reduce) counters = [];
  const sweepCounts = () => {
    const h = window.innerHeight;
    counters = counters.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < h * 0.85 && r.bottom > 0) { runCount(el); return false; }
      return true;
    });
  };
  if (!reduce && 'IntersectionObserver' in window) {
    const ioC = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        if (counters.includes(e.target)) { runCount(e.target); counters = counters.filter((c) => c !== e.target); }
        ioC.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => ioC.observe(el));
  }

  // parallax marks + interlude photo drift
  const marks = [...document.querySelectorAll('[data-par]')];
  const zooms = [...document.querySelectorAll('[data-zoom]')];
  let sy = window.scrollY, raf = 0;
  const drawPar = () => {
    raf = 0;
    marks.forEach((m) => {
      const k = parseFloat(m.dataset.par);
      m.style.transform = 'translate3d(0,' + (-sy * k).toFixed(1) + 'px,0)';
    });
    zooms.forEach((z) => {
      const k = parseFloat(z.dataset.zoom);
      const r = z.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
      const p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      z.style.transform = 'scale(' + (1 + k) + ') translate3d(0,' + (-p * k * 100).toFixed(1) + 'px,0)';
    });
  };
  const onScroll = () => {
    sy = window.scrollY;
    if (!raf && !reduce) raf = requestAnimationFrame(drawPar);
    railSync();
    sweep();
    sweepCounts();
  };

  // dot rail + nav state
  const rail = document.querySelector('.rail');
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  const dots = [];
  if (rail && chapters.length) {
    chapters.forEach((c) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Go to ' + c.dataset.chapter);
      b.setAttribute('aria-current', 'false');
      b.innerHTML = '<span>' + c.dataset.chapter + '</span>';
      b.addEventListener('click', () => {
        const y = c.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
      });
      rail.appendChild(b);
      dots.push(b);
    });
  }
  const navLinks = [...document.querySelectorAll('.nav__links a[href^="#"]')];
  const navEl = document.querySelector('.nav');
  const setActive = (idx) => {
    dots.forEach((d, i) => d.setAttribute('aria-current', String(i === idx)));
    const id = chapters[idx].id;
    if (rail) {
      const hue = getComputedStyle(chapters[idx]).getPropertyValue('--hue').trim();
      if (hue) rail.style.setProperty('--rail-hue', hue);
    }
    navLinks.forEach((a) => a.classList.toggle('is-on', a.getAttribute('href') === '#' + id));
  };
  const railSync = () => {
    if (navEl) navEl.classList.toggle('is-small', (window.scrollY || 0) > 80);
    if (!chapters.length) return;
    const mark = window.innerHeight * 0.35;
    let idx = 0;
    chapters.forEach((c, i) => { if (c.getBoundingClientRect().top <= mark) idx = i; });
    setActive(idx);
  };
  // renderer-driven active chapter: whichever chapter owns the upper third of the viewport
  if (chapters.length && 'IntersectionObserver' in window) {
    const ioR = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        setActive(chapters.indexOf(e.target));
      });
      if (navEl) navEl.classList.toggle('is-small', (window.scrollY || 0) > 80);
    }, { rootMargin: '-34% 0px -62% 0px', threshold: 0 });
    chapters.forEach((c) => ioR.observe(c));
  }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  addEventListener('load', onScroll);
  // run once now, then again after layout/fonts/lazy images settle
  const settle = () => { railSync(); sweep(); sweepCounts(); };
  settle();
  requestAnimationFrame(settle);
  addEventListener('load', settle);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(settle);
  [120, 400, 1000, 2200].forEach((t) => setTimeout(settle, t));
  // steady-state polling as a belt-and-braces path for frames that emit no scroll events
  let lastY = -1;
  setInterval(() => {
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    railSync();
    if (y !== lastY) { lastY = y; sy = y; if (!reduce) drawPar(); sweep(); sweepCounts(); }
  }, 100);
  (function watch() {
    try {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      railSync();
      if (y !== lastY) { lastY = y; sy = y; if (!reduce) drawPar(); sweep(); sweepCounts(); }
    } catch (e) { /* keep the loop alive */ }
    requestAnimationFrame(watch);
  })();
  // failsafe for text blocks only — photo wipes stay position-driven
  setTimeout(() => {
    pending = pending.filter((el) => {
      if (el.classList.contains('shot')) return true;
      reveal(el);
      return false;
    });
  }, 2600);

  // cursor
  if (!reduce && matchMedia('(hover:hover)').matches) {
    const cur = document.createElement('div');
    cur.className = 'cur';
    cur.innerHTML = '<span></span>';
    document.body.appendChild(cur);
    const label = cur.firstChild;
    let cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy;
    addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    const loop = () => {
      cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
      cur.style.transform = 'translate3d(' + (cx - cur.offsetWidth / 2) + 'px,' + (cy - cur.offsetHeight / 2) + 'px,0)';
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    document.addEventListener('pointerover', (e) => {
      const t = e.target.closest('[data-cursor]');
      if (t) { label.textContent = t.dataset.cursor; cur.classList.add('is-label'); }
      else { cur.classList.remove('is-label'); label.textContent = ''; }
    });
  }
})();
