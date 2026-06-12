// =========================
// PESQUISA DAS CATALOGOS
// =========================  
    
    const pesquisaInput = document.getElementById("pesquisaPlanta");
    const cards = document.querySelectorAll(".catalogoPlantas");
    const botoesFiltro = document.querySelectorAll(".filtroBtn");

    let categoriaAtual = "Todos";

    // Só ativa o catálogo se o input dele existir na página
    if (pesquisaInput) {
        // Função Principal
        function filtrarCatalogo() {
            const textoPesquisa = pesquisaInput.value.toLowerCase();

            cards.forEach(card => {
                const nomePlanta = card
                    .querySelector(".nomePlanta")
                    .textContent
                    .toLowerCase();

                const categoriaCard = card.dataset.category;

                // Verifica Pesquisa
                const combinaPesquisa = nomePlanta.includes(textoPesquisa);

                // Verifica Categoria
                const combinaCategoria =
                    categoriaAtual === "Todos" ||
                    categoriaCard === categoriaAtual;

                // Mostra ou Esconde
                if (combinaPesquisa && combinaCategoria) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        }

        // Pesquisa
        pesquisaInput.addEventListener("input", filtrarCatalogo);

        // Filtros
        botoesFiltro.forEach(botao => {
            botao.addEventListener("click", () => {
                categoriaAtual = botao.dataset.filter;
                filtrarCatalogo();
            });
        });
    }

// =========================
// PESQUISA DAS RECEITAS
// =========================

    const pesquisaReceitas = document.getElementById("pesquisaReceitas");

    if (pesquisaReceitas) {
        // Selecionamos as listas (ul) dentro de .divisao3
        const listasCategorias = document.querySelectorAll(".divisao3 ul");

        pesquisaReceitas.addEventListener("input", () => {
            const texto = pesquisaReceitas.value.toLowerCase().trim();

            listasCategorias.forEach(ul => {
                // O título (h2) está logo antes da lista (ul) no seu HTML
                const titulo = ul.previousElementSibling; 
                const itens = ul.querySelectorAll("li");
                
                let temItemVisivel = false;

                itens.forEach(item => {
                    const nomeReceita = item.textContent.toLowerCase();

                    if (nomeReceita.includes(texto)) {
                        item.style.display = ""; // Mostra o item da lista
                        temItemVisivel = true;   // Avisa que essa categoria tem conteúdo válido
                    } else {
                        item.style.display = "none"; // Esconde o item
                    }
                });

                // Se houver algum item visível (ou se a pesquisa estiver vazia), mostra o título e a lista. 
                // Caso contrário, esconde o título e a lista inteira.
                if (temItemVisivel || texto === "") {
                    if (titulo && titulo.tagName === "H2") titulo.style.display = "";
                    ul.style.display = "";
                } else {
                    if (titulo && titulo.tagName === "H2") titulo.style.display = "none";
                    ul.style.display = "none";
                }
            });
        });
    }