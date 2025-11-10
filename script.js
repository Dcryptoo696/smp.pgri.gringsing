// Inisialisasi setelah DOM load
document.addEventListener('DOMContentLoaded', function() {
    // Buat Awan (3 awan default)
    const cloudsContainer = document.createElement('div');
    cloudsContainer.classList.add('clouds');
    document.body.appendChild(cloudsContainer);
    for (let i = 0; i < 3; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.style.left = Math.random() * 100 + '%';
        cloudsContainer.appendChild(cloud);
    }

    // Buat Hujan (100 drop random)
    const rainContainer = document.createElement('div');
    rainContainer.classList.add('rain');
    document.body.appendChild(rainContainer);
    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.classList.add('rain-drop');
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 0.5 + 0.5) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        rainContainer.appendChild(drop);
    }

    // Petir Flash (setiap 5-15 detik acak)
    const lightning = document.createElement('div');
    lightning.classList.add('lightning');
    document.body.appendChild(lightning);
    setInterval(() => {
        lightning.classList.add('flash');
        setTimeout(() => lightning.classList.remove('flash'), 500);
    }, Math.random() * 10000 + 5000);

    // Smooth scroll untuk link internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submit (placeholder)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Pesan terkirim! (Integrasikan backend untuk real)');
        });
    });
});