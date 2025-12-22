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

// Contact form submission
const contactForm = document.querySelector('.contact-box form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    //Get form values
    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    const messageInput = this.querySelector('textarea');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Validate inputs
    if (name === '') {
        alert('Please enter your name');
        nameInput.focus();
        return;
    }

    if (email === '') {
        alert('Please enter your email');
        emailInput.focus();
        return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        emailInput.focus();
        return;
    }

    if (message === '') {
        alert('Please enter a message');
        messageInput.focus();
        return;
    }

    // If all validation passes, show success message
    alert(`Thank you, ${name}! Your message has been sent successfuly.`);

    // Log the data (you can send this to a server later)
    console.log('Form submitted with:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    //Clear the form
    this.reset();
})