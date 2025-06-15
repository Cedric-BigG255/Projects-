document.addEventListener('DOMContentLoaded', function() {
    
    // Change navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm', 'bg-light');
            } else {
                navbar.classList.remove('shadow-sm', 'bg-light');
            }
        });
    }

    // Basic form submission alert (for forms without a backend action)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        if (!form.getAttribute('action')) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for subscribing! We will be in touch soon.');
                this.reset();
            });
        }
    });

});