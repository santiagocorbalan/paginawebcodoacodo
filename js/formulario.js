function enviarFormulario(){
  var form = document.form; 
  if(form.nombre.value==0){
    alert("El campo Nombre está vacio");
    form.nombre.value="";
    form.nombre.focus();
    return false;
  }
  if(form.apellido.value==0){
    alert("El campo Apellido está vacio");
    form.apellido.value="";
    form.apellido.focus();
    return false;}

  if(form.correo.value==0){
      alert("El campo Correo está vacio");
      form.correo.value="";
      form.correo.focus();
      return false;
      }
  
  if (form.mensaje.value ==0)
{
  alert("El campo de mensaje está vacio");
  form.mensaje.value = "";
  form.mensaje.focus();
  return false;
}

if(form.mensaje.value == 0 && form.correo.value == 0 && form.apellido.value ==0 && form.nombre.value==0){
  alert("Por favor complete los campos");
}

alert("Datos enviados con exito");
form.submit();
}


/* var form = document.getElementById('formulario');
form.addEventListener('submit', function(evt){
    console.log
}) */