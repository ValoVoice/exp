// script.js

// Mobile menu toggle functionality
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mainNav = document.getElementById('main-nav');

if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
});

// FAQ Accordion Functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Form submission handling
const referralForm = document.getElementById('referralForm');
if (referralForm) {
    referralForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const userId = document.getElementById('user_id').value;
        const referralCode = document.getElementById('referral_code').value;
        
        // Simple validation
        if (!userId || !referralCode) {
            alert('Please fill in both fields');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Processing...';
        submitBtn.disabled = true;
        
        // In a real implementation, you would send this data to your server
        // For now, we'll simulate a successful response
        setTimeout(() => {
            alert(`Referral applied successfully!\nUser ID: ${userId}\nReferral Code: ${referralCode}`);
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Redirect to download page
            window.location.href = '#download';
        }, 1500);
    });
}

// Download button functionality
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Starting download...\nIn a real implementation, this would initiate the download process.');
        
        // Track download event
        console.log('Download button clicked:', this.textContent.trim());
        
        // Redirect to thank you page
        window.location.href = '#download';
    });
});

// Pricing plan selection
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('click', function() {
        // Remove active class from all cards
        document.querySelectorAll('.pricing-card').forEach(c => {
            c.classList.remove('selected');
        });
        
        // Add active class to clicked card
        this.classList.add('selected');
        
        // Get plan name
        const planName = this.querySelector('.pricing-title').textContent;
        console.log('Selected plan:', planName);
    });
});

// Initialize tooltips
document.querySelectorAll('.feature-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        const title = this.parentElement.querySelector('h3').textContent;
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = title;
        document.body.appendChild(tooltip);
        
        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width/2}px`;
        tooltip.style.top = `${rect.top - 40}px`;
        tooltip.style.transform = 'translateX(-50%)';
    });
    
    icon.addEventListener('mouseleave', function() {
        document.querySelectorAll('.tooltip').forEach(t => t.remove());
    });
});

// Back to top button
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'back-to-top';
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});