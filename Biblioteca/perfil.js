/* =================================================
           FOTO DE PERFIL
           ================================================= */

        const fotoUsuario = document.getElementById("fotoUsuario");
        const imagenPerfil = document.getElementById("imagenPerfil");
        const iconoFoto = document.getElementById("iconoFoto");

        const quitarFoto = document.getElementById("quitarFoto");

quitarFoto.addEventListener("click", function () {

    // Eliminar la foto guardada
    localStorage.removeItem("fotoPerfil");

    // Vaciar la imagen
    imagenPerfil.src = "";

    // Ocultar la imagen
    imagenPerfil.style.display = "none";

    // Volver a mostrar la personita gris
    iconoFoto.style.display = "block";

});

        fotoUsuario.addEventListener("change", function () {

            const archivo = this.files[0];

            if (!archivo) {
                return;
            }

            const lector = new FileReader();

            lector.onload = function (evento) {

                imagenPerfil.src = evento.target.result;

                imagenPerfil.style.display = "block";

                iconoFoto.style.display = "none";

                localStorage.setItem(
                    "fotoPerfil",
                    evento.target.result
                );

            };

            lector.readAsDataURL(archivo);

        });


        /* =================================================
           MODAL DE MATERIAS
           ================================================= */

        const modalMaterias =
            document.getElementById("modalMaterias");

        const botonMaterias =
            document.getElementById("botonMaterias");

        const cerrarMaterias =
            document.getElementById("cerrarMaterias");

        botonMaterias.addEventListener("click", function () {

            modalMaterias.style.display = "flex";

        });

        cerrarMaterias.addEventListener("click", function () {

            modalMaterias.style.display = "none";

        });


        /* =================================================
           MODAL DE CURSOS
           ================================================= */

        const modalCursos =
            document.getElementById("modalCursos");

        const botonCursos =
            document.getElementById("botonCursos");

        const cerrarCursos =
            document.getElementById("cerrarCursos");

        botonCursos.addEventListener("click", function () {

            modalCursos.style.display = "flex";

        });

        cerrarCursos.addEventListener("click", function () {

            modalCursos.style.display = "none";

        });


        /* =================================================
           GUARDAR MATERIAS
           ================================================= */

        const guardarMaterias =
            document.getElementById("guardarMaterias");

        guardarMaterias.addEventListener("click", function () {

            const seleccionadas =
                document.querySelectorAll(
                    "#modalMaterias input[type='checkbox']:checked"
                );

            const materias = [];

            seleccionadas.forEach(function (materia) {

                materias.push(materia.value);

            });

            localStorage.setItem(
                "materiasAsignadas",
                JSON.stringify(materias)
            );

            modalMaterias.style.display = "none";

            actualizarTextoMaterias();

        });


        /* =================================================
           GUARDAR CURSOS
           ================================================= */

        const guardarCursos =
            document.getElementById("guardarCursos");

        guardarCursos.addEventListener("click", function () {

            const seleccionados =
                document.querySelectorAll(
                    "#modalCursos input[type='checkbox']:checked"
                );

            const cursos = [];

            seleccionados.forEach(function (curso) {

                cursos.push(curso.value);

            });

            localStorage.setItem(
                "cursosAsignados",
                JSON.stringify(cursos)
            );

            modalCursos.style.display = "none";

            actualizarTextoCursos();

        });


        /* =================================================
           MOSTRAR MATERIAS SELECCIONADAS
           ================================================= */

        function actualizarTextoMaterias() {

            const boton =
                document.getElementById("botonMaterias");

            const materiasGuardadas =
                JSON.parse(
                    localStorage.getItem("materiasAsignadas")
                ) || [];

            const texto =
                boton.querySelector("small");

            if (materiasGuardadas.length > 0) {

                texto.textContent =
                    materiasGuardadas.join(", ");

            } else {

                texto.textContent =
                    "Seleccionar materias";

            }

        }


        /* =================================================
           MOSTRAR CURSOS SELECCIONADOS
           ================================================= */

        function actualizarTextoCursos() {

            const boton =
                document.getElementById("botonCursos");

            const cursosGuardados =
                JSON.parse(
                    localStorage.getItem("cursosAsignados")
                ) || [];

            const texto =
                boton.querySelector("small");

            if (cursosGuardados.length > 0) {

                texto.textContent =
                    cursosGuardados.join(", ");

            } else {

                texto.textContent =
                    "Seleccionar cursos";

            }

        }


        /* =================================================
           GUARDAR CAMBIOS
           ================================================= */

        document
            .getElementById("guardarCambios")
            .addEventListener("click", function () {

                const nombre =
                    document.getElementById(
                        "nombreApellido"
                    ).value;

                const correo =
                    document.getElementById(
                        "correoElectronico"
                    ).value;

                const telefono =
                    document.getElementById(
                        "numeroTelefono"
                    ).value;

                const cargo =
                    document.getElementById(
                        "cargo"
                    ).value;


                localStorage.setItem(
                    "nombreApellido",
                    nombre
                );

                localStorage.setItem(
                    "correoElectronico",
                    correo
                );

                localStorage.setItem(
                    "numeroTelefono",
                    telefono
                );

                localStorage.setItem(
                    "cargo",
                    cargo
                );


                alert("¡Cambios guardados correctamente!");

            });


        /* =================================================
           CERRAR MODALES AL HACER CLIC AFUERA
           ================================================= */

        window.addEventListener("click", function (evento) {

            if (evento.target === modalMaterias) {

                modalMaterias.style.display = "none";

            }

            if (evento.target === modalCursos) {

                modalCursos.style.display = "none";

            }

        });