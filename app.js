//console.log(dados);
function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    if (!campoPesquisa)
    {
        section.innerHTML = "<p>Nenhum Livro Encontrado! Digite o nome de um livro.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) 
    {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
            resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <P class="descricao-meta">${dado.descricao}</P>
            <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
        `
        }

    }
    
    section.innerHTML = resultados

}

