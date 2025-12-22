document.addEventListener('DOMContentLoaded', function () {
    // Script para o formulário de contato (Simulação)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve por e-mail.');
            contactForm.reset();
        });
    }

    // Animações simples de entrada
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});