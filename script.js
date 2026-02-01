// Smooth Scrolling for Category Links
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

// Simple Search Functionality
const searchBox = document.getElementById('searchBox');
if (searchBox) {
    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const explanationCards = document.querySelectorAll('.explanation-card');
        
        if (searchTerm === '') {
            // Show all cards if search is empty
            explanationCards.forEach(card => {
                card.style.display = 'block';
            });
        } else {
            // Filter cards based on search
            explanationCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                if (cardText.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });
}

// Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const topic = document.getElementById('topic').value.trim();
        const category = document.getElementById('category').value;
        const message = document.getElementById('message').value.trim();
        
        // Validate Name
        if (name === "") {
            alert("Name cannot be empty");
            document.getElementById('name').focus();
            return false;
        }
        
        // Validate name contains only letters and spaces
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(name)) {
            alert("Name should contain only letters and spaces");
            document.getElementById('name').focus();
            return false;
        }
        
        // Validate Email
        if (email === "") {
            alert("Email cannot be empty");
            document.getElementById('email').focus();
            return false;
        }
        
        // Validate email format
        const atpos = email.indexOf("@");
        const dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            alert("Invalid email format. Please enter a valid email address");
            document.getElementById('email').focus();
            return false;
        }
        
        // Validate Topic
        if (topic === "") {
            alert("Topic cannot be empty");
            document.getElementById('topic').focus();
            return false;
        }
        
        // Validate topic length (should be at least 3 characters)
        if (topic.length < 3) {
            alert("Topic should be at least 3 characters long");
            document.getElementById('topic').focus();
            return false;
        }
        
        // Validate Category
        if (category === "") {
            alert("Please select a category");
            document.getElementById('category').focus();
            return false;
        }
        
        // If all validations pass, submit the form
        alert("Form submitted successfully! Thank you for your submission.");
        this.submit();
    });
}

console.log('Curiosity Corner loaded!');
