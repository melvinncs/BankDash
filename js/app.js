document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {

            navItems.forEach(el => {
                el.classList.remove('active');
                const link = el.querySelector('.nav-link');
                if (link) link.classList.remove('active');
            });

            this.classList.add('active');
            const clickedLink = this.querySelector('.nav-link');
            if (clickedLink) clickedLink.classList.add('active');
        });
    });

    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            console.log('Searching:', e.target.value);
        });
    }
});