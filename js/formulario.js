

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    var nombre = document.getElementById('nombres').value;
    
    if(usuario.length == 0) {
      alert('No escribió nada en el campo nombre');
      return;
    }
    
    var apellidos = document.getElementById('apellidos').value;
    if(usuario.length == 0) {
        alert('No escribió nada en el campo apellido');
        return;
    }

    var correo = document.getElementById('correo').value;
    if (correo.length < 6) {
      alert('No escribió nada en el campo correo');
      return;
    }

    this.submit();
  }