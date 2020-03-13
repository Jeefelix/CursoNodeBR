/*
obter um usuario
obter telefone
obter endereço
*/

function obterUsuario(callback) {
    setTimeout(function() { 
        return callback (null,{
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })

    }, 1000)

}

function obterTelefone(idUsuario) {
    setTimeout(() => {
        return {
            telefone: '1199002',
            ddd: 11
        }
    }
    )

}

function obterEndereco (idUsuario) {

}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)

}
obterUsuario(resolverUsuario)
// (apagar) const usuario = obterUsuario()
// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)
