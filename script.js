document.addEventListener('DOMContentLoaded', () => {

    // --- Element Selectors ---
    const langToggleButton = document.getElementById('lang-toggle');
    const themeToggleButton = document.getElementById('theme-toggle');
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const floatingContactButton = document.getElementById('floating-contact-btn'); // New
    const typewriterTextElement = document.getElementById('typewriter-text');
    const contactForm = document.getElementById('contact-form');
    const bodyElement = document.body;
    const htmlElement = document.documentElement;
    const currentYearSpan = document.getElementById('current-year');
    const scrollIndicator = document.getElementById('scroll-indicator'); // New
    const header = document.getElementById('main-header'); // New
    const navLinks = document.querySelectorAll('.nav-links a'); // New for highlighting
    const sections = document.querySelectorAll('.main-section'); // New for highlighting

    // --- State Variables ---
    let currentLang = 'fr';
    // Check localStorage for theme preference, default to light if none
    let isDarkMode = localStorage.getItem('theme') === 'dark';

    // --- Language Data (Updated & Expanded) ---
    const translations = {
        'fr': {
            pageTitle: "Romain Jazzar | Portfolio AI & Data",
            navLogo: "RomainJazzar portfolio",
            navAbout: "À Propos",
            navSkills: "Compétences",
            navProjects: "Projets",
            navCV: "CV",
            navContact: "Contact",
            heroName: "Romain Jazzar",
            heroTagline: "Passionné d'IA & Data | Analyste de Données Junior & Développeur Full Stack",
            heroSkillsPrefix: "Compétences clés :",
            heroCvButton: "Télécharger le CV",
            heroContactButton: "Me Contacter",
            aboutTitle: "À Propos de Moi",
            aboutP1: "Suite à une première expérience en développement web full-stack, je me réoriente passionnément vers l'Intelligence Artificielle et la Data Science. Actuellement en première année de Bachelor IA à La Plateforme Marseille, je développe des compétences solides en Python, SQL, analyse de données et machine learning.",
            aboutP2: "Mon objectif est de fusionner ma logique de développeur avec la puissance de l'analyse de données pour construire des solutions intelligentes et contribuer à des projets ayant un impact réel.",
            aboutQuote: "\"Je crois au potentiel des données pour éclairer les décisions et transformer les processus. Mon ambition est de maîtriser ces outils pour devenir un acteur clé de cette transformation.\"",
            aboutP3: "Je suis à la recherche active d'une <strong>alternance de 24 mois en IA ou Data</strong> (Analyst, Scientist, Engineer) à partir de <strong>Septembre 2025</strong> (ou Juillet 2025 si besoin) pour mettre en pratique mes connaissances et m'investir pleinement dans un environnement professionnel stimulant.",
            skillsTitle: "Compétences Techniques",
            skillsDataAiTitle: "Data & AI",
            skillsWebDevTitle: "Web & Software Development",
            projectsTitle: "Projets Techniques",
            project1Title: "Budget Buddy App",
            project1Desc: "Application de bureau pour suivre les dépenses personnelles, avec stockage en base de données et fonctionnalité d'export CSV.",
            project2Title: "Google Data Analytics Capstone",
            project2Desc: "Analyse complète réalisée dans le cadre de la certification Google Data Analytics, incluant la collecte, transformation (SQL), et visualisation de données pour répondre à une problématique business.",
            project3Title: "LinkedIn AI Bot (Prototype)",
            project3Desc: "Prototype d'automatisation locale utilisant Selenium et l'API ChatGPT pour explorer la génération de contenu ou d'interactions sur LinkedIn. (Non destiné à la production)",
            cvTitle: "Mon CV",
            cvDesc: "Consultez mon parcours détaillé et mes expériences. Vous pouvez prévisualiser le CV ci-dessous ou le télécharger directement.",
            cvPreviewError: "Votre navigateur ne supporte pas les iFrames. Vous pouvez télécharger le CV ici.",
            cvDownloadButton: "Télécharger le CV",
            contactTitle: "Contactez-moi",
            contactPromptDirect: "N'hésitez pas à me joindre directement :",
            contactEmailValue1: "romain.jazzar@laplateforme.io", // Keep consistent
            contactEmailValue2: "roman.jazzar@outlook.com", // Keep consistent
            contactPhoneValue: "07 71 02 69 64", // Keep consistent
            contactFormTitle: "Ou envoyez-moi un message :",
            contactNameLabel: "Nom",
            contactEmailLabel: "Email",
            contactMessageLabel: "Message",
            contactSubmitButton: "Envoyer (Simulation)",
            footerMadeWith: "Fait avec ❤️ en HTML/CSS/JS"
        },
        'en': {
            pageTitle: "Romain Jazzar | AI & Data Portfolio",
            navLogo: "RomainJazzar portfolio",
            navAbout: "About",
            navSkills: "Skills",
            navProjects: "Projects",
            navCV: "CV",
            navContact: "Contact",
            heroName: "Romain Jazzar",
            heroTagline: "AI & Data Enthusiast | Junior Data Analyst & Full Stack Developer",
            heroSkillsPrefix: "Key skills:",
            heroCvButton: "Download CV",
            heroContactButton: "Contact Me",
            aboutTitle: "About Me",
            aboutP1: "Following initial experience in full-stack web development, I am passionately pivoting towards Artificial Intelligence and Data Science. Currently in my first year of an AI Bachelor's degree at La Plateforme Marseille, I'm developing strong skills in Python, SQL, data analysis, and machine learning.",
            aboutP2: "My goal is to merge my developer's logic with the power of data analysis to build intelligent solutions and contribute to projects with real-world impact.",
            aboutQuote: "\"I believe in the potential of data to enlighten decisions and transform processes. My ambition is to master these tools to become a key player in this transformation.\"",
            aboutP3: "I am actively seeking a <strong>24-month work-study program (alternance) in AI or Data</strong> (Analyst, Scientist, Engineer) starting <strong>September 2025</strong> (or July 2025 if needed) to apply my knowledge and fully engage in a stimulating professional environment.",
            skillsTitle: "Technical Skills",
            skillsDataAiTitle: "Data & AI",
            skillsWebDevTitle: "Web & Software Development",
            projectsTitle: "Technical Projects",
            project1Title: "Budget Buddy App",
            project1Desc: "Desktop application to track personal expenses, with database storage and CSV export functionality.",
            project2Title: "Google Data Analytics Capstone",
            project2Desc: "Comprehensive analysis performed as part of the Google Data Analytics certification, including data collection, transformation (SQL), and visualization to address a business problem.",
            project3Title: "LinkedIn AI Bot (Prototype)",
            project3Desc: "Local automation prototype using Selenium and the ChatGPT API to explore content generation or interactions on LinkedIn. (Not intended for production)",
            cvTitle: "My CV",
            cvDesc: "Review my detailed background and experience. You can preview the CV below or download it directly.",
            cvPreviewError: "Your browser does not support iFrames. You can download the CV here.",
            cvDownloadButton: "Download CV",
            contactTitle: "Contact Me",
            contactPromptDirect: "Feel free to reach out directly:",
            contactEmailValue1: "romain.jazzar@laplateforme.io", // Keep consistent
            contactEmailValue2: "roman.jazzar@outlook.com", // Keep consistent
            contactPhoneValue: "07 71 02 69 64", // Keep consistent (Format for EN if needed)
            contactFormTitle: "Or send me a message:",
            contactNameLabel: "Name",
            contactEmailLabel: "Email",
            contactMessageLabel: "Message",
            contactSubmitButton: "Send (Simulation)",
            footerMadeWith: "Made with ❤️ using HTML/CSS/JS"
        }
    };

    // --- Typewriter Effect (Simplified - No Deletion) ---
    const typewriterKeywords = [
        "Python", "SQL", "Power BI", "Pandas", "ETL", "Tkinter",
        "Machine Learning", "Data Visualization", "Scikit-learn", "R", "JavaScript"
    ];
    let keywordIndex = 0;
    let charIndex = 0;
    const typeDelay = 100; // Faster typing
    const nextWordDelay = 1800; // Slightly shorter pause

    function typeWriterSimple() {
        if (!typewriterTextElement) return;
        const currentKeyword = typewriterKeywords[keywordIndex];
        if (charIndex < currentKeyword.length) {
            typewriterTextElement.textContent += currentKeyword.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriterSimple, typeDelay);
        } else {
            setTimeout(() => {
                keywordIndex = (keywordIndex + 1) % typewriterKeywords.length;
                charIndex = 0;
                typewriterTextElement.textContent = '';
                typeWriterSimple();
            }, nextWordDelay);
        }
    }

    // --- Language Switching Function ---
    function setLanguage(lang) {
        currentLang = lang;
        htmlElement.setAttribute('lang', lang);

        // Update toggle button appearance
        if (langToggleButton) {
            const flag = lang === 'fr' ? '🇫🇷' : '🇬🇧';
            // const text = lang === 'fr' ? 'Français' : 'English'; // Text is hidden now
            langToggleButton.innerHTML = `<span class="flag-icon">${flag}</span>`;
            langToggleButton.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en Français');
        }

        // Update all elements with data-lang
        const elementsToTranslate = document.querySelectorAll('[data-lang]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang] && translations[lang][key]) {
                const potentiallyHtmlKeys = ['aboutP3']; // Keys that might contain HTML tags
                if (potentiallyHtmlKeys.includes(key)) {
                    element.innerHTML = translations[lang][key];
                } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                     // Handle placeholders - construct key like 'contactNameLabelPlaceholder'
                     const placeholderKey = key + 'Placeholder';
                     if (element.placeholder) {
                        element.placeholder = translations[lang][placeholderKey] || translations[lang][key] || ''; // Use specific or fallback
                     }
                } else if (key === 'pageTitle') {
                    document.title = translations[lang][key];
                } else if (key === 'contactEmailValue1' || key === 'contactEmailValue2' || key === 'contactPhoneValue') {
                     element.textContent = translations[lang][key];
                     // Update mailto/tel links if the element is the anchor itself
                     if (element.tagName === 'A') {
                        if(key === 'contactEmailValue1' || key === 'contactEmailValue2') element.href = 'mailto:' + translations[lang][key];
                        if(key === 'contactPhoneValue') element.href = 'tel:' + translations[lang][key].replace(/\s/g, ''); // Remove spaces for tel link
                     }
                }
                 else {
                    element.textContent = translations[lang][key];
                }
            } else {
                // console.warn(`Translation key not found for language '${lang}': ${key}`); // Optional: Warn if key missing
            }
        });

        // Manually update placeholders if needed (fallback)
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        if(nameInput) nameInput.placeholder = lang === 'fr' ? "Votre nom complet" : "Your full name";
        if(emailInput) emailInput.placeholder = lang === 'fr' ? "Votre adresse email" : "Your email address";
        if(messageInput) messageInput.placeholder = lang === 'fr' ? "Votre message ici..." : "Your message here...";
    }

    // --- Theme Switching Function ---
    function applyTheme(theme) {
        isDarkMode = theme === 'dark'; // Update state first
        if (isDarkMode) {
            bodyElement.classList.add('dark-mode');
            if (themeToggleButton) {
                themeToggleButton.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Sun icon
                themeToggleButton.setAttribute('aria-label', 'Passer au thème clair');
            }
        } else {
            bodyElement.classList.remove('dark-mode');
            if (themeToggleButton) {
                themeToggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Moon icon
                themeToggleButton.setAttribute('aria-label', 'Passer au thème sombre');
            }
        }
        localStorage.setItem('theme', theme); // Save preference
    }

    // --- Scroll Indicator Function ---
    function updateScrollIndicator() {
        if (!scrollIndicator) return;
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        const scrollPercentage = totalScrollHeight <= 0 ? 0 : (currentScroll / totalScrollHeight) * 100;
        scrollIndicator.style.width = `${scrollPercentage}%`;
    }

    // --- Floating Buttons Visibility ---
    function checkScrollForButtons() {
        const scrollY = window.scrollY;
        if (scrollY > 300) { // Show after scrolling 300px
            if (scrollToTopButton) scrollToTopButton.classList.add('visible');
            if (floatingContactButton) floatingContactButton.classList.add('visible');
        } else {
            if (scrollToTopButton) scrollToTopButton.classList.remove('visible');
            if (floatingContactButton) floatingContactButton.classList.remove('visible');
        }
    }

    // --- Section Highlighting on Scroll ---
    const observerOptions = {
        root: null, // relative to viewport
        rootMargin: '0px',
        threshold: 0.5 // 50% of section visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-links a[href="#${id}"]`);

            if (entry.isIntersecting && correspondingLink) {
                // Remove active class from all links first
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to the current link
                correspondingLink.classList.add('active');
            }
            // Optional: Remove active class if element is NOT intersecting
            // else if (correspondingLink) {
            //     correspondingLink.classList.remove('active');
            // }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    // --- Smooth Scroll To Top ---
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- Footer Year ---
    function setFooterYear() {
        if (currentYearSpan) {
            currentYearSpan.textContent = new Date().getFullYear();
        }
    }

    // --- Event Listeners ---
    if (langToggleButton) {
        langToggleButton.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'en' : 'fr';
            setLanguage(newLang);
        });
    }

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            const newTheme = isDarkMode ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

    if (scrollToTopButton) {
        scrollToTopButton.addEventListener('click', scrollToTop);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert(currentLang === 'fr' ? 'Message envoyé (simulation) ! Merci.' : 'Message sent (simulation)! Thank you.');
            contactForm.reset();
        });
    }

    // Scroll related listeners
    window.addEventListener('scroll', () => {
        updateScrollIndicator();
        checkScrollForButtons();
    });


    // --- Initial Setup ---
    setFooterYear();
    applyTheme(isDarkMode ? 'dark' : 'light'); // Apply initial theme based on localStorage or default
    setLanguage(currentLang); // Apply default language text
    if (typewriterTextElement) {
        setTimeout(typeWriterSimple, 1500); // Start typewriter
    }
    checkScrollForButtons(); // Initial check for floating buttons
    updateScrollIndicator(); // Initial indicator state


    // Optional: Mobile Nav Toggle Logic (Example)
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-links'); // Assuming this is the menu to toggle

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // You'll need CSS for .nav-links.active
            // Optional: Change burger icon to 'X'
            const icon = mobileNavToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        // Close mobile menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                 if (navMenu.classList.contains('active')) {
                     navMenu.classList.remove('active');
                     const icon = mobileNavToggle.querySelector('i');
                     if (icon) {
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                     }
                 }
            });
        });
    }

}); // End DOMContentLoaded