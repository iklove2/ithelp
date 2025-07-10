document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Закрытие мобильного меню, если оно открыто
                if (document.querySelector('.mobile-menu-btn').classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
    
    // Мобильное меню
    const mobileMenuBtn = document.createElement('div');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header .container').appendChild(mobileMenuBtn);
    
    function toggleMobileMenu() {
        const nav = document.querySelector('nav');
        mobileMenuBtn.classList.toggle('active');
        nav.classList.toggle('active');
    }
    
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Фиксированная шапка при скролле
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Анимация при прокрутке
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.advantage-item, .service-item, .review, .step');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Инициализация при загрузке
    
    // Обработка формы
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить AJAX-отправку формы
            const formData = new FormData(this);
            
            // Простая имитация отправки
            this.reset();
            alert('Спасибо! Мы скоро с вами свяжемся.');
        });
    }
});