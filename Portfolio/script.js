document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simple success message
    document.getElementById('msg').textContent = "Thank you! Your message has been sent.";
    this.reset();
});
