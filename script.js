// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Simulate form submission (replace with actual API call)
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('contact-form').reset();
  });