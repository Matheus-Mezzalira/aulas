function entrar() {

    const inputEmail = document.getElementById("email");
    const inputSenha = document.getElementById("senha");

    const inputadmin = ('matheus.a.mezzalira3@gmail.com')
    const inputadmen = ('5678')

    if(inputEmail.value == inputadmin && inputSenha.value == inputadmen){
        alert(`Usuário logado com sucesso
        `)
    } else {
        alert(`Usuário ou senha incorreto
        `)
    }


}