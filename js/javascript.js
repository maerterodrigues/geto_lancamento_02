

function mensagem() {
    alert("Você será redirecionado para o seu servidor de email" +
        "caso não esteja logado no seu email, efetue o login e tente novamente")
}

function click_menu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

function tamanho_site() {
    if (window.innerWidth > 768) {
        itens.style.display = 'flex'
    } else {
        itens.style.display = 'none'
    }
}


// Function to switch between dark and light mode
function switchTheme() {
    document.body.classList.toggle('darkTheme');
    document.body.classList.toggle('lightTheme');
}