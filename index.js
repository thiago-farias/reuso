var Usuario = require('./usuario/entity/usuario');
var CadastroUsuarios = require("./usuario/negocios/cadastro_usuarios");

var express     = require('express');
var app         = express(); 
var bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8000; 
var router  = express.Router(); 

var cadastro = new CadastroUsuarios();

router.get('/', function(req, res) {
    res.json({ message: 'YEAH! Seja Bem-Vindo a nossa API' });
});

router.route('/usuarios').post(
        function(req, res) {
            var obj = req.body;
            cadastro.adicionar(new Usuario(obj.nome, obj.cpf, obj.email)).then(
            function() {
                res.json({mensagem: 'Usuário inserido com sucesso.'});
            }).catch(function(err) {
                res.json({mensagem: 'Erro ao inserir usuário.'});
            });
       });

app.use('/', router);
app.listen(port);
console.log('Server running at http://127.0.0.1:8000/');









async function test() { 
    var cadastro = new CadastroUsuarios();
    //var test = await cadastro.remover("thiago.farias@upe.br");
    //console.log("Removido: " + test);
    usuarios = await cadastro.listarTodos();
    console.log(usuarios);  
    await cadastro.adicionar(usuario);

    //repositorio.remover("thiago.farias@upe.br").then(function (test) {
    //    console.log("Removido: " + test);
    //});

    //repositorio.listarTodos().then(function(usuarios) {
    //    console.log(usuarios);
    //});

    /*var usuarios = await repositorio.listar("Thiago");
    for (i=0; i < usuarios.length; i++) {
        console.log(usuarios[i].nome);
    }

    var usuario2 = new Usuario("Thiago Farias", "123.456.789-00", "thiago.farias@upe.br");

    test = await repositorio.alterar(usuario2);
    console.log("Modificado: " + test);

    usuarios = await repositorio.listarTodos();
    console.log(usuarios);
    */
}
