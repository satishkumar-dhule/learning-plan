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

        state.contentLoaded = true;

        // Rebuild navigation from actual content
        rebuildNavigation();

        // Initialize features after content is loaded
        initializeFeatures();

        // Log all header IDs for debugging
        console.log('Available section IDs:',
            Array.from(document.querySelectorAll('h1[id], h2[id], h3[id]'))
                .map(h => ({ id: h.id, text: h.textContent.substring(0, 50) }))
        );
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
// Rebuild Navigation from Content
// ===========================
function rebuildNavigation() {
    const content = document.getElementById('content');
    const headers = content.querySelectorAll('h1[id], h2[id]');

    // Categorize headers into sections
    const sections = categorizeHeaders(headers);

    // Rebuild each navigation section
    rebuildNavSection('Setup', sections.setup, 0);
    rebuildNavSection('Week 1', sections.week1, 1);
    rebuildNavSection('Week 2', sections.week2, 2);
    rebuildNavSection('Week 3', sections.week3, 3);
    rebuildNavSection('Week 4', sections.week4, 4);
    rebuildNavSection('Appendices', sections.appendix, 5);

    // Check for missing days
    const foundDays = new Set();
    [...sections.week1, ...sections.week2, ...sections.week3, ...sections.week4].forEach(item => {
        const match = /Day (\d+)/i.exec(item.text);
        if (match) foundDays.add(Number.parseInt(match[1], 10));
    });

    const missingDays = [];
    for (let i = 1; i <= 30; i++) {
        if (!foundDays.has(i)) missingDays.push(i);
    }

    if (missingDays.length > 0) {
        console.warn(`⚠️ Missing days in markdown: ${missingDays.join(', ')}`);
        showMissingDaysBanner(missingDays);
    }

    console.log('✅ Navigation rebuilt successfully', {
        setup: sections.setup.length,
        week1: sections.week1.length,
        week2: sections.week2.length,
        week3: sections.week3.length,
        week4: sections.week4.length,
        appendix: sections.appendix.length,
        missingDays: missingDays.length
    });
}

function showMissingDaysBanner(missingDays) {
    const content = document.getElementById('content');
    const banner = document.createElement('div');
    banner.className = 'callout callout-warning';
    banner.style.marginBottom = '2rem';
    banner.innerHTML = `
        <h3>⚠️ Note: Some Days Are Missing</h3>
        <p>The following days are not present in the markdown file: <strong>Day ${missingDays.join(', Day ')}</strong></p>
        <p style="font-size: 0.875rem; opacity: 0.8; margin-top: 0.5rem;">
            These appear as grayed-out items in the navigation sidebar.
        </p>
    `;
    content.insertBefore(banner, content.firstChild);
}

function categorizeHeaders(headers) {
    const sections = {
        setup: [],
        week1: [],
        week2: [],
        week3: [],
        week4: [],
        appendix: []
    };

    const foundDays = new Set();

    headers.forEach(header => {
        const text = header.textContent;
        const id = header.id;

        // Extract day number if present
        const dayMatch = /Day (\d+)/i.exec(text);
        if (dayMatch) {
            const day = Number.parseInt(dayMatch[1], 10);
            foundDays.add(day);

            // Get subtitle after colon, limiting length
            const parts = text.split(':');
            const subtitle = parts[1]?.trim().substring(0, 30) || '';
            const shortText = subtitle ? `Day ${day}: ${subtitle}` : `Day ${day}`;

            if (day >= 1 && day <= 7) {
                sections.week1.push({ id, text: shortText, fullText: text, day });
            } else if (day >= 8 && day <= 14) {
                sections.week2.push({ id, text: shortText, fullText: text, day });
            } else if (day >= 15 && day <= 21) {
                sections.week3.push({ id, text: shortText, fullText: text, day });
            } else if (day >= 22 && day <= 30) {
                sections.week4.push({ id, text: shortText, fullText: text, day });
            }
            return;
        }

        // Check for appendix
        if (/Appendix [A-J]/i.test(text)) {
            const shortText = text.substring(0, 50);
            sections.appendix.push({ id, text: shortText, fullText: text });
            return;
        }

        // Setup sections
        const lowerText = text.toLowerCase();
        if (lowerText.includes('ai') || lowerText.includes('assistant') ||
            lowerText.includes('setup') || lowerText.includes('checklist') ||
            lowerText.includes('navigation') || lowerText.includes('routine')) {
            sections.setup.push({ id, text: text.substring(0, 40), fullText: text });
        }
    });

    // Add placeholders for missing days
    addMissingDayPlaceholders(sections, foundDays);

    return sections;
}

function addMissingDayPlaceholders(sections, foundDays) {
    const weekRanges = [
        { section: 'week1', start: 1, end: 7 },
        { section: 'week2', start: 8, end: 14 },
        { section: 'week3', start: 15, end: 21 },
        { section: 'week4', start: 22, end: 30 }
    ];

    weekRanges.forEach(({ section, start, end }) => {
        for (let day = start; day <= end; day++) {
            if (!foundDays.has(day)) {
                sections[section].push({
                    id: null,
                    text: `Day ${day}: (Not in markdown)`,
                    fullText: `Day ${day} is missing from the markdown file`,
                    day,
                    missing: true
                });
            }
        }

        // Sort by day number to keep them in order
        sections[section].sort((a, b) => (a.day || 0) - (b.day || 0));
    });
}

function rebuildNavSection(title, items, sectionIndex) {
    const navSections = document.querySelectorAll('.nav-section');
    if (sectionIndex >= navSections.length) return;

    const navSection = navSections[sectionIndex];
    const ul = navSection.querySelector('ul');
    if (!ul) return;

    // Clear existing items
    ul.innerHTML = '';

    // If no items, show a message
    if (items.length === 0) {
        const li = document.createElement('li');
        li.style.opacity = '0.5';
        li.style.fontStyle = 'italic';
        li.textContent = 'No items found';
        ul.appendChild(li);
        return;
    }

    // Add new items with click handlers
    items.forEach(item => {
        const li = document.createElement('li');

        // Handle missing items differently
        if (item.missing) {
            const span = document.createElement('span');
            span.textContent = item.text;
            span.style.opacity = '0.4';
            span.style.fontStyle = 'italic';
            span.style.cursor = 'not-allowed';
            span.style.padding = '0.625rem 1.25rem';
            span.style.display = 'block';
            span.style.fontSize = '0.875rem';
            span.title = item.fullText;
            li.appendChild(span);
            ul.appendChild(li);
            return;
        }

        const a = document.createElement('a');
        a.href = `#${item.id}`;
        a.textContent = item.text;
        a.title = item.fullText;

        // Add click handler directly
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = document.getElementById(item.id);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active state
                document.querySelectorAll('.nav-section a').forEach(link => {
                    link.classList.remove('active');
                });
                a.classList.add('active');

                // Close mobile menu if open
                if (globalThis.innerWidth <= 1024) {
                    toggleMobileMenu();
                }

                // Update URL
                history.pushState(null, null, `#${item.id}`);
            }
        });

        li.appendChild(a);
        ul.appendChild(li);
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
                if (globalThis.innerWidth <= 1024) {
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

    backToTopBtn.addEventListener('click', () => {
        globalThis.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide button based on scroll position
    globalThis.addEventListener('scroll', () => {
        if (globalThis.pageYOffset > 300) {
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
    const hash = globalThis.location.hash;
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
    // Navigation click handlers are now attached during rebuild
    // initializeNavigation(); // No longer needed
    initializeMobileMenu();
    initializeSearch();
    initializeBackToTop();

    // Scroll event listeners
    let scrollTimeout;
    globalThis.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateActiveSection();
            updateScrollProgress();
        }, 10);
    }, { passive: true });

    // Handle hash navigation
    handleHashNavigation();
    globalThis.addEventListener('hashchange', handleHashNavigation);

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
