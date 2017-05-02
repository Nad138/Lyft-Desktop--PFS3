var login = document.getElementById("login");
var name = document.getElementById("name");
var email = document.getElementById("email");
var city = document.getElementById("city");
var formu = document.getElementById("formu");
 login.addEventListener("onclick", function(){
   if(formu.style.display===none){
     formu.style.display==block;
   }
 });
 var correcto = /^[A-Z]{1}[a-z]*/;
 function validar(){
   if((!correcto.test(name))|| (!correcto.test(city))){
     

   }
 }
