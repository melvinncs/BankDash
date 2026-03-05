// Active menu handling
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active from all
            navItems.forEach(el => {
                el.classList.remove('active');
                const link = el.querySelector('.nav-link');
                if (link) link.classList.remove('active');
            });

            // Add active to clicked
            this.classList.add('active');
            const clickedLink = this.querySelector('.nav-link');
            if (clickedLink) clickedLink.classList.add('active');
        });
    });

    // Set Credit Cards as default active
    const creditCardsItem = document.querySelector('.nav-item:nth-child(5)');
    if (creditCardsItem) {
        creditCardsItem.classList.add('active');
        const link = creditCardsItem.querySelector('.nav-link');
        if (link) link.classList.add('active');
    }

    // Form submission
    const addCardBtn = document.querySelector('.btn-add-card');
    if (addCardBtn) {
        addCardBtn.addEventListener('click', function () {
            alert('Card added successfully!');
        });
    }

    // Search
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            console.log('Searching:', e.target.value);
        });
    }
});