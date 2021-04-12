//Receber um arquivo model/mongoose
const fs = require('fs');

function read(filePath, cb) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) throw err;
        cb(data);
    });
}

function parseModel(data) {
    let schemaRegex = /\(({[^)]+})\)/
    let schema = schemaRegex.exec(data)

    if (schema.length == 0)
        return []

    let fieldRegex = /\w+:\s*((\{\s*(\w+:\s*\w+,?\s*)+\})|(\w+)|\[.*\])/gm
    return schema[0].match(fieldRegex);
}


parsed = read('./model/User.js', parseModel)


//Aplicar testes unitários para os tipos