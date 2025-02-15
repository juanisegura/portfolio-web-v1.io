document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("vxHWpa72aXXTaGqDJ");

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        const params = {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        };

        emailjs.send("service_joporla", "template_flmogi9", params)
            .then(function(response) {
                alert("Mensaje enviado correctamente. Gracias por contactarme.");
                document.getElementById("contact-form").reset();
            }, function(error) {
                alert("Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.");
            });
    });
});
