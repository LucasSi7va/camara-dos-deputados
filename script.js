// Função para buscar deputados
const deputadosAPI = "https://dadosabertos.camara.leg.br/api/v2/deputados";
let deputados = [];

fetch(deputadosAPI)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro na requisição:" + response.status);
    }
    return response.json();
  })
  .then(data => {
    deputados = data.dados;
    displayDeputados(deputados);
  })
  .catch(error => {
    console.error("Erro na chamada da API:", error);
  });

const searchDeputadosInput = document.getElementById('search-deputados');
const resultsDeputadosDiv = document.getElementById('resultado-deputados');

searchDeputadosInput.addEventListener('input', () => {
  const query = searchDeputadosInput.value.toLowerCase();
  const filteredDeputados = deputados.filter(deputado => 
    deputado.nome.toLowerCase().includes(query)
  );
  displayDeputados(filteredDeputados);
});

function displayDeputados(deputados) {
  resultsDeputadosDiv.innerHTML = '';
  deputados.forEach(deputado => {
    let item = document.createElement("div");
    item.className = 'deputado';
    item.innerHTML = `
      <img src="${deputado.urlFoto}" alt="Foto de ${deputado.nome}">
      <p>${deputado.nome}</p>
    `;
    resultsDeputadosDiv.appendChild(item);
  });

  deputados.forEach(deputado => {
    const elements = document.querySelectorAll('.deputado');
    elements.forEach(element => {
      if (element.innerText.toLowerCase().includes(deputado.nome.toLowerCase())) {
        element.style.display = 'inline-block';
      } else {
        element.style.display = 'none';
      }
    });
  });
}



// menu-bar
var menubar = document.getElementById("mobile-menu");

// Adiciona um ouvinte de evento de clique ao botão
document.getElementById("menu-opcao").addEventListener("click", function() {
  // Verifica se o menu está atualmente oculto
  if (menubar.style.display === "none" || menubar.style.display === "") {
    // Se estiver oculto, exibe o menu
    menubar.style.display = "block";
  } else {
    // Se estiver visível, oculta o menu
    menubar.style.display = "none";
  }
});


































