// Get all navigation links inside .nav-items
const navLinks = document.querySelectorAll('.nav-items a');

// Add click event to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default jump
        
        // Get the target section ID from href
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Smooth scroll to the section
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});