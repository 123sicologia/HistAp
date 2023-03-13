const registerUser = () => {
    // Recopila los datos del formulario de registro
    const username = document.getElementById('username').value;
    const userlastname = document.getElementById('userlastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Envía los datos al servidor a través de una solicitud HTTP
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        userlastname,
        email,
        password
      })
    })
    .then(response => response.json())
    .then(data => {
      // Maneja la respuesta del servidor
      console.log(data);
    })
    .catch(error => {
      // Maneja los errores de la solicitud
      console.error(error);
    });
  }
  // Selecciona el botón de registro
const registerButton = document.getElementById('registerButton');

// Agrega un event listener para el evento 'click'
registerButton.addEventListener('click', function() {
  // Llama a la función registerUser cuando se haga clic en el botón
  registerUser();
});

  