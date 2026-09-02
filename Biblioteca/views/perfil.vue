<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Perfil de Usuario</title>

    <link rel="stylesheet" href="style.css">

    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    >
</head>

<body>

    <!-- =================================================
         BARRA LATERAL
         ================================================= -->

    <aside class="sidebar">

        <a href="inicio.html" class="sidebar-icon" title="Inicio">
            <i class="fa-solid fa-house"></i>
        </a>

        <a href="index.html" class="sidebar-icon biblioteca-icon" title="Biblioteca">
            <i class="fa-solid fa-bars"></i>
        </a>

        <a href="Perfil.html" class="sidebar-icon perfil-icon" title="Perfil">
            <i class="fa-solid fa-user"></i>
        </a>

    </aside>


    <!-- =================================================
         CONTENIDO PRINCIPAL
         ================================================= -->

    <main class="main-content">

        <div class="perfil-contenedor">

            <h1>
                Información Personal
            </h1>


            <!-- =================================================
                 INFORMACIÓN DEL USUARIO
                 ================================================= -->

            <div class="perfil-superior">


                <!-- FOTO DE PERFIL -->

                <div class="foto-seccion">

                    <label for="fotoUsuario" class="foto-perfil">

                        <i
                            class="fa-solid fa-user"
                            id="iconoFoto"
                        ></i>

                        <img
                            id="imagenPerfil"
                            src=""
                            alt="Foto de perfil"
                        >

                    </label>


                    <input
                        type="file"
                        id="fotoUsuario"
                        accept="image/*"
                    >


                    <p>
                        Haz clic para agregar una foto
                    </p>


                    <button
                        type="button"
                        class="boton-quitar-foto"
                        id="quitarFoto"
                    >

                        <i class="fa-solid fa-trash"></i>

                        Quitar foto

                    </button>

                </div>


                <!-- DATOS DEL USUARIO -->

                <div class="datos-usuario">


                    <!-- NOMBRE -->

                    <div class="campo-perfil">

                        <label for="nombreApellido">
                            Nombre y Apellido
                        </label>

                        <div class="input-perfil">

                            <i class="fa-solid fa-user"></i>

                            <input
                                type="text"
                                id="nombreApellido"
                                placeholder="Ingrese su nombre y apellido"
                            >

                        </div>

                    </div>


                    <!-- CORREO -->

                    <div class="campo-perfil">

                        <label for="correoElectronico">
                            Correo electrónico
                        </label>

                        <div class="input-perfil">

                            <i class="fa-solid fa-envelope"></i>

                            <input
                                type="email"
                                id="correoElectronico"
                                placeholder="Ingrese su correo electrónico"
                            >

                        </div>

                    </div>


                    <!-- TELÉFONO -->

                    <div class="campo-perfil">

                        <label for="numeroTelefono">
                            Número de teléfono
                        </label>

                        <div class="input-perfil">

                            <i class="fa-solid fa-phone"></i>

                            <input
                                type="tel"
                                id="numeroTelefono"
                                placeholder="Ingrese su número de teléfono"
                            >

                        </div>

                    </div>


                    <!-- CARGO -->

                    <div class="campo-perfil">

                        <label for="cargo">
                            Cargo
                        </label>

                        <div class="input-perfil">

                            <i class="fa-solid fa-briefcase"></i>

                            <select id="cargo">

                                <option value="">
                                    Seleccione un cargo
                                </option>

                                <option value="docente">
                                    Docente
                                </option>

                                <option value="gestion">
                                    Equipo de gestión
                                </option>

                            </select>

                        </div>

                    </div>

                </div>

            </div>


            <!-- =================================================
                 ASIGNACIONES
                 ================================================= -->

            <div class="asignaciones">


                <!-- MATERIAS -->

                <button
                    type="button"
                    class="boton-asignacion"
                    id="botonMaterias"
                >

                    <i class="fa-solid fa-book"></i>

                    <span>
                        Materias asignadas
                    </span>

                    <small>
                        Seleccionar materias
                    </small>

                </button>


                <!-- CURSOS -->

                <button
                    type="button"
                    class="boton-asignacion"
                    id="botonCursos"
                >

                    <i class="fa-solid fa-school"></i>

                    <span>
                        Cursos asignados
                    </span>

                    <small>
                        Seleccionar cursos
                    </small>

                </button>

            </div>


            <!-- =================================================
                 GUARDAR PERFIL COMPLETO
                 ================================================= -->

            <div class="guardar-perfil">

                <button
                    type="button"
                    class="boton-guardar-perfil"
                    id="guardarCambios"
                >

                    <i class="fa-solid fa-floppy-disk"></i>

                    Guardar cambios

                </button>

            </div>

        </div>

    </main>


    <!-- =================================================
         MODAL DE MATERIAS
         ================================================= -->

    <div
        class="modal-perfil"
        id="modalMaterias"
    >

        <div class="modal-contenido-perfil">


            <!-- CERRAR -->

            <button
                type="button"
                class="cerrar-modal"
                id="cerrarMaterias"
            >

                <i class="fa-solid fa-xmark"></i>

            </button>


            <h2>
                Materias asignadas
            </h2>


            <p>
                Seleccione las materias que tiene asignadas.
            </p>


            <!-- LISTA DE MATERIAS -->

            <div class="lista-opciones">


                <label>

                    <input
                        type="checkbox"
                        value="Matemática"
                    >

                    Matemática

                </label>


                <label>

                    <input
                        type="checkbox"
                        value="Lengua"
                    >

                    Lengua

                </label>


                <label>

                    <input
                        type="checkbox"
                        value="Historia"
                    >

                    Historia

                </label>


                <label>

                    <input
                        type="checkbox"
                        value="Geografía"
                    >

                    Geografía

                </label>


                <label>

                    <input
                        type="checkbox"
                        value="Biología"
                    >

                    Biología

                </label>


                <label>

                    <input
                        type="checkbox"
                        value="Física"
                    >

                    Física

                </label>


                <label>

                    <input
                        type="checkbox"
                        value="Química"
                    >

                    Química

                </label>


                <label>

                    <input
                        type="checkbox"
                        value="Inglés"
                    >

                    Inglés

                </label>

            </div>


            <!-- GUARDAR MATERIAS -->

            <div class="guardar-perfil">

                <button
                    type="button"
                    class="boton-guardar-perfil"
                    id="guardarMaterias"
                >

                    <i class="fa-solid fa-floppy-disk"></i>

                    Guardar cambios

                </button>

            </div>

        </div>

    </div>


    <!-- =================================================
         MODAL DE CURSOS
         ================================================= -->

    <div
        class="modal-perfil"
        id="modalCursos"
    >

        <div class="modal-contenido-perfil">


            <!-- CERRAR -->

            <button
                type="button"
                class="cerrar-modal"
                id="cerrarCursos"
            >

                <i class="fa-solid fa-xmark"></i>

            </button>


            <h2>
                Cursos asignados
            </h2>


            <p>
                Seleccione los cursos a los que enseña.
            </p>


            <!-- LISTA DE CURSOS -->

            <div class="lista-opciones">


                <label>

                    <input
                        type="checkbox"
                        value="1° A"
                    >

                    1°

                </label>


                <label>

                    <input
                        type="checkbox"
                        value="2° A"
                    >

                    2°

                </label>


                <label>

                    <input
                        type="checkbox"
                        value="3° A"
                    >

                    3°

                </label>


                <label>

                    <input
                        type="checkbox"
                        value="4° A"
                    >

                    4°

                </label>

            </div>


            <!-- GUARDAR CURSOS -->

            <div class="guardar-perfil">

                <button
                    type="button"
                    class="boton-guardar-perfil"
                    id="guardarCursos"
                >

                    <i class="fa-solid fa-floppy-disk"></i>

                    Guardar cambios

                </button>

            </div>

        </div>

    </div>


    <!-- =================================================
         JAVASCRIPT
         ================================================= -->

    <script src="perfil.js"></script>

</body>

</html>