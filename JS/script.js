// Seleciona todos os links do menu que possuem a classe "scroll-link"
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        const targetId = this.getAttribute('href').substring(1); // Obtém o ID do destino
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});

// Aguarda o carregamento do DOM antes de adicionar o evento ao formulário
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("meuFormulario").addEventListener("submit", function(event) {
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
