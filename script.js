function iniciarSesion() {

    let nombre = document.getElementById("nombre").value;
    let contraseña = document.getElementById("contraseña").value;

    if (nombre == "" || contraseña == "") {
        document.getElementById("mensaje").innerHTML = "Completá todos los campos";
    } else {
        document.getElementById("mensaje").innerHTML = "Inicio de sesión correcto";
    }

}