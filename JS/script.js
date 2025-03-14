// Seleciona todos os links do menu que possuem a classe "scroll-link"
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Obtém o ID do destino
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Aguarda o carregamento do DOM antes de adicionar o evento ao formulário
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("meuFormulario").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const form = this;
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                document.getElementById("mensagemSucesso").textContent = "Mensagem enviada com sucesso!";
                document.getElementById("mensagemSucesso").style.display = "block";
                form.reset(); // Limpa o formulário
            } else {
                document.getElementById("mensagemSucesso").textContent = "Erro ao enviar a mensagem.";
                document.getElementById("mensagemSucesso").style.color = "red";
                document.getElementById("mensagemSucesso").style.display = "block";
            }
        }).catch(error => {
            console.error("Erro:", error);
            document.getElementById("mensagemSucesso").textContent = "Erro inesperado.";
            document.getElementById("mensagemSucesso").style.color = "red";
            document.getElementById("mensagemSucesso").style.display = "block";
        });
    });
});


function HideMenu() {
    const menu = document.getElementById("tags"); // Pegando o menu
    const scrollLinks = document.getElementsByClassName("scroll-link");
    const tag = document.getElementsByClassName("tags"); // Pegando todos os links

    menu.style.display = "block"; // Garante que o menu esteja visível

    // Adiciona um evento de clique a cada link do menu
    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener("click", function () {
            menu.style.display = "none"; // Esconde o menu ao clicar no link
        });
    }

}
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("tags");

    // Evento para fechar o menu ao clicar dentro do menu, mas fora das <li>
    menu.addEventListener("click", function (event) {
        if (event.target === menu) { // Verifica se o clique foi diretamente no <ul>
            menu.style.display = "none"; // Esconde o menu
        }
    });
});

function abrirProjeto(url) {
    window.open(url, '_blank');
}

/*FUNÇÃO PARA HOVER DE PROJETOS*/

const container = document.querySelector('.lista-projetos');
const projetos = document.querySelectorAll('.projeto-elemento');

projetos.forEach(projeto => {
    projeto.addEventListener('mouseenter', () => {
        container.classList.add('dim');
    });

    projeto.addEventListener('mouseleave', () => {
        container.classList.remove('dim');
    });
});