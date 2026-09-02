<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca</title>

    <link rel="stylesheet" href="style.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
</head>

<body>
    <aside class="sidebar">
        <a href="inicio.html" class="sidebar-icon" title="Inicio">
            <i class="fa-solid fa-house"></i>
        </a>

        <a href="index.html" class="sidebar-icon biblioteca-icon" title="Biblioteca">
            <i class="fa-solid fa-bars"></i>
        </a>

        <a href="perfil.html" class="sidebar-icon perfil-icon" title="Perfil">
            <i class="fa-solid fa-user"></i>
        </a>
    </aside>

    <!-- Contenido principal -->
    <main class="main-content">
        <div class="encabezado">
            <h1 class="title">Biblioteca</h1>
            <p class="subtitulo">
                Seleccioná una sección para consultar la información.
            </p>
        </div>

        <!-- Opciones de la biblioteca -->
        <section class="opciones">

            <!-- Historial -->
            <a href="historial.html" class="opcion">
                <div class="icono-circular">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </div>

                <span>Historial</span>
            </a>


            <!-- Observaciones -->
            <a href="observaciones.html" class="opcion">
                <div class="icono-circular">
                    <i class="fa-solid fa-note-sticky"></i>
                </div>

                <span>Observaciones</span>
            </a>


            <!-- Registro de asistencias -->
            <a href="registro.html" class="opcion">
                <div class="icono-circular">
                    <i class="fa-solid fa-clipboard-check"></i>
                </div>

                <span>Registro de Asistencias</span>
            </a>

        </section>

    </main>

    <footer class="footer">
        <p>© 2026 Biblioteca · Escuela ProA La Falda</p>
    </footer>

</body>
</html>