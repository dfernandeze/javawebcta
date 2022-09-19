function validarFormulario() {
    var verificar = true;
    var expRegLetras = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]+$/;
    var expRegNumero = /^[0-9]+$/;
    var usuario = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");

    if (usuario.value.length < 2) {
        alert("El campo usuario no puede quedar vacio.");
        usuario.focus();
        verificar = false;
        return false;
    } else if (contraseña.value === "") {
        alert("La contraseña no puede quedar vacio.");
        contraseña.focus();
        verificar = false;
        return false;
    } else if (!expRegLetras.exec(usuario.value)) {
        alert("Este usuario sólo admite letras.");
        usuario.value = "";
        usuario.focus();
        verificar = false;
        return false;
    } else if (!expRegNumero.exec(contraseña.value)) {
        alert("La contraseña solo admite numeros");
        contraseña.value = "";
        contraseña.focus();
        verificar = false;
        return false;
    } else if (!(contraseña.value === '123')) {
        alert("Contraseña invalida");
        contraseña.value = "";
        contraseña.focus();
        verificar = false;
        return false;
    } else if (!(usuario.value === 'dani')) {
        alert("Usuario invalido.");
        usuario.value = "";
        usuario.focus();
        verificar = false;
        return false;
    }

    if (verificar == true) {
        document.formulario.submit();
    }
}
function limpiarFormulario() {
    document.getElementById("formulario").reset();
}

window.onload = function () {
    var botonLimpiar = document.getElementById("limpiar");
    botonLimpiar.onclick = limpiarFormulario;
    var botonEnviar = document.getElementById("enviar");
    botonEnviar.onclick = validarFormulario;
}