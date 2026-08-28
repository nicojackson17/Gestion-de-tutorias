// =====================================================
// HISTORIAL DE TUTORÍAS
// =====================================================


// Obtener los registros guardados

let tutorias = JSON.parse(
    localStorage.getItem("tutorias")
) || [];


// Fecha que estamos visualizando

let fechaActual = new Date();


// Elementos del HTML

const mesActual = document.getElementById("mes-actual");

const historialBody = document.getElementById("historial-body");

const sinRegistros = document.getElementById("sin-registros");

const botonAnterior = document.getElementById("mes-anterior");

const botonSiguiente = document.getElementById("mes-siguiente");



// =====================================================
// NOMBRES DE LOS MESES
// =====================================================

const nombresMeses = [

    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"

];



// =====================================================
// MOSTRAR MES
// =====================================================

function mostrarMes() {

    const mes = nombresMeses[
        fechaActual.getMonth()
    ];

    const año = fechaActual.getFullYear();


    mesActual.textContent = `${mes} ${año}`;

}



// =====================================================
// MOSTRAR TUTORÍAS
// =====================================================

function mostrarTutorias() {


    historialBody.innerHTML = "";


    const mesSeleccionado =
        fechaActual.getMonth();

    const añoSeleccionado =
        fechaActual.getFullYear();



    // Filtrar tutorías del mes seleccionado

    const tutoriasDelMes = tutorias.filter(tutoria => {

        const fecha = new Date(
            tutoria.fecha + "T00:00:00"
        );

        return (
            fecha.getMonth() === mesSeleccionado &&
            fecha.getFullYear() === añoSeleccionado
        );

    });



    // Si no hay registros

    if (tutoriasDelMes.length === 0) {

        sinRegistros.style.display = "block";

        return;

    }


    sinRegistros.style.display = "none";



    // Crear cada fila

    tutoriasDelMes.forEach(tutoria => {


        const fila =
            document.createElement("tr");


        // Convertir fecha

        const fecha =
            new Date(
                tutoria.fecha + "T00:00:00"
            );


        const fechaFormateada =
            fecha.toLocaleDateString("es-AR");


        // Calcular porcentaje

        const porcentaje =
            Math.round(
                (tutoria.presentes /
                tutoria.convocados) * 100
            );



        fila.innerHTML = `

            <td>
                ${fechaFormateada}
            </td>

            <td>
                ${tutoria.motivo}
            </td>

            <td>
                ${tutoria.presentes}/${tutoria.convocados}
            </td>

            <td>

                <span class="porcentaje">
                    ${porcentaje}%
                </span>

            </td>

        `;


        historialBody.appendChild(fila);

    });

}



// =====================================================
// CAMBIAR AL MES ANTERIOR
// =====================================================

botonAnterior.addEventListener(
    "click",
    function () {

        fechaActual.setMonth(
            fechaActual.getMonth() - 1
        );

        mostrarMes();

        mostrarTutorias();

    }
);



// =====================================================
// CAMBIAR AL MES SIGUIENTE
// =====================================================

botonSiguiente.addEventListener(
    "click",
    function () {

        fechaActual.setMonth(
            fechaActual.getMonth() + 1
        );

        mostrarMes();

        mostrarTutorias();

    }
);



// =====================================================
// INICIAR
// =====================================================

mostrarMes();

mostrarTutorias();