class Usuario {
    constructor(nome, cpf, email) {
        this._nome = nome;
        this._cpf = cpf;
        this._email = email;
    }

    get nome() {
        return this._nome;
    }

    get cpf() {
        return this._cpf;
    }

    get email() {
        return this._email;
    }

    toString() {
        return "Nome: " + this._nome 
             + "\nCPF: " + this._cpf 
             + "\ne-mail: " + this._email;
    }
}

module.exports = Usuario;