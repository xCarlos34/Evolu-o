document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button'); // Seleciona os botões das abas

    tabButtons.forEach(tab => {
        tab.addEventListener('click', function() {
            tabClicked(tab);
        });
    });

    const tabClicked = (tab) => {
        // Esconde todos os conteúdos
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => content.classList.remove('show'));

        // Pega o id do conteúdo associado ao botão
        const contentId = tab.getAttribute('content-id');
        const content = document.getElementById(contentId);

        // Exibe o conteúdo associado ao botão clicado
        if (content) {
            content.classList.add('show');
        }
    };
});
