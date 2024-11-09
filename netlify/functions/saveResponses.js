const Airtable = require('airtable');

exports.handler = async (event, context) => {
    console.log('Request received:', event);

    if (event.httpMethod !== 'POST') {
        console.error('Invalid HTTP Method');
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Only POST requests allowed' }),
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
    } catch (error) {
        console.error('Error al parsear los datos enviados:', error);
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Invalid JSON payload' }),
        };
    }

    // Convertir los valores de los campos que necesitan ser números
    const convertToNumber = (value) => {
        const number = parseInt(value, 10);
        return isNaN(number) ? null : number;
    };

    // Asegurarse de que los valores enviados a Airtable sean correctos
    const adaptedData = {
        adaptability1: convertToNumber(data.adaptability1),
        adaptability2: convertToNumber(data.adaptability2),
        adaptability3: convertToNumber(data.adaptability3),
        adaptability4: convertToNumber(data.adaptability4),
        adaptability5: convertToNumber(data.adaptability5),
        wellbeing1: convertToNumber(data.wellbeing1),
        wellbeing2: convertToNumber(data.wellbeing2),
        wellbeing3: convertToNumber(data.wellbeing3),
        wellbeing4: convertToNumber(data.wellbeing4),
        wellbeing5: convertToNumber(data.wellbeing5),
        innovation1: convertToNumber(data.innovation1),
        innovation2: convertToNumber(data.innovation2),
        innovation3: convertToNumber(data.innovation3),
        innovation4: convertToNumber(data.innovation4),
        innovation5: convertToNumber(data.innovation5),
        sustainability1: convertToNumber(data.sustainability1),
        sustainability2: convertToNumber(data.sustainability2),
        sustainability3: convertToNumber(data.sustainability3),
        sustainability4: convertToNumber(data.sustainability4),
        sustainability5: convertToNumber(data.sustainability5),
        connection1: convertToNumber(data.connection1),
        connection2: convertToNumber(data.connection2),
        connection3: convertToNumber(data.connection3),
        connection4: convertToNumber(data.connection4),
        connection5: convertToNumber(data.connection5),
        responsibility1: convertToNumber(data.responsibility1),
        responsibility2: convertToNumber(data.responsibility2),
        responsibility3: convertToNumber(data.responsibility3),
        responsibility4: convertToNumber(data.responsibility4),
        responsibility5: convertToNumber(data.responsibility5),
    };

    const base = new Airtable({ apiKey }).base(baseId);

    try {
        // Crea un registro en la tabla con los datos del formulario
        const createdRecord = await base(tableName).create(adaptedData);

        console.log('Registro creado exitosamente:', createdRecord);
        return {
            statusCode: 200,
            body: JSON.stringify(createdRecord),
        };
    } catch (error) {
        console.error('Error al guardar los datos en Airtable:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Error al guardar los datos: ${error.message}` }),
        };
    }
};
