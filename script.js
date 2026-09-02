const buscador = document.getElementById("buscadorEstudiantes");
        const botonesCurso = document.querySelectorAll(".boton-curso");
        const resultados = document.getElementById("resultados");


        // BUSCADOR
        buscador.addEventListener("input", function () {

            const texto = buscador.value.trim();

            if (texto === "") {

                resultados.innerHTML = `
                    <h2>Estudiantes</h2>
                    <p class="mensaje-inicial">
                        Busque un estudiante o seleccione un curso
                        para ver los resultados.
                    </p>
                `;

                return;
            }

            resultados.innerHTML = `
                <h2>Resultados</h2>

                <p class="mensaje-inicial">
                    Buscando estudiantes que coincidan con
                    "<strong>${texto}</strong>"...
                </p>
            `;
        });


        // BOTONES DE CURSO
        botonesCurso.forEach(function (boton) {

            boton.addEventListener("click", function () {

                const curso = boton.dataset.curso;

                resultados.innerHTML = `
                    <h2>Estudiantes de ${curso}° año</h2>

                    <p class="mensaje-inicial">
                        Aquí aparecerán los estudiantes de ${curso}° año.
                    </p>
                `;

            });

        });