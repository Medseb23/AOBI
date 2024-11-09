const Airtable = require('airtable');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Only POST requests allowed',
        };
    }

    // Aquí especificas tu API Key de Airtable y la tabla donde se guardarán los datos
    const apiKey = 'TU_API_KEY_DE_AIRTABLE';
    const baseId = 'TU_BASE_ID_DE_AIRTABLE';
    const tableName = 'NombreDeLaTabla';

    const data = JSON.parse(event.body);

    const base = new Airtable({ apiKey }).base(baseId);

    try {
        const createdRecord = await base(tableName).create(data);
        return {
            statusCode: 200,
            body: JSON.stringify(createdRecord),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: `Error: ${error}`,
        };
    }
};
