document.addEventListener('DOMContentLoaded', () => {

    /* 1. MOSTRAR / OCULTAR CONTRASEÑA */
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    
    passwordInputs.forEach(input => {
        input.addEventListener('dblclick', () => { // Con doble clic cambia el tipo
            if (input.type === 'password') {
                input.type = 'text';
                input.style.borderColor = '#10b981'; // Verde si es visible
            } else {
                input.type = 'password';
                input.style.borderColor = '#d1d5db';
            }
        });
    });

    /* 2. VALIDACIÓN DEL FORMULARIO DE LOGIN*/
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue
            
            const identifier = document.getElementById('identificador').value;
            const password = document.getElementById('password').value;

            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }

            alert(`¡Bienvenido, ${identifier}! Iniciando sesión...`);
        });
    }

    /* 3. SIMULACIÓN DE REGISTRO */
    const registroForm = document.querySelector('form[action="/procesar_registro"]');
    if (registroForm) {
        registroForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const pass = registroForm.querySelector('input[name="password"]').value;
            const confirmPass = registroForm.querySelector('input[name="confirm_password"]').value;

            if (pass !== confirmPass) {
                alert('Las contraseñas no coinciden. Inténtalo de nuevo.');
                return;
            }

            alert('Registro exitoso. Revisa tu correo para confirmar.');
            window.location.href = 'iniciosesion.html'; // Redirigir al login
        });
    }

    /* 4. MÓDULO DE REPARACIÓN (Pág. Principal)*/
    const repairForm = document.querySelector('.repair-form');
    if (repairForm) {
        repairForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const dispositivo = document.getElementById('tipo-dispositivo').value;
            if (dispositivo === "Selecciona un dispositivo") {
                alert('Por favor, selecciona qué equipo quieres reparar.');
                return;
            }

            alert('¡Solicitud enviada! Pronto recibirás un correo con el diagnóstico inicial.');
            repairForm.reset(); // Limpiar el formulario
        });
    }
});
