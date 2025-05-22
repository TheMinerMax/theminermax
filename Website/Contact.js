document.addEventListener('DOMContentLoaded', function() {
    const radioButtons = document.querySelectorAll('input[name="howcontacted"]');
    const phoneBox = document.getElementById('phoneBox');
    const textBox = document.getElementById('textBox');
    const emailBox = document.getElementById('emailBox');

    phoneBox.style.display = 'none';
    textBox.style.display = 'none';
    emailBox.style.display = 'none';

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            phoneBox.style.display = 'none';
            textBox.style.display = 'none';
            emailBox.style.display = 'none';

            if (this.value === 'phone') {
                phoneBox.style.display = 'block';
            } else if (this.value === 'text') {
                textBox.style.display = 'block';
            } else if (this.value === 'email') {
                emailBox.style.display = 'block';
            }
        });
    });
});
