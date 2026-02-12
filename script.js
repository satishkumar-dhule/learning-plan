// Enhanced Page-Like Experience for 30-Day SRE Site

const state = {
    currentSection: null,
    isMenuOpen: false,
    contentLoaded: false
};

// Configure Marked.js
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

// Load and Parse Markdown Content
async function loadMarkdownContent() {
    try {
        configureMarked();

        const response = await fetch('30-day.md');
        if (!response.ok) throw new Error('Failed to load content');

        const markdown = await response.text();
        const html = marked.parse(markdown);

        // Process the HTML to wrap days in page-like containers
        processAndWrapDays(html);

        state.contentLoaded = true;

        // Rebuild navigation
        setTimeout(() => {
            rebuildNavigation();
            initializeFeatures();
        }, 100);

        console.log('✅ Content loaded and processed');
    } catch (error) {
        console.error('Error loading content:', error);
        document.getElementById('content').innerHTML = `
            <div class="callout callout-warning">
                <h3>Content Not Found</h3>
                <p>Unable to load the content. Please ensure <code>30-day.md</code> is in the same directory.</p>
            </div>
        `;
    }
}

// Process HTML and wrap each day in a card
function processAndWrapDays(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;

    const content = document.getElementById('content');
    content.innerHTML = '';

    let currentDaySection = null;
    let currentDayContent = null;
    let dayNumber = 0;

    // Process each element
    Array.from(temp.children).forEach((element, index) => {
        if (element.tagName === 'H2' && /Day \d+/i.test(element.textContent)) {
            // Save previous day if exists
            if (currentDaySection && currentDayContent) {
                const card = createDayCard(dayNumber, currentDayContent);
                currentDaySection.appendChild(card);
                content.appendChild(currentDaySection);
            }

            // Extract day number
            const match = /Day (\d+)/i.exec(element.textContent);
            dayNumber = match ? Number.parseInt(match[1], 10) : 0;
            const weekNumber = Math.ceil(dayNumber / 7);

            // Create new day section
            currentDaySection = document.createElement('section');
            currentDaySection.className = 'day-section';
            currentDaySection.id = `day-${dayNumber}`;
            currentDaySection.setAttribute('data-week', weekNumber);
            currentDaySection.setAttribute('data-day', dayNumber);

            // Start collecting content for this day
            currentDayContent = {
                title: element.textContent,
                content: []
            };
        } else if (currentDayContent) {
            // Add to current day's content
            currentDayContent.content.push(element.outerHTML);
        } else {
            // Before first day - add to top of content
            content.appendChild(element);
        }
    });

    // Add last day
    if (currentDaySection && currentDayContent) {
        const card = createDayCard(dayNumber, currentDayContent);
        currentDaySection.appendChild(card);
        content.appendChild(currentDaySection);
    }

    console.log(`Processed ${dayNumber} day sections`);
}

// Create a day card element
function createDayCard(dayNumber, dayData) {
    const card = document.createElement('div');
    card.className = 'day-card';

    const weekNumber = Math.ceil(dayNumber / 7);

    card.innerHTML = `
        <div class="day-badge">
            Day ${dayNumber} of 30 • Week ${weekNumber}
        </div>
        <h2>${dayData.title}</h2>
        <div class="day-content">
            ${dayData.content.join('')}
        </div>
        <nav class="day-navigation">
            ${dayNumber > 1 ? `
                <a href="#day-${dayNumber - 1}" class="day-nav-btn prev">
                    Previous Day
                </a>
            ` : '<span></span>'}
            ${dayNumber < 30 ? `
                <a href="#day-${dayNumber + 1}" class="day-nav-btn next">
                    Next Day
                </a>
            ` : '<span></span>'}
        </nav>
    `;

    return card;
}

// Rebuild Navigation
function rebuildNavigation() {
    const content = document.getElementById('content');
    const daySections = content.querySelectorAll('.day-section');

    const sections = {
        setup: [],
        week1: [],
        week2: [],
        week3: [],
        week4: [],
        appendix: []
    };

    daySections.forEach(section => {
        const day = Number.parseInt(section.getAttribute('data-day'), 10);
        const h2 = section.querySelector('h2');
        if (!h2) return;

        const title = h2.textContent;
        const shortTitle = title.length > 40 ? title.substring(0, 37) + '...' : title;

        const item = {
            id: section.id,
            text: shortTitle,
            fullText: title,
            day
        };

        if (day >= 1 && day <= 7) {
            sections.week1.push(item);
        } else if (day >= 8 && day <= 14) {
            sections.week2.push(item);
        } else if (day >= 15 && day <= 21) {
            sections.week3.push(item);
        } else if (day >= 22 && day <= 30) {
            sections.week4.push(item);
        }
    });

    // Add missing day placeholders
    addMissingDayPlaceholders(sections);

    // Rebuild each section
    rebuildNavSection('Week 1', sections.week1, 1);
    rebuildNavSection('Week 2', sections.week2, 2);
    rebuildNavSection('Week 3', sections.week3, 3);
    rebuildNavSection('Week 4', sections.week4, 4);

    console.log('✅ Navigation rebuilt', {
        week1: sections.week1.length,
        week2: sections.week2.length,
        week3: sections.week3.length,
        week4: sections.week4.length
    });
}

function addMissingDayPlaceholders(sections) {
    const weekRanges = [
        { section: 'week1', start: 1, end: 7 },
        { section: 'week2', start: 8, end: 14 },
        { section: 'week3', start: 15, end: 21 },
        { section: 'week4', start: 22, end: 30 }
    ];

    weekRanges.forEach(({ section, start, end }) => {
        const foundDays = new Set(sections[section].map(item => item.day));

        for (let day = start; day <= end; day++) {
            if (!foundDays.has(day)) {
                sections[section].push({
                    id: null,
                    text: `Day ${day}: (Not available)`,
                    fullText: `Day ${day} is missing from the markdown`,
                    day,
                    missing: true
                });
            }
        }

        // Sort by day number
        sections[section].sort((a, b) => a.day - b.day);
    });
}

function rebuildNavSection(title, items, sectionIndex) {
    const navSections = document.querySelectorAll('.nav-section');
    if (sectionIndex >= navSections.length) return;

    const ul = navSections[sectionIndex].querySelector('ul');
    if (!ul) return;

    ul.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');

        if (item.missing) {
            const span = document.createElement('span');
            span.textContent = item.text;
            span.style.opacity = '0.4';
            span.style.fontStyle = 'italic';
            span.style.cursor = 'not-allowed';
            span.title = item.fullText;
            li.appendChild(span);
        } else {
            const a = document.createElement('a');
            a.href = `#${item.id}`;
            a.textContent = item.text;
            a.title = item.fullText;

            a.addEventListener('click', (e) => {
                e.preventDefault();
                scrollToSection(item.id);

                // Update active state
                document.querySelectorAll('.nav-section a').forEach(link => {
                    link.classList.remove('active');
                });
                a.classList.add('active');

                // Close mobile menu
                if (globalThis.innerWidth <= 1024) {
                    toggleMobileMenu();
                }
            });

            li.appendChild(a);
        }

        ul.appendChild(li);
    });
}

// Smooth scroll to section
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        history.pushState(null, null, `#${id}`);
    }
}

// Initialize Mobile Menu
function initializeMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    toggle.addEventListener('click', toggleMobileMenu);

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

// Initialize Search
function initializeSearch() {
    const searchInput = document.getElementById('navSearch');
    const navSections = document.querySelectorAll('.nav-section');

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        navSections.forEach(section => {
            const items = section.querySelectorAll('li');
            let hasVisibleItems = false;

            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = '';
                    hasVisibleItems = true;
                } else {
                    item.style.display = 'none';
                }
            });

            section.style.display = hasVisibleItems || query === '' ? 'block' : 'none';
        });
    });
}

// Initialize Back to Top
function initializeBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');

    backToTopBtn.addEventListener('click', () => {
        globalThis.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    globalThis.addEventListener('scroll', () => {
        if (globalThis.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
}

// Update Active Section
function updateActiveSection() {
    const sections = document.querySelectorAll('.day-section');
    const navLinks = document.querySelectorAll('.nav-section a');

    let currentSection = null;
    const scrollPos = globalThis.scrollY + 200;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            currentSection = section.id;
        }
    });

    if (currentSection && currentSection !== state.currentSection) {
        state.currentSection = currentSection;

        navLinks.forEach(link => {
            const href = link.getAttribute('href')?.substring(1);
            if (href === currentSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Update Scroll Progress
function updateScrollProgress() {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const progressElement = document.getElementById('scrollProgress');
    if (progressElement) {
        progressElement.textContent = Math.round(scrolled) + '%';
    }
}

// Handle Hash Navigation
function handleHashNavigation() {
    const hash = globalThis.location.hash;
    if (hash) {
        setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    }
}

// Initialize All Features
function initializeFeatures() {
    initializeMobileMenu();
    initializeSearch();
    initializeBackToTop();

    // Scroll listeners
    let scrollTimeout;
    globalThis.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateActiveSection();
            updateScrollProgress();
        }, 10);
    }, { passive: true });

    // Hash navigation
    handleHashNavigation();
    globalThis.addEventListener('hashchange', handleHashNavigation);

    // Initial updates
    updateActiveSection();
    updateScrollProgress();
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadMarkdownContent();
});
