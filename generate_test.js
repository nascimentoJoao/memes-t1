//Receber um arquivo model/mongoose
var fs = require('fs');

function read(filePath, cb) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) throw err;
        cb(data);
    });
}

fs.appendFile('./test/User.test.js', `const { expect } = require('chai');\n\n`, (err) => {
    if (err) throw err;
});

fs.appendFile('./test/User.test.js', `describe('UnitTests :: User', () => {\n`, (err) => {
    if (err) throw err;
});

read('./model/User.js', function (data) {
    var regExp = /\(({[^)]+})\)/;
    var matches = regExp.exec(data)

    var secondMatch = matches[0].substring(1, matches[0].length - 1);

    console.log('Second match', secondMatch);

    secondMatch = secondMatch.replace(/ /g, '');

    var fixedJSON = secondMatch.replace(/([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)/g, "\"$1\":\"$2\"");
    fixedJSON = fixedJSON.replace(/([{,])(\s*)([A-Za-z0-9_\-]+?)\s*:/g, '$1"$3":')

    // console.log('baratinha: ', fixedJSON);

    var resultado = JSON.parse(fixedJSON);
    // console.log('Funcionou???? ', resultado);

    for (var key in resultado) {
        // console.log(`Criando testes para a chave: ${key}\n\n`);
        if (key === 'name') {
            fs.appendFile('./test/User.test.js', `describe('Field [${key}]: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `context('When field [${key}] is a string: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `it('Should return true: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `expect', () => {\n`, (err) => {
                if (err) throw err;
            });
        }
    }

    fs.appendFile('./test/User.test.js', `});\n`, (err) => {
        if (err) throw err;
    });

    fs.appendFile('./test/User.test.js', `});\n`, (err) => {
        if (err) throw err;
    });

});

//A partir disso, verificar os campos e tipos ali preenchidos

//Aplicar testes unitários para os tipos