const btnGuardar = document.querySelector('#btnGuardar');
var verificar = true;
const validarFormulario = e =>{
    e.preventDefault();
    const nombref = document.querySelector("#nombre")
    const apellidof = document.querySelector("#apellido").value
    const nombre = validarNombreApellido(nombref.value);
    const apellido = validarNombreApellido(apellidof);
    const telefono = validarTelefono();


    if(!nombre){
        document.querySelector('.nombre').style.display = 'block'
    }else{
        document.querySelector('.nombre').style.display = 'none'
    }
    if(!apellido){
        document.querySelector('.apellido').style.display = 'block'
    }else{
        document.querySelector('.apellido').style.display = 'none'
    }
    if(!telefono){
        document.querySelector('.telefono').style.display = 'block'
    }else{
        document.querySelector('.telefono').style.display = 'none'
    }



    if (nombre && apellido && telefono) {
        document.formulario.submit();
    }
}

const validarTelefono = e =>{
    const telefono = document.querySelector('#telefono');
    const expRegTelefono = /^\(?(\d{4})\)?(\d{3})?(\d{3})$/;
        if (!expRegTelefono.exec(telefono.value)) {
            return false;
        }
        return true;
}
const validarNombreApellido = texto =>{
        if (texto.length < 4) {
            return false;
        }
        return true;
}



btnGuardar.addEventListener('click',validarFormulario)