(function() {
    "use strict";

    let sendMessageButton = document.querySelector('.php-email-form button[type="submit"]');
    let sentMessage = document.querySelector('.sent-message');

    sendMessageButton.addEventListener('click', function(event) {
        event.preventDefault();

        let name = document.querySelector('.php-email-form input[name="name"]').value;
        let message = document.querySelector('.php-email-form textarea[name="message"]').value;

        // Display "Message Sent" status
        sentMessage.classList.add('d-block');

        setTimeout(function() {
            // Hide "Message Sent" status after one second
            sentMessage.classList.remove('d-block');

            // Generate whatsapp link, if name is undefined, send message only..
            let encodedMessage = encodeURIComponent((name && name.trim() !== '') ? `My name is ${name}. ${message}` : message);
            let whatsappLink = `https://wa.me/254700206280?text=${encodedMessage}`;

            window.open(whatsappLink, '_blank');
        }, 2000);
    });

})();