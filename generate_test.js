//Receber um arquivo model/mongoose
const fs = require('fs');

function read(filePath, cb) {
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) throw err;
        cb(data);
    });
}

fs.appendFile('./test/User.test.js', `const { assert } = require('chai');\n\n`, (err) => {
    if (err) throw err;
});

fs.appendFile('./test/User.test.js', `describe('UnitTests :: User', () => {\n`, (err) => {
    if (err) throw err;
});

read('./model/User.js', function (data) {
    var regExp = /\(({[^)]+})\)/;
    var matches = regExp.exec(data)

    var secondMatch = matches[0].substring(1, matches[0].length - 1);

    // console.log('Second match', secondMatch);

    secondMatch = secondMatch.replace(/ /g, '');

    var fixedJSON = secondMatch.replace(/([a-zA-Z0-9-]+):([a-zA-Z0-9-]+)/g, "\"$1\":\"$2\"");
    fixedJSON = fixedJSON.replace(/([{,])(\s*)([A-Za-z0-9_\-]+?)\s*:/g, '$1"$3":')

    // console.log('baratinha: ', fixedJSON);

    var resultado = JSON.parse(fixedJSON);
    // console.log('Funcionou???? ', resultado);

    for (var key in resultado) {
        // console.log(`Criando testes para a chave: ${key}\n\n`);
        if (key === 'name') {
            fs.appendFile('./test/User.test.js', `\tdescribe('Field [${key}]: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\tcontext('Sending Field [${key}] with a string: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\t\tit('Should be typeof String: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\t\t\tconst USER = { name: 'Lancelot' };\n\t\t\t\tassert.typeOf(USER.name, 'string', 'the name is a string');`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\n\t\t\t});\t\t\n});\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\t});\n`, (err) => {
                if (err) throw err;
            });
        }

        if (key === 'status') {
            fs.appendFile('./test/User.test.js', `\tdescribe('Field [${key}]: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\tcontext('Sending Field [${key}] with a boolean: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\t\tit('Should be typeof Boolean: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\t\t\tconst USER = { name: 'Poseidon', status: true };\n\t\t\t\tassert.typeOf(USER.status, 'boolean', 'the status is a boolean');`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\n\t\t\t});\t\t\n});\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\t});\n`, (err) => {
                if (err) throw err;
            });
        }

        if (key === 'payments') {
            fs.appendFile('./test/User.test.js', `\tdescribe('Field [${key}]: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\tcontext('Sending Field [${key}] with multiple values: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\t\tit('Should be typeof Array: ', () => {\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\t\t\tconst USER = { name: 'Poseidon', status: true, payments: [{date: '14/12/2020', value: 90}, {date: '10/11/2020', value: 190}] };\n\t\t\t\tassert.typeOf(USER.payments, 'array', 'the payments key is an array');`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\n\t\t\t});\t\t\n});\n`, (err) => {
                if (err) throw err;
            });

            fs.appendFile('./test/User.test.js', `\t\t});\n`, (err) => {
                if (err) throw err;
            });
        }
    }


    fs.appendFile('./test/User.test.js', `});\n`, (err) => {
        if (err) throw err;
    });

});

//Aplicar testes unitários para os tipos