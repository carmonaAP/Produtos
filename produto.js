document.addEventListener('DOMContentLoaded', () => {
    // Seleciona a imagem principal e as miniaturas
    const imagemPrincipal = document.getElementById('imagem-principal');
    const miniaturas = document.querySelectorAll('.miniatura-img');

    // Adiciona evento de clique a cada miniatura
    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', function() {
            // Troca a imagem principal pelo caminho da miniatura clicada
            const novaImagem = miniatura.getAttribute('data-imagem');
            imagemPrincipal.setAttribute('src', novaImagem);
        });
    });
});

