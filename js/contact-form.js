document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const replyDiv = document.querySelector('.form__reply');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Send email using EmailJS
        emailjs.send('service_fasipdj', 'template_xly65mk', data)
            .then(function() {
                // Show success message
                replyDiv.style.display = 'block';
                replyDiv.style.opacity = '1';
                replyDiv.classList.add('is-visible');
                form.reset();

                // Hide message after 5 seconds
                setTimeout(() => {
                    replyDiv.style.opacity = '0';
                    replyDiv.classList.remove('is-visible');
                    setTimeout(() => {
                        replyDiv.style.display = 'none';
                    }, 300);
                }, 5000);
            })
            .catch(function(error) {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
            });
    });
});