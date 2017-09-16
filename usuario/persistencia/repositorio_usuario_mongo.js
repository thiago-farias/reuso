var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

class RepositorioUsuariosMongo {
    constructor() {
        this.schema = new mongoose.Schema({
            nome: String,
            cpf: String,
            email: String
        });
        
        this.conn = mongoose.connect("mongodb://localhost/usuariodb", 
            {
                useMongoClient: true
            }, 
            function(error) {
                if (error) {
                    throw new Error("Erro na conexao.");
                }
                console.log("Mongo Conectado!\n");
            }    
        );
        
        mongoose.model('UsuarioMongo', this.schema);
    }

    async adicionar(user) {
        var UsuarioMongo = mongoose.model('UsuarioMongo');
        var result = true;
        await UsuarioMongo.create({
                nome: user.nome, 
                cpf: user.cpf, 
                email: user.email
            }, function(err, usuarioMongo) {
            if (err) {
                result = false;
                return;
            }
            console.log(usuarioMongo._id);
        });
        return result;
    }
    
    async remover(email) {
        var UsuarioMongo = mongoose.model('UsuarioMongo');
        var result = true;
        await UsuarioMongo.remove({email: email}, function(err) {
            if (err) {
                result = false;
            }
        });
        return result;
    }
    
    async listarTodos() {
        var UsuarioMongo = mongoose.model('UsuarioMongo');
        var result = [];
        await UsuarioMongo.find({}, function(err, usuarios) {
            if (err) {
                return;
            }
            result = usuarios;
        });
        return result;
    }
    
    async listar(nome) {
        var UsuarioMongo = mongoose.model('UsuarioMongo');
        var result = [];
        await UsuarioMongo.find({nome: nome}, function(err, usuarios) {
            if (err) {
                return;
            }
            result = usuarios;
        });
        return result;
    }

    async listarEmail(email) {
        var UsuarioMongo = mongoose.model('UsuarioMongo');
        var result = null;
        await UsuarioMongo.findOne({email: email}, function(err, usuario) {
            if (err) {
                return;
            }
            result = usuario;
        });
        return result;
    }
    
    async alterar(user) {
        var UsuarioMongo = mongoose.model('UsuarioMongo');
        var result = true;
        await UsuarioMongo.findOneAndUpdate({email: user.email}, 
            {nome: user.nome, cpf: user.cpf, email: user.email}, 
            function(err, usuarioMongo) {
            if (err) {
                result = false;
            }
        });
        return result;
    }
}

module.exports = RepositorioUsuariosMongo;