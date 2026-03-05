// BankDash Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header notification bell animation
    const bellIcon = document.querySelector('.fa-bell');
    if (bellIcon) {
        setInterval(() => {
            bellIcon.style.transform = 'rotate(15deg)';
            setTimeout(() => {
                bellIcon.style.transform = 'rotate(0deg)';
            }, 200);
        }, 5000);
    }

    // Credit card hover effect enhancement
    const creditCards = document.querySelectorAll('.credit-card');
    creditCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Form validation for Add Card
    const addCardForm = document.querySelector('.add-card-section form');
    if (addCardForm) {
        addCardForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            const cardNumber = this.querySelector('input[placeholder="**** **** **** ****"]');
            const cardName = this.querySelector('input[value="My Cards"]');
            
            if (cardNumber && cardNumber.value.trim() === '') {
                alert('Please enter card number');
                return;
            }
            
            alert('Card added successfully! (Demo)');
        });
    }

    // Setting items hover effect
    const settingItems = document.querySelectorAll('.setting-item');
    settingItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
            this.style.padding = '1rem';
            this.style.margin = '-1rem -1rem 0 -1rem';
            this.style.borderRadius = '12px';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.padding = '';
            this.style.margin = '';
            this.style.borderRadius = '';
        });
    });

    // Responsive table handling
    function handleTableResponsive() {
        const tables = document.querySelectorAll('.table');
        tables.forEach(table => {
            const wrapper = table.parentElement;
            if (window.innerWidth < 768 && !wrapper.classList.contains('table-responsive')) {
                wrapper.classList.add('table-responsive');
            } else if (window.innerWidth >= 768 && wrapper.classList.contains('table-responsive')) {
                wrapper.classList.remove('table-responsive');
            }
        });
    }

    // Run on load and resize
    handleTableResponsive();
    window.addEventListener('resize', handleTableResponsive);

    // Interactive chart placeholder (demo)
    const chartPlaceholder = document.querySelector('.pie-chart i');
    if (chartPlaceholder) {
        chartPlaceholder.addEventListener('mouseenter', function() {
            this.style.color = '#0d6efd';
            this.style.transition = 'color 0.3s';
        });
        
        chartPlaceholder.addEventListener('mouseleave', function() {
            this.style.color = '#e9ecef';
        });
    }

    console.log('BankDash application loaded successfully');
});