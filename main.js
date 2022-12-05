async function mostraUsuarios() {

    const res = await fetch("http://jezielalmeida-001-site1.btempurl.com/api/login")
    const data = await res.json()

    const tabelaCorpo = document.getElementById("tabela-corpo");

    tabelaCorpo.innerHTML = ''

    data.forEach(element => {
        let linha = document.createElement('tr')
        let usuario = document.createElement('td')
        usuario.innerText = element.usuario
        let dataCriacao = document.createElement('td')
        let newDate = new Date(element.dataCriacao)
        let dataNova = dataFormatada(newDate)
        dataCriacao.innerText = dataNova
        linha.appendChild(usuario)
        linha.appendChild(dataCriacao)
        tabelaCorpo.appendChild(linha)
    });
}

async function novoUsuario() {
    event.preventDefault();

    let url = "http://jezielalmeida-001-site1.btempurl.com/api/login"
    let usuario = document.getElementById("usuario")
    let senha = document.getElementById("senha")
    let dataCriacao = dataAtual()
    
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "usuario": usuario.value,
            "senha": senha.value,
            "dataCriacao": dataCriacao
        })
        
    })

    if(res) {
        alert("Usuário cadastrado com sucesso!")
    }

    limparCampos(usuario, senha)

    mostraUsuarios()
}

function dataAtual() {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed)
    return today.toISOString()
}

function dataFormatada(dataISO) {

    const dia = String(dataISO.getDate()).padStart(2, '0');

    const mes = String(dataISO.getMonth() + 1).padStart(2, '0');

    const ano = dataISO.getFullYear();

    const dataAtual = dia + '/' + mes + '/' + ano;

    return dataAtual
}

function limparCampos(usuario, senha) {
    usuario.value = ''
    senha.value = ''
}

mostraUsuarios()
