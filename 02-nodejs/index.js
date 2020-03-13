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

function obterTelefone(idUsuario,callback) {
    setTimeout(() => {
        return callback (null, {
            telefone: '1199002',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco (idUsuario) {

}

function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)

}
obterUsuario(function resolverUsuario(erro, usuario) {
    // se o valor for nulo, nao vai cair aqui. se tiver algum valor, cairá
    if (error) {
        console.error('erro em usuario', error)
        return;
    }
    obterTelefone(usuario.id,function resolverTelefone(error1, telefone) {
        if (error) {
            console.error('erro em telefone', error)
            return;
        }
    })
})
