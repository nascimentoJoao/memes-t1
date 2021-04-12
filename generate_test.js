//Receber um arquivo model/mongoose
var fs = require('fs');

function read(filePath, cb) {
    fs.readFile(filePath, 'utf8', function(err, data){
        if(err) throw err;
        cb(data);
    });
}

read('./model/User.js', function(data) {
    var regExp = /\(({[^)]+})\)/;
    var matches = regExp.exec(data)

    var regExp2 = /^([^:-][^:]*):/

    var secondMatch = regExp2.exec(matches[0]);

    console.log('AAAA', matches[0]);

    console.log('primeira parte: ', secondMatch);

})

//A partir disso, verificar os campos e tipos ali preenchidos

//Aplicar testes unitários para os tipos