document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe normalmente
    
    const nombre = document.getElementById('name').value;
    const semestre = document.getElementById('semester').value;
    
    if (nombre && semestre) {
        // Guardamos el nombre en localStorage (opcional, para usarlo en otras páginas)
        localStorage.setItem('nombreUsuario', nombre);
        
        // Redirigimos según el semestre
        window.location.href = `../HTML/semester${semestre}.html`;
    } else {
        alert("Por favor, completa todos los campos.");
    }
});