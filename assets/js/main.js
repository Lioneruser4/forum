// Form alanındaki input ve textarea animasyonu
document.querySelectorAll('.form input, .form textarea').forEach((element) => {
    element.addEventListener('keyup', function (e) {
        const label = this.previousElementSibling;
        if (e.type === 'keyup') {
            if (this.value === '') {
                label.classList.remove('active', 'highlight');
            } else {
                label.classList.add('active', 'highlight');
            }
        } else if (e.type === 'blur') {
            if (this.value === '') {
                label.classList.remove('active', 'highlight');
            } else {
                label.classList.remove('highlight');
            }
        } else if (e.type === 'focus') {
            if (this.value === '') {
                label.classList.remove('highlight');
            } else if (this.value !== '') {
                label.classList.add('highlight');
            }
        }
    });
});

// Tab geçişleri
document.querySelectorAll('.tab a').forEach((tab) => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentElement.classList.add('active');
        Array.from(this.parentElement.parentElement.children).forEach((sibling) => {
            if (sibling !== this.parentElement) sibling.classList.remove('active');
        });
        const target = this.getAttribute('href');
        document.querySelectorAll('.tab-content > div').forEach((content) => {
            content.style.display = content.id === target.substring(1) ? 'block' : 'none';
        });
    });
});

// Gündüz/Gece Modu
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Gündüz Modu' : 'Gece Modu';
});

// Dil değiştirici
const languageToggle = document.getElementById('languageToggle');
const languages = ['Azerbaycan', 'Türkçe', 'Русский', 'English'];
let currentLanguage = 0;

languageToggle.addEventListener('click', () => {
    currentLanguage = (currentLanguage + 1) % languages.length;
    languageToggle.textContent = languages[currentLanguage];
});

// Mobil cihazlar için menü uyarlaması
window.addEventListener('resize', () => {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth < 768) {
        navbar.classList.add('mobile');
    } else {
        navbar.classList.remove('mobile');
    }
});

// İlk yükleme için boyut kontrolü
if (window.innerWidth < 768) {
    document.querySelector('.navbar').classList.add('mobile');
}
