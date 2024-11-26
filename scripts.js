document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Simulación de inicio de sesión exitoso
        alert("Inicio de sesión exitoso.");
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
