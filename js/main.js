 // Objeto que almacena las respuestas correctas para cada pregunta (q1, q2, etc.)
        const respuestasCorrectas = {
            q1: 'b', // Plan de Negocios
            q2: 'b', // Producto Mínimo Viable (MVP)
            q3: 'b', // Ingresos = Gastos
            q4: 'b', // Atraer y retener clientes online
            q5: 'b', // Valor de Vida del Cliente (CLV)
            q6: 'b'  // Capital de Riesgo (Venture Capital)
        };

        const imagenesPremio = {
            
            premioMayor: 'https://resizer.sevilla.abc.es/resizer/resizer.php?imagen=https://sevilla.abc.es/estilo/bulevarsur/wp-content/uploads/sites/14/2016/08/diccionario-maquillaje-principiantes.jpg&nuevoancho=652s=BASE+DE+MAQUILLAJE+(REEMPLAZAR+URL)', 
            
            
            segundoPremio: 'https://avobeauty.mx/cdn/shop/products/WICKED_1200x1200.png?v=1723742673=LABIAL+(REEMPLAZAR+URL)', 
            
            
            sinPremio: 'https://st.depositphotos.com/1054979/3064/v/950/depositphotos_30640773-stock-illustration-loser-stamp.jpg=X+PERDEDOR+(REEMPLAZAR+URL)'  
        };
        

        /**
         * Función principal para verificar las respuestas del cuestionario,
         * calcular la puntuación y mostrar el premio correspondiente.
         */
        function verificarCuestionario() {
            const formulario = document.getElementById('quiz-form');
            let puntaje = 0;
            const totalPreguntas = Object.keys(respuestasCorrectas).length;

            // 1. ITERAMOS sobre cada pregunta para calcular el puntaje
            for (const pregunta in respuestasCorrectas) {
                const opcionSeleccionada = formulario.elements[pregunta] ? formulario.elements[pregunta].value : null;
                if (opcionSeleccionada === respuestasCorrectas[pregunta]) {
                    puntaje++;
                }
            }

            // 2. Obtenemos los elementos de la sección de resultados (HTML)
            const divResultado = document.getElementById('quiz-result');
            const textoResultado = document.getElementById('result-text');
            const textoPuntaje = document.getElementById('score-text');
            const imagenPremio = document.getElementById('prize-image');

            let tipoPremio;
            let mensaje;

            // 3. Lógica para determinar el mensaje y el premio
            if (puntaje >= 5) { // 5 o 6 aciertos -> Base de Maquillaje
                tipoPremio = 'premioMayor';
                mensaje = '¡EMPRESARIO TOP! Tienes una visión muy aguda, ¡Te mereces un KIT de maquillaje!';
            } else if (puntaje >= 3) { // 3 o 4 aciertos -> Labial
                tipoPremio = 'segundoPremio';
                mensaje = '¡BIEN HECHO! Conoces lo básico, ¡Aquí tienes el Labial!';
            } else { // 0 a 2 aciertos -> Perdedor
                tipoPremio = 'sinPremio';
                mensaje = 'Debes estudiar más de negocios. Mejor suerte la próxima vez.';
            }

            // 4. Actualizar el contenido de la sección de resultados
            textoResultado.textContent = mensaje;
            textoPuntaje.textContent = `Tu puntuación fue: ${puntaje} de ${totalPreguntas} aciertos.`;
            // Asignamos la URL de la imagen de premio (que debe ser reemplazada)
            imagenPremio.src = imagenesPremio[tipoPremio];
            
            // Hacemos visible la sección de resultados
            divResultado.classList.remove('hidden');

            // Desplazarse al resultado para que el usuario lo vea fácilmente
            divResultado.scrollIntoView({ behavior: 'smooth' });

        }