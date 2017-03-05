function translate(){
  var title=document.getElementById("form-signin-heading");
  var email= document.getElementById("inputEmail");
  var password=document.getElementById("inputPassword");
  var remember=document.getElementsByTagName("span")[0];
  var button= document.getElementsByClassName("btn")[0];
  title.innerHTML= "Por favor inicia sesión";
  email.placeholder= "Correo electrónico";
  password.placeholder="Contraseña";
  remember.innerHTML="Recordar datos";
  button.innerHTML="Iniciar Sesión";
}
translate();
function mostrar(){
  var mail=document.getElementById("inputEmail").value;
  var password=document.getElementById("inputPassword").value;
  var resultado= "el correo es"+ " " + mail +"<br> <br>" + "la clave ingresada es " +  password;
  ver.innerHTML=resultado;
}
