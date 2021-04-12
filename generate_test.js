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


function checkFields(data) {
    let typeRegex = /\w/
    let defaultRegex = /\w/
    let aliasRegex = /\w/
    let requiredRegex = /\w/
    let maxLengthRegex = /\w/
    let minLengthRegex = /\w/
    let enumRegex = /\w/
    let minRegex = /\w/
    let maxRegex = /\w/

    let testMapper = {}
    for (let field of data){
        let fieldName = batata

        if(!(field in testMapper)){
            testMapper[fieldName] = {data: [], function: []}
        }

        let typeData = field.match(typeRegex)
        if(typeData){
            testMapper[fieldName].data = field
            testMapper[fieldName].function = testType
        }
    }
}

parsed = read('./model/User.js', parseModel)
checks = checkFields(parsed)


//Aplicar testes unitários para os tipos