        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('questionnaireForm');
            const submitBtn = document.getElementById('submitBtn');
            const resultScreen = document.getElementById('resultScreen');
            const goBackBtn = document.getElementById('goBackBtn');
            const downloadPdfBtn = document.getElementById('downloadPdfBtn');
            const toggleGuideBtn = document.getElementById('toggleGuideBtn');


 // Mapeo de las dimensiones a sus títulos en español
            const dimensionTitles = {
                adaptability: "Adaptabilidad al Cambio",
                wellbeing: "Bienestar Integral",
                innovation: "Innovación y Creatividad",
                sustainability: "Sostenibilidad Laboral",
                connection: "Conexión y Comunidad",
                responsibility: "Responsabilidad Social y Propósito"
            };

            // Objeto con interpretaciones y recomendaciones detalladas
            const interpretations = {
                adaptability: {
                    definition: "La capacidad de ajustarse eficazmente a los cambios y nuevas situaciones en el entorno.",
                    low: {
                        description: "Puntaje bajo en Adaptabilidad al Cambio",
                        detailedDescription: "Este puntaje sugiere que podrías estar enfrentando dificultades para adaptarte a los cambios en tu entorno laboral. Es posible que los cambios repentinos o las nuevas situaciones te generen estrés o incomodidad, lo que puede afectar tu rendimiento y bienestar en el trabajo.",
                        recommendations: [
                            "Identifica qué aspectos de los cambios te generan mayor desafío.",
                            "Desarrolla técnicas de manejo del estrés, como la meditación o ejercicios de respiración.",
                            "Busca oportunidades para participar en proyectos que requieran adaptabilidad gradual.",
                            "Comunica tus inquietudes a tus superiores para encontrar soluciones juntos."
                        ]
                    },
                    medium: {
                        description: "Puntaje medio en Adaptabilidad al Cambio",
                        detailedDescription: "Tienes una capacidad moderada para adaptarte a los cambios. Aunque manejas bien ciertas situaciones nuevas, puede que aún te cueste adaptarte rápidamente a cambios significativos o inesperados.",
                        recommendations: [
                            "Fortalece tu resiliencia enfrentando pequeños cambios en tu rutina diaria.",
                            "Participa en talleres o cursos sobre gestión del cambio.",
                            "Comparte experiencias con colegas para aprender de sus estrategias de adaptación.",
                            "Mantén una actitud abierta y positiva ante nuevas oportunidades."
                        ]
                    },
                    high: {
                        description: "Puntaje alto en Adaptabilidad al Cambio",
                        detailedDescription: "Demuestras una excelente capacidad para adaptarte a los cambios y nuevas situaciones. Eres flexible y capaz de ajustar tu enfoque según las circunstancias, lo que es una fortaleza valiosa en el entorno laboral actual.",
                        recommendations: [
                            "Continúa desarrollando tu flexibilidad participando en proyectos diversos.",
                            "Comparte tus habilidades de adaptación con tu equipo para mejorar la dinámica grupal.",
                            "Considera asumir roles de liderazgo en situaciones de cambio.",
                            "Mantente actualizado sobre las tendencias y cambios en tu industria."
                        ]
                    }
                },
                wellbeing: {
                    definition: "El equilibrio entre el trabajo y la vida personal, junto con el manejo del estrés y la satisfacción emocional.",
                    low: {
                        description: "Puntaje bajo en Bienestar Integral",
                        detailedDescription: "Este resultado indica que podrías estar experimentando estrés o desequilibrios entre tu vida laboral y personal. Es importante abordar estos aspectos para prevenir el agotamiento y mejorar tu calidad de vida.",
                        recommendations: [
                            "Establece límites claros entre el trabajo y el tiempo personal.",
                            "Incorpora actividades relajantes en tu rutina diaria, como ejercicio o hobbies.",
                            "Habla con tu supervisor sobre posibles ajustes en tu carga laboral.",
                            "Considera buscar apoyo profesional si sientes que el estrés es abrumador."
                        ]
                    },
                    medium: {
                        description: "Puntaje medio en Bienestar Integral",
                        detailedDescription: "Mantienes un equilibrio razonable entre tu trabajo y tu vida personal, pero podrías beneficiarte de mejoras en el manejo del estrés y la satisfacción emocional.",
                        recommendations: [
                            "Practica técnicas de mindfulness para mejorar tu bienestar emocional.",
                            "Asegúrate de tomar descansos regulares durante tu jornada laboral.",
                            "Planifica actividades que disfrutes fuera del trabajo.",
                            "Evalúa tus prioridades y ajusta tu tiempo en consecuencia."
                        ]
                    },
                    high: {
                        description: "Puntaje alto en Bienestar Integral",
                        detailedDescription: "Disfrutas de un buen equilibrio entre tu vida laboral y personal, y manejas el estrés de manera efectiva. Esto contribuye positivamente a tu satisfacción y rendimiento en el trabajo.",
                        recommendations: [
                            "Sigue practicando tus hábitos saludables y técnicas de manejo del estrés.",
                            "Comparte tus estrategias de bienestar con tus colegas para fomentar un ambiente positivo.",
                            "Continúa priorizando actividades que te brinden alegría y satisfacción.",
                            "Mantente atento a señales de estrés para abordarlas tempranamente."
                        ]
                    }
                },
                // Repite el mismo formato para las demás dimensiones (innovation, sustainability, connection, responsibility)
                innovation: {
                    definition: "La creatividad y disposición para generar ideas nuevas y prácticas que mejoren los procesos.",
                    low: {
                        description: "Puntaje bajo en Innovación y Creatividad",
                        detailedDescription: "Es posible que te sientas menos inclinado a proponer ideas nuevas o a participar en iniciativas creativas. Esto puede limitar oportunidades de mejora y crecimiento profesional.",
                        recommendations: [
                            "Involúcrate en sesiones de lluvia de ideas con tu equipo.",
                            "Explora áreas fuera de tu zona de confort para inspirar la creatividad.",
                            "Fomenta una mentalidad de aprendizaje continuo.",
                            "No temas compartir tus ideas; cada aportación es valiosa."
                        ]
                    },
                    medium: {
                        description: "Puntaje medio en Innovación y Creatividad",
                        detailedDescription: "Tienes una disposición moderada hacia la innovación, pero existe potencial para incrementar tu participación en actividades creativas y propuestas de mejora.",
                        recommendations: [
                            "Busca inspiración en tendencias de la industria y nuevas tecnologías.",
                            "Colabora con colegas en proyectos innovadores.",
                            "Asiste a talleres o cursos que estimulen la creatividad.",
                            "Practica el pensamiento lateral para resolver problemas."
                        ]
                    },
                    high: {
                        description: "Puntaje alto en Innovación y Creatividad",
                        detailedDescription: "Eres proactivo en generar ideas y participar en iniciativas que mejoran procesos y fomentan la innovación. Esto es altamente valorado en cualquier organización.",
                        recommendations: [
                            "Continúa aportando ideas y liderando proyectos innovadores.",
                            "Mentoriza a otros compañeros para estimular un ambiente creativo.",
                            "Mantente actualizado con las últimas tendencias y prácticas innovadoras.",
                            "Considera oportunidades para presentar tus ideas a niveles superiores."
                        ]
                    }
                },
                sustainability: {
                    definition: "La habilidad de gestionar la carga laboral de manera sostenible y saludable en el tiempo.",
                    low: {
                        description: "Puntaje bajo en Sostenibilidad Laboral",
                        detailedDescription: "Puedes estar experimentando dificultades para manejar tu carga laboral de manera sostenible, lo que podría conducir al agotamiento y afectar tu rendimiento.",
                        recommendations: [
                            "Evalúa y prioriza tus tareas para enfocarte en las más importantes.",
                            "Aprende a delegar cuando sea posible.",
                            "Establece horarios de trabajo razonables y respétalos.",
                            "Comunica tus límites y necesidades a tu supervisor."
                        ]
                    },
                    medium: {
                        description: "Puntaje medio en Sostenibilidad Laboral",
                        detailedDescription: "Manejas tu carga laboral de forma aceptable, pero hay margen para mejorar la sostenibilidad y prevenir el estrés a largo plazo.",
                        recommendations: [
                            "Implementa técnicas de gestión del tiempo, como la técnica Pomodoro.",
                            "Tómate pequeños descansos durante el día para recargar energías.",
                            "Revisa regularmente tus objetivos y ajusta tus planes según sea necesario.",
                            "Practica el autocuidado fuera del trabajo."
                        ]
                    },
                    high: {
                        description: "Puntaje alto en Sostenibilidad Laboral",
                        detailedDescription: "Gestionas eficientemente tu carga laboral, manteniendo un ritmo sostenible que favorece tu rendimiento y bienestar a largo plazo.",
                        recommendations: [
                            "Sigue aplicando tus eficaces estrategias de gestión del tiempo.",
                            "Comparte tus prácticas con el equipo para mejorar la dinámica general.",
                            "Mantente alerta a cambios en tu carga de trabajo que puedan requerir ajustes.",
                            "Continúa priorizando tu bienestar en equilibrio con tus responsabilidades."
                        ]
                    }
                },
                connection: {
                    definition: "La construcción de relaciones positivas y de apoyo dentro del ambiente laboral.",
                    low: {
                        description: "Puntaje bajo en Conexión y Comunidad",
                        detailedDescription: "Es posible que te sientas aislado o desconectado de tus colegas, lo que puede afectar tu satisfacción laboral y oportunidades de colaboración.",
                        recommendations: [
                            "Inicia conversaciones informales para conocer mejor a tus compañeros.",
                            "Participa en actividades o eventos de equipo.",
                            "Ofrece ayuda en proyectos colaborativos.",
                            "Considera formar parte de grupos o comités dentro de la organización."
                        ]
                    },
                    medium: {
                        description: "Puntaje medio en Conexión y Comunidad",
                        detailedDescription: "Tienes relaciones laborales adecuadas, pero puedes fortalecer tus conexiones para mejorar la colaboración y el apoyo mutuo.",
                        recommendations: [
                            "Propón actividades de team building.",
                            "Practica la comunicación abierta y asertiva.",
                            "Reconoce y valora las contribuciones de tus colegas.",
                            "Busca oportunidades para trabajar en equipo."
                        ]
                    },
                    high: {
                        description: "Puntaje alto en Conexión y Comunidad",
                        detailedDescription: "Disfrutas de relaciones sólidas y de apoyo con tus colegas, lo que enriquece tu experiencia laboral y favorece un ambiente colaborativo.",
                        recommendations: [
                            "Sigue cultivando y fortaleciendo tus relaciones laborales.",
                            "Apoya a nuevos miembros del equipo para integrarse.",
                            "Fomenta una cultura de respeto y colaboración.",
                            "Comparte tus experiencias positivas para inspirar a otros."
                        ]
                    }
                },
                responsibility: {
                    definition: "El sentido de propósito y contribución hacia un impacto positivo en la comunidad y en el trabajo.",
                    low: {
                        description: "Puntaje bajo en Responsabilidad Social y Propósito",
                        detailedDescription: "Puedes sentir que tu trabajo carece de significado o impacto, lo que puede afectar tu motivación y satisfacción laboral.",
                        recommendations: [
                            "Reflexiona sobre cómo tus tareas contribuyen al objetivo general de la organización.",
                            "Busca proyectos o iniciativas que alineen con tus valores personales.",
                            "Participa en actividades de responsabilidad social corporativa.",
                            "Habla con tu supervisor sobre oportunidades para involucrarte más."
                        ]
                    },
                    medium: {
                        description: "Puntaje medio en Responsabilidad Social y Propósito",
                        detailedDescription: "Sientes cierto nivel de propósito en tu trabajo, pero hay oportunidades para profundizar tu conexión con la misión y los valores de la organización.",
                        recommendations: [
                            "Identifica aspectos de tu trabajo que te resulten significativos.",
                            "Involúcrate en iniciativas que tengan un impacto social positivo.",
                            "Comparte tus ideas sobre cómo mejorar la responsabilidad social en tu empresa.",
                            "Conecta con colegas que compartan tus valores."
                        ]
                    },
                    high: {
                        description: "Puntaje alto en Responsabilidad Social y Propósito",
                        detailedDescription: "Tienes un fuerte sentido de propósito y sientes que tu trabajo contribuye positivamente a la sociedad, lo que aumenta tu motivación y compromiso.",
                        recommendations: [
                            "Sigue involucrándote en proyectos significativos.",
                            "Inspira a otros compartiendo tu pasión y compromiso.",
                            "Busca oportunidades para liderar iniciativas sociales.",
                            "Mantén alineados tus objetivos personales con los de la organización."
                        ]
                    }
                }
            };

     submitBtn.addEventListener('click', async (event) => {
        // Previene el comportamiento predeterminado del formulario
        event.preventDefault();

        if (form.checkValidity()) {
            try {
                // Desactivar el botón de enviar para evitar múltiples envíos
                submitBtn.disabled = true;

                // Enviar respuestas a Netlify
                await saveResponses();

                // Mostrar los resultados después de guardar las respuestas
                showResults();
            } catch (error) {
                alert('Hubo un problema al guardar tus respuestas. Por favor, intenta nuevamente.');
                console.error('Error al guardar las respuestas:', error);
            } finally {
                // Restaurar el botón de enviar después de procesar la solicitud
                submitBtn.disabled = false;
            }
        } else {
            alert('Por favor, responda todas las preguntas.');
        }
    });

    goBackBtn.addEventListener('click', () => {
        resultScreen.style.display = 'none';
        form.style.display = 'block';
    });

    downloadPdfBtn.addEventListener('click', generatePDF);

    toggleGuideBtn.addEventListener('click', () => {
        const guideSection = document.getElementById('guideSection');
        guideSection.style.display = guideSection.style.display === 'none' ? 'block' : 'none';
    });

    async function saveResponses() {
        const formData = new FormData(form);

        // Crear un objeto que contenga todos los valores del formulario
        let responses = {};
        for (let [key, value] of formData.entries()) {
            responses[key] = value;
        }

        try {
            const response = await fetch('/.netlify/functions/saveResponses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(responses)
            });

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`Error al enviar los datos: ${response.status} - ${response.statusText}`);
            }

            // Intentar convertir la respuesta a JSON
            const data = await response.json();
            console.log('Respuestas guardadas exitosamente:', data);
        } catch (error) {
            console.error('Error al guardar las respuestas:', error);
            throw error; // Lanza el error para que el manejo en el `submitBtn` se encargue
        }
    }

                
            function showResults() {
                const scores = calculateScores();
                displayChart(scores);
                displayResults(scores);
                form.style.display = 'none';
                resultScreen.style.display = 'block';
            }

            function calculateScores() {
    // Crear objeto para almacenar los puntajes de cada dimensión
    let scores = {
        adaptability: 0,
        wellbeing: 0,
        innovation: 0,
        sustainability: 0,
        connection: 0,
        responsibility: 0
    };

    // Sumar los puntajes de cada dimensión usando la clase de cada grupo de preguntas
    document.querySelectorAll('.adaptability').forEach(select => {
        scores.adaptability += parseInt(select.value) || 0;
    });

    document.querySelectorAll('.wellbeing').forEach(select => {
        scores.wellbeing += parseInt(select.value) || 0;
    });

    document.querySelectorAll('.innovation').forEach(select => {
        scores.innovation += parseInt(select.value) || 0;
    });

    document.querySelectorAll('.sustainability').forEach(select => {
        scores.sustainability += parseInt(select.value) || 0;
    });

    document.querySelectorAll('.connection').forEach(select => {
        scores.connection += parseInt(select.value) || 0;
    });

    document.querySelectorAll('.responsibility').forEach(select => {
        scores.responsibility += parseInt(select.value) || 0;
    });

    return scores;
}


            function displayChart(scores) {
    const ctx = document.getElementById('resultsChart').getContext('2d');

    // Generar colores y etiquetas basados en los puntajes
    const colors = [];
    const labels = []; // Declarar el arreglo labels

    for (let dimension in scores) {
        const score = scores[dimension];
        let color;
        if (score <= 10) {
            color = '#FF6347'; // Rojo para Bajo
        } else if (score <= 15) {
            color = '#FFA500'; // Naranja para Medio
        } else {
            color = '#32CD32'; // Verde para Alto
        }
        colors.push(color);
        labels.push(dimensionTitles[dimension]); // Usar los títulos en español
    }

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels, // Usar el arreglo labels que hemos construido
            datasets: [{
                label: 'Puntaje',
                data: Object.values(scores),
                backgroundColor: colors
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true, max: 25 }
            }
        }
    });
}



            function displayResults(scores) {
                const resultsText = document.getElementById('resultsText');
                let resultsHTML = '';
                for (let dimension in scores) {
                    const score = scores[dimension];
                    const interpretation = getInterpretation(dimension, score);
                    resultsHTML += `<h3>${dimensionTitles[dimension]}</h3>`;
                    resultsHTML += `<p><em>${interpretation.definition}</em></p>`;
                    resultsHTML += `<p><strong>Puntaje:</strong> ${score} (${interpretation.level})</p>`;
                    resultsHTML += `<p><strong>${interpretation.description}</strong></p>`;
                    resultsHTML += `<p>${interpretation.detailedDescription}</p>`;
                    resultsHTML += `<p><strong>Recomendaciones:</strong></p><ul>`;
                    interpretation.recommendations.forEach(rec => {
                        resultsHTML += `<li>${rec}</li>`;
                    });
                    resultsHTML += `</ul><hr>`;
                }
                resultsText.innerHTML = resultsHTML;

                const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
                const averageScore = totalScore / Object.keys(scores).length;
                document.getElementById('generalResult').innerText = interpretGeneralScore(averageScore);
            }


            function getInterpretation(dimension, score) {
                const dimData = interpretations[dimension];
                let level, interpData;

                if (score <= 10) {
                    level = 'Bajo';
                    interpData = dimData.low;
                } else if (score <= 15) {
                    level = 'Medio';
                    interpData = dimData.medium;
                } else {
                    level = 'Alto';
                    interpData = dimData.high;
                }

                return {
                    dimension: dimensionTitles[dimension],
                    definition: dimData.definition,
                    level: level,
                    description: interpData.description,
                    detailedDescription: interpData.detailedDescription,
                    recommendations: interpData.recommendations
                };
            }

                        
            function generatePDF() {
    const element = document.getElementById('resultScreen');

    const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5], // Márgenes: [superior, izquierdo, inferior, derecho] en pulgadas
        filename:     'Resultados_AOBI.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2, letterRendering: true },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Ocultar botones antes de generar el PDF
    document.getElementById('goBackBtn').style.display = 'none';
    document.getElementById('toggleGuideBtn').style.display = 'none';
    document.getElementById('downloadPdfBtn').style.display = 'none';

    // Esperar un momento antes de generar el PDF
    setTimeout(() => {
        html2pdf().set(opt).from(element).save().then(() => {
            // Restaurar la visibilidad de los botones después de generar el PDF
            document.getElementById('goBackBtn').style.display = 'block';
            document.getElementById('toggleGuideBtn').style.display = 'block';
            document.getElementById('downloadPdfBtn').style.display = 'block';
        });
    }, 1000); // Puedes ajustar el tiempo si es necesario
}






            function capitalize(str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }

            function interpretGeneralScore(averageScore) {
                if (averageScore <= 10) {
                    return "Tu resultado general es Bajo. Sería beneficioso enfocarte en desarrollar habilidades en las áreas donde obtuviste puntajes más bajos para mejorar tu bienestar y desempeño laboral.";
                } else if (averageScore <= 15) {
                    return "Tu resultado general es Medio. Tienes un desempeño aceptable, pero hay oportunidades para mejorar y alcanzar un mayor nivel de satisfacción y eficacia en tu trabajo.";
                } else {
                    return "Tu resultado general es Alto. Estás manejando muy bien los aspectos evaluados. Continúa fortaleciendo tus habilidades y considera cómo puedes seguir creciendo y apoyando a otros en su desarrollo.";
                }
            }
        });
