function guardarUsuario() {
    var username = document.getElementById('username').value;
    alert('Hola, ' + username + '!'); // Esto es solo un ejemplo, puedes realizar cualquier acción con el nombre de usuario
    
    // Ocultar la ventana emergente
    document.getElementById('popup').style.display = 'none';
}