const Airtable = require('airtable');

exports.handler = async (event, context) => {
    console.log('Función iniciada'); // Log inicial para identificar si se llama dos veces

    if (event.httpMethod !== 'POST') {
        console.error('Método HTTP inválido');
        return {
            statusCode: 405,
            body: 'Solo se permiten solicitudes POST',
        };
    }

    // Aquí especificas tu API Key de Airtable y la tabla donde se guardarán los datos
    const apiKey = 'pat4XqcRGTk6x78PH.68312b9a7f83f8145f7c16f870bf0f47f3330ca86cea75ac67cdf4b784486925';
    const baseId = 'appGXKpGqDSbmwisb';
    const tableName = 'aobi1'; // Cambia esto por el nombre de tu tabla en Airtable

    // Obtén los datos enviados desde el formulario
    let data;
    try {
        data = JSON.parse(event.body);
    } catch (parseError) {
        console.error('Error al parsear el cuerpo de la solicitud:', parseError);
        return {
            statusCode: 400,
            body: 'Error al parsear el cuerpo de la solicitud',
        };
    }

    // Convertir los valores a números si es necesario
    for (let key in data) {
        if (!isNaN(data[key])) {
            data[key] = Number(data[key]);
        }
    }

    const base = new Airtable({ apiKey }).base(baseId);

    try {
        console.log('Intentando guardar respuestas en Airtable');
        // Crea un registro en la tabla con los datos del formulario
        const createdRecord = await base(tableName).create({
            adaptability1: data.adaptability1,
            adaptability2: data.adaptability2,
            adaptability3: data.adaptability3,
            adaptability4: data.adaptability4,
            adaptability5: data.adaptability5,
            wellbeing1: data.wellbeing1,
            wellbeing2: data.wellbeing2,
            wellbeing3: data.wellbeing3,
            wellbeing4: data.wellbeing4,
            wellbeing5: data.wellbeing5,
            innovation1: data.innovation1,
            innovation2: data.innovation2,
            innovation3: data.innovation3,
            innovation4: data.innovation4,
            innovation5: data.innovation5,
            sustainability1: data.sustainability1,
            sustainability2: data.sustainability2,
            sustainability3: data.sustainability3,
            sustainability4: data.sustainability4,
            sustainability5: data.sustainability5,
            connection1: data.connection1,
            connection2: data.connection2,
            connection3: data.connection3,
            connection4: data.connection4,
            connection5: data.connection5,
            responsibility1: data.responsibility1,
            responsibility2: data.responsibility2,
            responsibility3: data.responsibility3,
            responsibility4: data.responsibility4,
            responsibility5: data.responsibility5
        });

        console.log('Respuestas guardadas en Airtable:', createdRecord.id);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Respuestas guardadas exitosamente', id: createdRecord.id }),
        };
    } catch (error) {
        console.error('Error al guardar los datos en Airtable:', error);
        return {
            statusCode: 500,
            body: `Error: ${error.message}`,
        };
    }
};
