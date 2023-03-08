//Variables
    document.getElementById("boton").onclick = function (){
    document.getElementById("demo").innerHTML="Estudios secundarios completos";
    
}

    document.getElementById("boton1").onclick = function (){
    document.getElementById("demo").innerHTML="Preventista - Empleado bancario";
}           

    document.getElementById("boton2").onclick = function (){
    document.getElementById("demo").innerHTML="Formulario de Contacto";
}
   





//funciones
   
boton.addEventListener('click', ExperienciaLaboral);
document.addEventListener('DOMContentLoaded',ExperienciaLaboral); 

boton.addEventListener('click',Títulos);
document.addEventListener('DOMContentLoaded',Títulos);

boton.addEventListener('click',FormulariodeConctacto);
document.addEventListener('DOMContentLoaded',FormulariodeConctacto);
