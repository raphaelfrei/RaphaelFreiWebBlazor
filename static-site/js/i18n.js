(function() {
    let currentLang = localStorage.getItem('lang') || navigator.language.substring(0, 2) || 'en';
    const supportedLangs = ['en', 'pt', 'es'];
    if (!supportedLangs.includes(currentLang)) currentLang = 'en';
    
    let translations = {};

    async function loadTranslations() {
        try {
            const res = await fetch('/data/translations.json');
            translations = await res.json();
            applyTranslations();
            updateActiveLinks();
        } catch (e) {
            console.error('Failed to load translations', e);
        }
    }

    function applyTranslations() {
        const langData = translations[currentLang] || translations['en'];
        if (!langData) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (langData[key]) {
                el.textContent = langData[key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (langData[key]) {
                el.innerHTML = langData[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (langData[key]) {
                el.setAttribute('placeholder', langData[key]);
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (langData[key]) {
                document.title = langData[key];
            }
        });
    }

    function updateActiveLinks() {
        document.querySelectorAll('.lang-link').forEach(el => {
            el.classList.remove('active');
            if (el.id === `lang-${currentLang}`) {
                el.classList.add('active');
            }
        });
    }

    window.setLanguage = function(lang) {
        if (!supportedLangs.includes(lang)) return;
        currentLang = lang;
        localStorage.setItem('lang', lang);
        applyTranslations();
        updateActiveLinks();
    };

    document.addEventListener('DOMContentLoaded', loadTranslations);
})();
