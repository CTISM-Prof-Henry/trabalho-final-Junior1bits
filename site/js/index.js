document.addEventListener('DOMContentLoaded', function() {

    const buscaInput = document.querySelector('input');


    if (!buscaInput) {
        console.error("Campo de busca não encontrado!");
        return;
    }


    const todosOsCards = document.querySelectorAll('.card');


    console.log(`Encontrados ${todosOsCards.length} livros`);


    function filtrarLivros() {
        const textoBuscado = buscaInput.value.toLowerCase();

        for (let i = 0; i < todosOsCards.length; i++) {
            const card = todosOsCards[i];
            const titulo = card.querySelector('h3').innerText.toLowerCase();

            if (titulo.includes(textoBuscado)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    }


    buscaInput.addEventListener('input', filtrarLivros);

});