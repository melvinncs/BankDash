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

    const tabs = document.querySelectorAll('.setting-tab');
    const contents = {
        'edit-profile': document.getElementById('edit-profile'),
        'preferences': document.getElementById('preferences'),
        'security': document.getElementById('security')
    };

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                
                tabs.forEach(t => t.classList.remove('active'));
                
                tab.classList.add('active');

                Object.values(contents).forEach(content => {
                    if (content) content.classList.add('hidden');
                });

                const tabName = tab.getAttribute('data-tab');
                if (contents[tabName]) {
                    contents[tabName].classList.remove('hidden');
                }
            });
        });
    }

    const toggleSwitches = document.querySelectorAll('.toggle-switch');
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggle.classList.toggle('active');
        });
    });

    const saveButton = document.querySelector('.btn-save');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            alert('Settings saved successfully!');
        });
    }

    const menu = document.querySelector(".mobile-menu");
    const sidebar = document.querySelector(".sidebar");

    const overlay = document.createElement("div");
    overlay.id = "sidebar-overlay";
    document.body.appendChild(overlay);

    menu.addEventListener("click", () => {
        sidebar.classList.toggle("show");
        overlay.classList.toggle("show");
    });
    overlay.addEventListener("click", () => {
        sidebar.classList.remove("show");
        overlay.classList.remove("show");
    });
});