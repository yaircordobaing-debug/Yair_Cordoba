/**
 * Main Javascript for Digital Garden Vanilla Portafolio
 */

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Load Partials (Header & Footer)
    await loadPartials();
    
    // 2. Initialize Core Functions
    initTheme();
    initMobileMenu();
    initSearch();
    
    // Fade in content
    document.body.classList.add('loaded');
});

/**
 * Fetches HTML components and injects them into elements with data-include attribute
 */
async function loadPartials() {
    const includes = document.querySelectorAll('[data-include]');
    for (const el of includes) {
        const file = el.getAttribute('data-include');
        try {
            const response = await fetch(`components/${file}.html`);
            if (response.ok) {
                const html = await response.text();
                el.outerHTML = html;
            } else {
                console.error(`Error loading partial: ${file}`);
            }
        } catch (err) {
            console.error(`Fetch error for ${file}:`, err);
        }
    }
}

/**
 * Theme toggle (Dark/Light mode)
 */
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const root = document.documentElement;
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !systemDark)) {
        root.setAttribute('data-theme', 'light');
    }
    
    updateThemeIcon();

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            if (currentTheme === 'light') {
                root.removeAttribute('data-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                root.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
            updateThemeIcon();
        });
    }
}

function updateThemeIcon() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const iconPath = document.querySelector('#theme-icon');
    
    if (!iconPath) return;

    if (isLight) {
        // Moon icon for switching to dark
        iconPath.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    } else {
        // Sun icon for switching to light
        iconPath.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    }
}

/**
 * Mobile Drawer Menu
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('drawer-close');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');
    
    if (!menuBtn || !drawer) return;
    
    const openDrawer = () => {
        drawer.classList.add('active');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    
    const closeDrawer = () => {
        drawer.classList.remove('active');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    menuBtn.addEventListener('click', openDrawer);
    closeBtn?.addEventListener('click', closeDrawer);
    overlay?.addEventListener('click', closeDrawer);
}

/**
 * Search Modal
 */
function initSearch() {
    const searchBtn = document.getElementById('search-btn');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    
    // Si los elementos aún no existen (porque se inyectan con loadPartials), 
    // delegamos eventos al document
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('#search-btn');
        const close = e.target.closest('#search-close');
        const overlay = document.getElementById('search-overlay');
        
        if (btn && overlay) {
            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            setTimeout(() => document.getElementById('search-input')?.focus(), 100);
        }
        
        if (close && overlay) {
            overlay.classList.remove('active');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        const overlay = document.getElementById('search-overlay');
        if (e.key === 'Escape' && overlay?.classList.contains('active')) {
            overlay.classList.remove('active');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
        // Cmd+K / Ctrl+K shortcut
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            if (overlay) {
                overlay.classList.add('active');
                overlay.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                setTimeout(() => document.getElementById('search-input')?.focus(), 100);
            }
        }
    });
}
