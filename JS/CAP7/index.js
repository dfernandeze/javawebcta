const formulario = document.querySelector('#formulario');
formulario.nombre.focus();
//FUNCIONRS
const validacion = () =>{
    if(formulario.nombre.value == '' 
    || formulario.apellido.value == '' 
    || formulario.pass.value == ''){
        alert('Favor completar todos los campos');
        return false;
    }
}