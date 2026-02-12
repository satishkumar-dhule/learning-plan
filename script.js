// ===========================
// State Management
// ===========================
const state = {
    currentSection: null,
    isMenuOpen: false,
    contentLoaded: false
};

// ===========================
// Configure Marked.js
// ===========================
function configureMarked() {
    if (typeof marked !== 'undefined') {
        marked.setOptions({
            breaks: true,
            gfm: true,
            headerIds: true,
            mangle: false,
            sanitize: false
        });
    }
}

// ===========================
// Load and Parse Markdown Content
// ===========================
async function loadMarkdownContent() {
    try {
        // Configure marked.js
        configureMarked();

        const response = await fetch('30-day.md');
        if (!response.ok) throw new Error('Failed to load content');

        const markdown = await response.text();

        // Parse markdown to HTML using marked.js
        const html = typeof marked === 'undefined'
            ? markdown.replaceAll('\n', '<br>')
            : marked.parse(markdown);

        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = html;

        // Add IDs to sections for navigation
        addSectionIds();

        state.contentLoaded = true;

        // Initialize features after content is loaded
        initializeFeatures();
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('content').innerHTML = `
            <div class="callout callout-warning">
                <h3>Content Not Found</h3>
                <p>Unable to load the content. Please ensure the <code>30-day.md</code> file is in the same directory.</p>
                <p>Error: ${error.message}</p>
            </div>
        `;
    }
}

// ===========================
// Add IDs to Sections
// ===========================
function addSectionIds() {
    const content = document.getElementById('content');

    // Map section titles to IDs
    const sectionMap = {
        'AI Learning Assistants': 'ai-assistants',
        'Before You Start': 'setup-checklist',
        'The High-Performance Routine': 'daily-routine',
        'Day 1:': 'day-1',
        'Day 2:': 'day-2',
        'Day 3:': 'day-3',
        'Day 4:': 'day-4',
        'Day 5:': 'day-5',
        'Day 6:': 'day-6',
        'Day 7:': 'day-7',
        'Day 8:': 'day-8',
        'Day 9:': 'day-9',
        'Day 10:': 'day-10',
        'Day 11:': 'day-11',
        'Day 12:': 'day-12',
        'Day 13:': 'day-13',
        'Day 14:': 'day-14',
        'Day 15:': 'day-15',
        'Day 16:': 'day-16',
        'Day 17:': 'day-17',
        'Day 18:': 'day-18',
        'Day 19:': 'day-19',
        'Day 20:': 'day-20',
        'Day 21:': 'day-21',
        'Day 22:': 'day-22',
        'Day 23:': 'day-23',
        'Day 24:': 'day-24',
        'Day 25:': 'day-25',
        'Day 26:': 'day-26',
        'Day 27:': 'day-27',
        'Day 28:': 'day-28',
        'Day 29:': 'day-29',
        'Day 30:': 'day-30',
        'Appendix A:': 'appendix-a',
        'Appendix B:': 'appendix-b',
        'Appendix C:': 'appendix-c',
        'Appendix D:': 'appendix-d',
        'Appendix E:': 'appendix-e',
        'Appendix F:': 'appendix-f',
        'Appendix G:': 'appendix-g',
        'Appendix H:': 'appendix-h',
        'Appendix I:': 'appendix-i',
        'Appendix J:': 'appendix-j'
    };

    // Add IDs to h2 and h3 elements
    const headers = content.querySelectorAll('h2, h3');
    headers.forEach(header => {
        const text = header.textContent;
        for (const [key, id] of Object.entries(sectionMap)) {
            if (text.includes(key)) {
                header.id = id;
                break;
            }
        }

        // If no ID was set, create one from the text
        if (!header.id) {
            header.id = text.toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .substring(0, 50);
        }
    });
}

// ===========================
// Navigation Functionality
// ===========================
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-section a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Update active state
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');

                // Scroll to element
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                if (window.innerWidth <= 1024) {
                    toggleMobileMenu();
                }

                // Update URL hash
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

// ===========================
// Active Section Highlighting
// ===========================
function updateActiveSection() {
    const sections = document.querySelectorAll('h2[id], h3[id]');
    const navLinks = document.querySelectorAll('.nav-section a');

    let currentSection = null;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 0) {
            currentSection = section.id;
        }
    });

    if (currentSection && currentSection !== state.currentSection) {
        state.currentSection = currentSection;

        navLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// ===========================
// Mobile Menu Toggle
// ===========================
function initializeMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    toggle.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (state.isMenuOpen &&
            !sidebar.contains(e.target) &&
            !toggle.contains(e.target)) {
            toggleMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    state.isMenuOpen = !state.isMenuOpen;
    toggle.classList.toggle('active');
    sidebar.classList.toggle('open');
}

// ===========================
// Search Functionality
// ===========================
function initializeSearch() {
    const searchInput = document.getElementById('navSearch');
    const navSections = document.querySelectorAll('.nav-section');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        navSections.forEach(section => {
            const links = section.querySelectorAll('a');
            let hasVisibleLinks = false;

            links.forEach(link => {
                const text = link.textContent.toLowerCase();
                if (text.includes(query)) {
                    link.style.display = 'block';
                    hasVisibleLinks = true;
                } else {
                    link.style.display = 'none';
                }
            });

            // Hide section if no visible links
            section.style.display = hasVisibleLinks || query === '' ? 'block' : 'none';
        });
    });
}

// ===========================
// Back to Top Button
// ===========================
function initializeBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    const mainContent = document.querySelector('.main-content');

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
}

// ===========================
// Scroll Progress Tracker
// ===========================
function updateScrollProgress() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const progressElement = document.getElementById('scrollProgress');
    if (progressElement) {
        progressElement.textContent = Math.round(scrolled) + '%';
    }
}

// ===========================
// Handle URL Hash Navigation
// ===========================
function handleHashNavigation() {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
}

// ===========================
// Initialize All Features
// ===========================
function initializeFeatures() {
    initializeNavigation();
    initializeMobileMenu();
    initializeSearch();
    initializeBackToTop();

    // Scroll event listeners
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateActiveSection();
            updateScrollProgress();
        }, 10);
    }, { passive: true });

    // Handle hash navigation
    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);

    // Initial updates
    updateActiveSection();
    updateScrollProgress();
}

// ===========================
// Initialize App
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    loadMarkdownContent();
});
