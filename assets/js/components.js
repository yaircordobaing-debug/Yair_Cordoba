class NavBar extends HTMLElement {
  connectedCallback() {
    // Inject mobile.css if not already present
    if (!document.querySelector('link[href*="mobile.css"]')) {
      const mobileCss = document.createElement('link');
      mobileCss.rel = 'stylesheet';
      // Resolve path relative to current page depth
      const path0 = window.location.pathname;
      const inSub = path0.includes('/core/') || path0.includes('/engineering/') || path0.includes('/lab/') || path0.includes('/Blog/') || path0.includes('/content/') || path0.includes('/mindset/') || path0.includes('/guides/');
      mobileCss.href = (inSub ? '../' : './') + 'assets/css/mobile.css';
      document.head.appendChild(mobileCss);
    }

    const path = window.location.pathname;
    const isSubfolder = path.includes('/core/') || path.includes('/engineering/') || path.includes('/lab/') || path.includes('/content/') || path.includes('/mindset/') || path.includes('/guides/') || path.includes('/Blog/');
    const prefix = isSubfolder ? '../' : './';
    
    const lang = localStorage.getItem('yc-lang') || 'es';
    const theme = localStorage.getItem('yc-theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);

    // Internationalization Helper for Component
    const t = (key) => {
      if (typeof getTranslation === 'function') {
        return getTranslation(lang, key);
      }
      return key;
    };

    this.innerHTML = `
      <style>
        .yc-nav * { box-sizing: border-box; margin: 0; padding: 0; }
        .yc-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: var(--nav-bg);
          padding: 12px 0;
          z-index: 9999;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .yc-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .yc-logo {
          display: flex; align-items: center; gap: 8px;
          font-weight: 800; font-size: 1.4rem; color: var(--text-main);
          text-decoration: none;
        }
        .yc-logo .bug { color: #1bb4b9; }
        .yc-logo .yair { font-size: 0.65rem; font-weight: 500; opacity: 0.7; margin-left: 2px; align-self: flex-end; margin-bottom: 4px; }
        
        .yc-menu { display: flex; align-items: center; gap: 20px; }
        .yc-link {
          color: var(--text-main);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        .yc-link:hover { color: #1bb4b9; }
        
        .yc-controls { display: flex; align-items: center; gap: 10px; margin-left: 10px; border-left: 1px solid var(--border); padding-left: 10px; }
        
        .yc-control-btn {
          background: none; border: 1px solid var(--border);
          color: var(--text-main); width: 32px; height: 32px;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.3s ease; font-size: 16px;
        }
        .yc-control-btn:hover { background: var(--primary); color: white; border-color: var(--primary); }

        .yc-cta {
          background: #1bb4b9;
          color: #ffffff !important;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 700;
        }

        .yc-dd { position: relative; }
        .yc-dd-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--bg-card);
          min-width: 200px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          padding: 8px;
          margin-top: 12px;
          z-index: 1000;
          border: 1px solid var(--border);
        }
        .yc-dd-menu.open { display: block; animation: slideIn 0.2s ease; }
        .yc-dd-menu a {
          display: block;
          padding: 10px 12px;
          color: var(--text-main);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: 6px;
          transition: all 0.2s;
        }
        .yc-dd-menu a:hover { background: var(--bg-page); color: #1bb4b9; }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .yc-burger { display: none; background: none; border: none; font-size: 24px; color: var(--text-main); cursor: pointer; }

        @media (max-width: 1100px) {
          .yc-menu { 
            display: none; 
            flex-direction: column; 
            position: absolute;
            top: 100%; left: 0; width: 100%; 
            background: var(--nav-bg);
            padding: 40px 30px; gap: 25px; 
            border-top: 1px solid var(--border);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            align-items: flex-start;
          }
          .yc-burger { display: block; padding: 5px; }
          .yc-menu.mobile-open { display: flex; animation: slideDown 0.3s ease-out; }
          .yc-controls { border-left: none; padding-left: 0; margin-left: 0; margin-top: 10px; width: 100%; justify-content: flex-start; }
          .yc-cta { width: 100%; text-align: center; }
          .yc-dd-menu { position: static; width: 100%; box-shadow: none; border: none; background: rgba(0,0,0,0.02); margin-top: 5px; }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>

      <nav class="yc-nav">
        <div class="yc-container">
          <a href="${prefix}core/index.html" class="yc-logo">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="10" fill="#1bb4b9"/>
              <path d="M12 28L20 12L28 28H12Z" stroke="white" stroke-width="4" stroke-linejoin="round"/>
            </svg>
            <span class="bug">BUG.COM</span><span class="yair">Yair</span>
          </a>

          <div class="yc-menu" id="yc-menu">
            <a href="${prefix}core/index.html" class="yc-link">${t('nav.home')}</a>
            
            <a href="${prefix}engineering/engineering.html" class="yc-link">${t('nav.engineering')}</a>

            <div class="yc-dd">
              <button class="yc-link yc-dd-btn">${t('nav.blog')} ▾</button>
              <div class="yc-dd-menu">
                <a href="${prefix}Blog/blog.html">${lang === 'es' ? 'Ver Todo' : 'View All'}</a>
                <a href="${prefix}Blog/noticias.html">${lang === 'es' ? 'Noticias Tech' : 'Tech News'}</a>
                <a href="${prefix}Blog/consejos.html">${lang === 'es' ? 'Consejos' : 'Tips'}</a>
                <a href="${prefix}Blog/herramientas.html">${lang === 'es' ? 'Herramientas' : 'Tools'}</a>
              </div>
            </div>

            <div class="yc-dd">
              <button class="yc-link yc-dd-btn">${t('nav.lab')} ▾</button>
              <div class="yc-dd-menu">
                <a href="${prefix}lab/laboratory.html">${t('nav.lab')}</a>
                <a href="${prefix}Blog/blog.html">${t('nav.blog')}</a>
              </div>
            </div>

            <a href="${prefix}core/about.html" class="yc-link">${t('nav.about')}</a>
            <a href="${prefix}core/contact.html" class="yc-link yc-cta">${t('nav.contact')}</a>
            
            <div class="yc-controls">
              <button class="yc-control-btn" id="yc-theme-toggle" title="${theme === 'light' ? 'Dark Mode' : 'Light Mode'}">
                <span class="material-symbols-outlined" style="font-size: 18px;">${theme === 'light' ? 'dark_mode' : 'light_mode'}</span>
              </button>
              <button class="yc-control-btn" id="yc-lang-toggle" style="font-size: 10px; font-weight: 800;" title="Change Language">
                ${lang.toUpperCase()}
              </button>
            </div>
          </div>

          <button class="yc-burger" id="yc-burger">☰</button>
        </div>
      </nav>
    `;

    this.setupLogic();

    // ── MOBILE BOTTOM NAV ────────────────────────────────────
    if (!document.getElementById('mobile-bottom-nav')) {
      const bottomNav = document.createElement('nav');
      bottomNav.id = 'mobile-bottom-nav';
      bottomNav.className = 'mobile-bottom-nav';

      // Determine active page
      const p = window.location.pathname;
      const isHome = p.endsWith('index.html') || p.endsWith('/core/') || p === '/';
      const isProjects = p.includes('projects');
      const isBlog = p.includes('Blog') || p.includes('blog');
      const isAbout = p.includes('about');
      const isContact = p.includes('contact');

      bottomNav.innerHTML = `
        <div class="nav-items">
          <a href="${prefix}core/index.html" class="nav-item ${isHome ? 'active' : ''}">
            <span class="material-symbols-outlined">${isHome ? 'home' : 'home'}</span>
            <span>${lang === 'es' ? 'Inicio' : 'Home'}</span>
          </a>
          <a href="${prefix}core/projects.html" class="nav-item ${isProjects ? 'active' : ''}">
            <span class="material-symbols-outlined">rocket_launch</span>
            <span>${lang === 'es' ? 'Proyectos' : 'Projects'}</span>
          </a>
          <a href="${prefix}Blog/blog.html" class="nav-item ${isBlog ? 'active' : ''}">
            <span class="material-symbols-outlined">article</span>
            <span>Blog</span>
          </a>
          <a href="${prefix}core/about.html" class="nav-item ${isAbout ? 'active' : ''}">
            <span class="material-symbols-outlined">person</span>
            <span>${lang === 'es' ? 'Sobre mí' : 'About'}</span>
          </a>
          <a href="${prefix}core/contact.html" class="nav-item ${isContact ? 'active' : ''}">
            <span class="material-symbols-outlined">mail</span>
            <span>${lang === 'es' ? 'Contacto' : 'Contact'}</span>
          </a>
        </div>
      `;

      document.body.appendChild(bottomNav);
    }
  }

  setupLogic() {
    const ddBtns = this.querySelectorAll('.yc-dd-btn');
    ddBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const menu = btn.nextElementSibling;
        this.querySelectorAll('.yc-dd-menu').forEach(m => {
          if (m !== menu) m.classList.remove('open');
        });
        menu.classList.toggle('open');
      });
    });

    document.addEventListener('click', () => {
      this.querySelectorAll('.yc-dd-menu').forEach(m => m.classList.remove('open'));
    });

    const themeBtn = this.querySelector('#yc-theme-toggle');
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('yc-theme', next);
      themeBtn.querySelector('span').textContent = next === 'light' ? 'dark_mode' : 'light_mode';
    });

    const langBtn = this.querySelector('#yc-lang-toggle');
    langBtn.addEventListener('click', () => {
      const current = localStorage.getItem('yc-lang') || 'es';
      const next = current === 'es' ? 'en' : 'es';
      localStorage.setItem('yc-lang', next);
      window.location.reload();
    });

    const burger = this.querySelector('#yc-burger');
    const menu = this.querySelector('#yc-menu');
    burger.addEventListener('click', () => {
      menu.classList.toggle('mobile-open');
    });
  }
}

class FooterBar extends HTMLElement {
  connectedCallback() {
    const lang = localStorage.getItem('yc-lang') || 'es';
    const path = window.location.pathname;
    const isSubfolder = path.includes('/core/') || path.includes('/engineering/') || path.includes('/lab/') || path.includes('/content/') || path.includes('/mindset/') || path.includes('/guides/') || path.includes('/Blog/');
    const prefix = isSubfolder ? '../' : './';

    this.innerHTML = `
      <style>
        .yc-footer { background: var(--bg-card); border-top: 1px solid var(--border); padding: 80px 0 40px; margin-top: 100px; }
        .yc-footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr; gap: 30px; margin-bottom: 40px; }
        .yc-footer h4 { color: var(--text-main); margin-bottom: 20px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
        .yc-footer ul { list-style: none; }
        .yc-footer ul li { margin-bottom: 10px; }
        .yc-footer ul a { color: var(--text-muted); text-decoration: none; transition: 0.3s; font-size: 0.9rem; }
        .yc-footer ul a:hover { color: #1bb4b9; }
        
        @media (max-width: 992px) { 
          .yc-footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; } 
        }
        @media (max-width: 600px) { 
          .yc-footer-grid { grid-template-columns: 1fr; text-align: center; } 
          .yc-footer ul { display: flex; flex-direction: column; align-items: center; }
        }
      </style>
      <footer class="yc-footer">
        <div class="container">
          <div class="yc-footer-grid">
            <div>
              <h4 style="font-size: 1.2rem; font-weight: 800; color: var(--text-main);">BUG.COM<span style="font-size: 0.7rem; font-weight: 500; opacity: 0.7; margin-left: 4px;">Yair</span></h4>
              <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 15px;">
                ${lang === 'es' ? 'Potenciando la ingeniería a través del conocimiento y la innovación constante.' : 'Empowering engineering through knowledge and constant innovation.'}
              </p>
            </div>
            <div>
              <h4>Mindset</h4>
              <ul>
                <li><a href="${prefix}mindset/manifesto.html">${lang === 'es' ? 'Manifiesto' : 'Manifesto'}</a></li>
                <li><a href="${prefix}mindset/vision.html">${lang === 'es' ? 'Visión' : 'Vision'}</a></li>
                <li><a href="${prefix}mindset/experience.html">${lang === 'es' ? 'Experiencia' : 'Experience'}</a></li>
                <li><a href="${prefix}mindset/impact.html">${lang === 'es' ? 'Impacto' : 'Impact'}</a></li>
              </ul>
            </div>
            <div>
              <h4>${lang === 'es' ? 'Ingeniería' : 'Engineering'}</h4>
              <ul>
                <li><a href="${prefix}engineering/engineering.html">${lang === 'es' ? 'Visión General' : 'Overview'}</a></li>
                <li><a href="${prefix}engineering/engineering.html#process">${lang === 'es' ? 'Metodología' : 'Methodology'}</a></li>
                <li><a href="${prefix}engineering/engineering.html#notes">${lang === 'es' ? 'Notas Técnicas' : 'Technical Notes'}</a></li>
              </ul>
            </div>
            <div>
              <h4>Blog & Lab</h4>
              <ul>
                <li><a href="${prefix}Blog/blog.html">${lang === 'es' ? 'Ver Todo' : 'View All'}</a></li>
                <li><a href="${prefix}Blog/noticias.html">${lang === 'es' ? 'Noticias Tech' : 'Tech News'}</a></li>
                <li><a href="${prefix}lab/laboratory.html">${lang === 'es' ? 'Laboratorio' : 'Laboratory'}</a></li>
              </ul>
            </div>
            <div>
              <h4>Social</h4>
              <ul>
                <li><a href="https://www.linkedin.com/in/yair-cordoba/">LinkedIn</a></li>
                <li><a href="https://github.com/yaircordobaing-debug">GitHub</a></li>
                <li><a href="https://codepen.io/Yair-Cordoba">CodePen</a></li>
                <li><a href="${prefix}core/contact.html">${lang === 'es' ? 'Contacto' : 'Contact'}</a></li>
              </ul>
            </div>
          </div>
          <div style="text-align:center; padding-top:40px; border-top:1px solid var(--border); color:var(--text-muted); font-size:0.85rem;">
            © 2026 Yair Córdoba. ${lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('nav-bar', NavBar);
customElements.define('footer-bar', FooterBar);
