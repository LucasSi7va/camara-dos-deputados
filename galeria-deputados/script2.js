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

}

































