

async function cadastraUsuario() {
    event.preventDefault();

    let url = "http://jezielalmeida-001-site1.btempurl.com/api/login"
    let usuario = document.getElementById("usuario").value
    let senha = document.getElementById("senha").value
    
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "usuario": usuario,
            "senha": senha
        })
        
    })

    console.log(res)
    if(res) {
        alert("Usuário cadastrado com sucesso!")
    }
}