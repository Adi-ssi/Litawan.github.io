emailjs.init('KzkHSmgvP1yFkxwFN');

const btn = document.getElementById('button');

document.getElementById('contact-form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_hpi8948';
    const templateID = 'template_y5bqdtq';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Message';
        alert('Your message has been sent successfully!');
      }, (err) => {
        btn.value = 'Send Message';
        alert('Oops! Something went wrong. Please try again.');
        console.error('EmailJS error:', err);
      });
  });
