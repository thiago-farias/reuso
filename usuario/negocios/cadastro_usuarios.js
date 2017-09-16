var RepositorioUsuarios = require('../persistencia/repositorio_usuario_mongo')

class CadastroUsuarios {
    constructor() {
        this._repositorio = new RepositorioUsuarios();
    }

    async adicionar(usuario) {
        console.log(usuario);
        var user = await this._repositorio.listarEmail(usuario.email);
        console.log(user);
        if (user != null) {
            throw new Error("Usuario ja existe no repositório");
        }
        await this._repositorio.adicionar(usuario);
    }

    async remover(email) {
        return await this._repositorio.remover(email);
    }

    async listarTodos() {
        return await this._repositorio.listarTodos();
    }
}

module.exports = CadastroUsuarios;