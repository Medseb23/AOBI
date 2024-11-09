const Airtable = require('airtable');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Only POST requests allowed',
        };
    }

    // Aquí especificas tu API Key de Airtable y la tabla donde se guardarán los datos
    const apiKey = 'pat4XqcRGTk6x78PH.68312b9a7f83f8145f7c16f870bf0f47f3330ca86cea75ac67cdf4b784486925';
    const baseId = 'appGXKpGqDSbmwisb/tbl9BkecBANtgEffP';
    const tableName = 'aobi1';

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
