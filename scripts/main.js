// ===== IMPORTS =====
import { translations, languageData } from './translations.js';

// ===== UTILITY FUNCTIONS =====
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
};

// ===== DOM ELEMENTS =====
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

// ===== THEME MANAGEMENT =====
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.bindEvents();
    }

    applyTheme(theme) {
        console.log('Applying theme:', theme); // Debug log
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme); // Add body attribute as well
        this.updateThemeIcon(theme);
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
        
        // Force navbar update
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.setAttribute('data-theme', theme);
        }
    }

    updateThemeIcon(theme) {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        
        // Add smooth transition animation
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    bindEvents() {
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// ===== LANGUAGE MANAGEMENT =====
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'pt';
        this.translations = translations;
        this.languageData = languageData;
        this.init();
    }

    init() {
        this.createLanguageElements();
        this.applyLanguage(this.currentLanguage);
        this.bindEvents();
    }

    createLanguageElements() {
        // Update language selector if it doesn't exist
        const languageSelector = document.getElementById('language-selector');
        if (!languageSelector) return;

        this.updateLanguageDisplay();
    }

    updateLanguageDisplay() {
        const languageToggle = document.getElementById('language-toggle');
        const languageFlag = languageToggle?.querySelector('.language-flag');
        const languageCode = languageToggle?.querySelector('.language-code');
        
        if (languageFlag && languageCode) {
            const currentLangData = this.languageData[this.currentLanguage];
            languageFlag.textContent = currentLangData.flag;
            languageCode.textContent = currentLangData.code;
        }

        // Update active state in dropdown
        const languageOptions = document.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            const lang = option.getAttribute('data-lang');
            option.classList.toggle('active', lang === this.currentLanguage);
        });
    }

    applyLanguage(language) {
        if (!this.translations[language]) {
            console.warn(`Language ${language} not found, falling back to Portuguese`);
            language = 'pt';
        }

        const elements = document.querySelectorAll('[data-text]');
        elements.forEach(element => {
            const key = element.getAttribute('data-text');
            const translation = this.translations[language][key];
            
            if (translation) {
                // Handle different element types
                if (key.startsWith('placeholder-')) {
                    // For placeholder translations, update the placeholder attribute
                    element.placeholder = translation;
                } else if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = translation;
                } else if (element.tagName === 'INPUT' && element.type === 'email') {
                    element.placeholder = translation;
                } else if (element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else if (element.classList.contains('hero-description')) {
                    // Use innerHTML for hero-description to support line breaks
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update page language attribute
        document.documentElement.lang = language === 'pt' ? 'pt-BR' : language;
        document.documentElement.setAttribute('data-lang', language);
        
        // Update meta description
        this.updateMetaDescription(language);
        
        // Store language preference
        localStorage.setItem('language', language);
        this.currentLanguage = language;
        
        // Update display
        this.updateLanguageDisplay();
    }

    updateMetaDescription(language) {
        const descriptions = {
            pt: 'Tami Uemura - Analista de QA especializada em qualidade de software e experiência do usuário',
            en: 'Tami Uemura - QA Analyst specialized in software quality and user experience',
            es: 'Tami Uemura - Analista de QA especializada en calidad de software y experiencia del usuario'
        };

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = descriptions[language] || descriptions.pt;
        }
    }

    bindEvents() {
        const languageToggle = document.getElementById('language-toggle');
        const languageSelector = document.getElementById('language-selector');
        const languageOptions = document.querySelectorAll('.language-option');

        // Toggle dropdown
        if (languageToggle) {
            languageToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                languageSelector.classList.toggle('open');
            });
        }

        // Language selection
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = option.getAttribute('data-lang');
                this.applyLanguage(selectedLang);
                languageSelector.classList.remove('open');
                
                // Add transition effect
                document.body.style.transition = 'opacity 0.3s ease';
                document.body.style.opacity = '0.8';
                setTimeout(() => {
                    document.body.style.opacity = '';
                    document.body.style.transition = '';
                }, 300);
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageSelector?.contains(e.target)) {
                languageSelector?.classList.remove('open');
            }
        });

        // Keyboard navigation
        if (languageToggle) {
            languageToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    languageSelector.classList.toggle('open');
                }
            });
        }

        languageOptions.forEach(option => {
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    option.click();
                }
            });
        });
    }

    // Public method to change language programmatically
    changeLanguage(language) {
        this.applyLanguage(language);
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    // Get available languages
    getAvailableLanguages() {
        return Object.keys(this.translations);
    }
}

// ===== NAVIGATION MANAGEMENT =====
class NavigationManager {
    constructor() {
        this.isMenuOpen = false;
        this.init();
    }

    init() {
        this.bindEvents();
        this.handleScroll();
    }

    bindEvents() {
        // Hamburger menu toggle
        if (hamburger) {
            hamburger.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close menu when clicking nav links
        if (navMenu) {
            navMenu.addEventListener('click', (e) => {
                if (e.target.classList.contains('nav-link')) {
                    this.closeMobileMenu();
                }
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navbar.contains(e.target) && this.isMenuOpen) {
                this.closeMobileMenu();
            }
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Handle scroll events
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
    }

    toggleMobileMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        navMenu.classList.toggle('active');
        this.animateHamburger();
    }

    closeMobileMenu() {
        this.isMenuOpen = false;
        navMenu.classList.remove('active');
        this.animateHamburger();
    }

    animateHamburger() {
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (this.isMenuOpen) {
                bar.style.transform = index === 0 ? 'rotate(45deg) translate(5px, 5px)' :
                                   index === 1 ? 'opacity(0)' :
                                   'rotate(-45deg) translate(7px, -6px)';
            } else {
                bar.style.transform = '';
                bar.style.opacity = '';
            }
        });
    }

    handleScroll() {
        const scrollY = window.scrollY;
        
        // Navbar background opacity
        if (scrollY > 50) {
            navbar.style.background = getComputedStyle(document.documentElement)
                .getPropertyValue('--bg-primary').trim() === '#FFFFFF' 
                ? 'rgba(255, 255, 255, 0.95)' 
                : 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.background = getComputedStyle(document.documentElement)
                .getPropertyValue('--bg-primary').trim() === '#FFFFFF' 
                ? 'rgba(255, 255, 255, 0.8)' 
                : 'rgba(15, 23, 42, 0.8)';
        }

        // Active navigation highlighting
        this.updateActiveNavLink();
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
}

// ===== SCROLL ANIMATIONS =====
class ScrollAnimations {
    constructor() {
        this.animatedElements = new Set();
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.bindScrollEvents();
    }

    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                    this.animateElement(entry.target);
                    this.animatedElements.add(entry.target);
                }
            });
        }, options);

        // Observe elements that should animate on scroll
        const elementsToAnimate = document.querySelectorAll(
            '.skill-card, .timeline-item, .contact-item, .about-content > *, .hero-visual'
        );

        elementsToAnimate.forEach(el => {
            this.observer.observe(el);
        });
    }

    animateElement(element) {
        element.style.animation = 'fadeInUp 0.8s ease-out forwards';
        
        // Add stagger delay for grouped elements
        const siblings = Array.from(element.parentElement.children);
        const index = siblings.indexOf(element);
        element.style.animationDelay = `${index * 0.1}s`;
    }

    bindScrollEvents() {
        // Parallax effect for floating shapes
        window.addEventListener('scroll', throttle(() => {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.shape');
            
            shapes.forEach((shape, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
            });
        }, 16));
    }
}

// ===== SKILL CARDS INTERACTIONS =====
class SkillCardsManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', () => this.animateSkillCard(card, true));
            card.addEventListener('mouseleave', () => this.animateSkillCard(card, false));
        });
    }

    animateSkillCard(card, isHovering) {
        const icon = card.querySelector('.skill-icon-container');
        const title = card.querySelector('.skill-title');
        
        if (isHovering) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            title.style.color = 'var(--primary-color)';
            
            // Add particle effect
            this.createParticles(card);
        } else {
            icon.style.transform = 'scale(1) rotate(0deg)';
            title.style.color = 'var(--text-primary)';
        }
    }

    createParticles(card) {
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--primary-color);
                border-radius: 50%;
                pointer-events: none;
                z-index: 10;
                top: 50%;
                left: 50%;
                animation: particleFloat 2s ease-out forwards;
                animation-delay: ${i * 0.1}s;
            `;
            
            card.style.position = 'relative';
            card.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.remove();
                }
            }, 2000);
        }
    }
}

// ===== CONTACT FORM MANAGEMENT =====
class ContactFormManager {
    constructor() {
        this.currentLanguage = 'pt';
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        // Remove validation on input to allow user to type freely
        const inputs = contactForm?.querySelectorAll('.form-input, .form-textarea');
        inputs?.forEach(input => {
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorKey = '';

        switch (field.id) {
            case 'name':
                if (!value) {
                    isValid = false;
                    errorKey = 'error-name-required';
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    isValid = false;
                    errorKey = 'error-email-required';
                } else if (!emailRegex.test(value)) {
                    isValid = false;
                    errorKey = 'error-email-invalid';
                }
                break;
            case 'message':
                if (!value) {
                    isValid = false;
                    errorKey = 'error-message-required';
                } else if (value.length < 10) {
                    isValid = false;
                    errorKey = 'error-message-min';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorKey);
        } else {
            this.clearFieldError(field);
        }

        return isValid;
    }

    showFieldError(field, errorKey) {
        field.classList.add('error');
        const errorElement = document.getElementById(field.id + '-error');
        if (errorElement) {
            const errorMessage = this.getTranslation(errorKey);
            errorElement.textContent = errorMessage;
            errorElement.classList.add('show');
        }
    }

    clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = document.getElementById(field.id + '-error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }
    }

    getTranslation(key) {
        // Get current language from document
        const currentLang = document.documentElement.getAttribute('data-lang') || 'pt';
        console.log('🔍 Form Translation Debug:', {
            key: key,
            currentLang: currentLang,
            hasTranslation: !!(translations[currentLang] && translations[currentLang][key]),
            translation: translations[currentLang] && translations[currentLang][key]
        });
        
        if (translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        }
        
        // Fallback to Portuguese if key not found
        if (translations.pt && translations.pt[key]) {
            console.warn(`⚠️ Translation key '${key}' not found for '${currentLang}', using Portuguese fallback`);
            return translations.pt[key];
        }
        
        console.error(`❌ Translation key '${key}' not found for any language`);
        return key;
    }

    validateForm() {
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');

        const isNameValid = this.validateField(nameField);
        const isEmailValid = this.validateField(emailField);
        const isMessageValid = this.validateField(messageField);

        return isNameValid && isEmailValid && isMessageValid;
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        // Validate all fields
        if (!this.validateForm()) {
            return;
        }

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Show loading state
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        const loadingText = this.getTranslation('contact-form-sending');
        submitBtn.innerHTML = `<span>${loadingText}</span><span>⏳</span>`;
        submitBtn.disabled = true;

        try {
            // Send to Formspree (free form service)
            await this.submitToFormspree({ name, email, message });
            
            // Show success feedback
            this.showSuccessMessage();
            contactForm.reset();
            
            // Clear validation states
            const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
            inputs.forEach(input => this.clearFieldError(input));

        } catch (error) {
            console.error('Form submission error:', error);
            this.showErrorMessage();
        } finally {
            // Restore button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    async submitToFormspree(data) {
        const formspreeUrl = 'https://formspree.io/f/xvgqqdqo'; 
        
        try {
            const response = await fetch(formspreeUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    subject: `Nova mensagem de ${data.name} - Tami Uemura`,
                    _replyto: data.email, 
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return response.json();
        } catch (error) {
            console.error('Formspree submission error:', error);
            throw error;
        }
    }

    showSuccessMessage() {
        if (formFeedback) {
            const successMessage = this.getTranslation('contact-success');
            formFeedback.className = 'form-feedback show';
            formFeedback.querySelector('.feedback-text').textContent = successMessage;
            formFeedback.querySelector('.feedback-icon').textContent = '✅';
            
            setTimeout(() => {
                formFeedback.classList.remove('show');
            }, 4000);
        }
    }

    showErrorMessage() {
        if (formFeedback) {
            // Create error messages for different languages
            const currentLang = document.documentElement.getAttribute('data-lang') || 'pt';
            const errorMessages = {
                pt: 'Erro ao enviar mensagem. Tente novamente.',
                en: 'Error sending message. Please try again.',
                es: 'Error al enviar mensaje. Inténtalo de nuevo.'
            };
            
            const errorMessage = errorMessages[currentLang] || errorMessages.pt;
            formFeedback.className = 'form-feedback show';
            formFeedback.querySelector('.feedback-text').textContent = errorMessage;
            formFeedback.querySelector('.feedback-icon').textContent = '❌';
            
            setTimeout(() => {
                formFeedback.classList.remove('show');
            }, 4000);
        }
    }

    // Update language when language changes
    updateLanguage(lang) {
        this.currentLanguage = lang;
        
        // Clear and re-validate any existing errors to update their language
        const fieldsWithErrors = document.querySelectorAll('.form-input.error, .form-textarea.error');
        fieldsWithErrors.forEach(field => {
            // Store the error state
            const hadError = field.classList.contains('error');
            
            if (hadError) {
                // Clear the error temporarily
                this.clearFieldError(field);
                
                // Re-validate to show error in new language
                setTimeout(() => {
                    this.validateField(field);
                }, 50);
            }
        });
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.optimizeAnimations();
        this.setupPreloadHints();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    optimizeAnimations() {
        // Reduce animations for users who prefer reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--transition-fast', '0.01ms');
            document.documentElement.style.setProperty('--transition-normal', '0.01ms');
            document.documentElement.style.setProperty('--transition-slow', '0.01ms');
        }
    }

    setupPreloadHints() {
        // Preload critical resources
        const criticalResources = [
            { href: 'styles/style.css', as: 'style' },
            { href: 'scripts/main.js', as: 'script' }
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            document.head.appendChild(link);
        });
    }
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupAriaAttributes();
    }

    setupKeyboardNavigation() {
        // Enable keyboard navigation for custom elements
        const interactiveElements = document.querySelectorAll('.skill-card, .timeline-item');
        
        interactiveElements.forEach(element => {
            element.setAttribute('tabindex', '0');
            
            element.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    element.click();
                }
            });
        });
    }

    setupFocusManagement() {
        // Skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#home';
        skipLink.textContent = 'Pular para o conteúdo principal';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: var(--primary-color);
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 9999;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }

    setupAriaAttributes() {
        // Add ARIA labels for better screen reader support
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', 'Alternar entre modo claro e escuro');
        }

        const hamburger = document.getElementById('hamburger');
        if (hamburger) {
            hamburger.setAttribute('aria-label', 'Abrir menu de navegação');
            hamburger.setAttribute('aria-expanded', 'false');
        }

        // Update hamburger aria-expanded on menu toggle
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) {
            const observer = new MutationObserver(() => {
                const isOpen = navMenu.classList.contains('active');
                hamburger.setAttribute('aria-expanded', isOpen.toString());
                hamburger.setAttribute('aria-label', 
                    isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
                );
            });
            
            observer.observe(navMenu, { attributes: true, attributeFilter: ['class'] });
        }
    }
}

// ===== APP INITIALIZATION =====
class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
        } else {
            this.initializeComponents();
        }
    }

    initializeComponents() {
        // Initialize all managers
        this.themeManager = new ThemeManager();
        this.languageManager = new LanguageManager();
        this.navigationManager = new NavigationManager();
        this.scrollAnimations = new ScrollAnimations();
        this.skillCardsManager = new SkillCardsManager();
        this.contactFormManager = new ContactFormManager();
        this.performanceManager = new PerformanceManager();
        this.accessibilityManager = new AccessibilityManager();

        // Connect managers that need to communicate
        this.setupManagerConnections();

        // Add loading complete class
        document.body.classList.add('loaded');
        
        // Initialize page visibility API for performance
        this.setupVisibilityAPI();
    }

    setupManagerConnections() {
        // Update contact form language when language changes
        if (this.languageManager && this.contactFormManager) {
            const originalSetLanguage = this.languageManager.setLanguage.bind(this.languageManager);
            this.languageManager.setLanguage = (lang) => {
                originalSetLanguage(lang);
                this.contactFormManager.updateLanguage(lang);
            };
        }
        
        console.log('🎉 Tami Uemura Portfolio - All systems loaded successfully!');
        console.log(`🌍 Current language: ${this.languageManager.getCurrentLanguage()}`);
    }

    setupVisibilityAPI() {
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                // Pause non-essential animations when tab is not visible
                document.documentElement.style.setProperty('--animation-play-state', 'paused');
            } else {
                // Resume animations when tab becomes visible
                document.documentElement.style.setProperty('--animation-play-state', 'running');
            }
        });
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);
    
    // You could send errors to an analytics service here
    // analytics.track('portfolio_error', { error: e.error.message });
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
    
    // Handle the promise rejection gracefully
    e.preventDefault();
});

// ===== START APPLICATION =====
const app = new App();
