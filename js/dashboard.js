function carregarDashboard() {
  const motos = JSON.parse(localStorage.getItem('motos')) || [];
  const bandidos = JSON.parse(localStorage.getItem('bandidos')) || [];
  const bracoes = JSON.parse(localStorage.getItem('bracoes')) || [];
  const infracoes = JSON.parse(localStorage.getItem('infracoes')) || [];

  document.getElementById('totalMotos').innerText = motos.length;
  document.getElementById('totalFurtadas').innerText = motos.filter(m => m.status === 'furtada').length;
  document.getElementById('totalBandidos').innerText = bandidos.length;
  document.getElementById('totalBracoes').innerText = bracoes.length;

  atualizarOcorrencias(motos, infracoes);
}

function atualizarOcorrencias(motos, infracoes) {
  const lista = document.getElementById('listaOcorrencias');
  lista.innerHTML = '';

  const motosFurtadas = motos.filter(m => m.status === 'furtada');
  motosFurtadas.forEach(moto => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${moto.placa}</strong> - ${moto.modelo} (${moto.cor})`;

    const infraRelacionadas = infracoes.filter(i => i.placa === moto.placa);
    if (infraRelacionadas.length) {
      const ul = document.createElement('ul');
      infraRelacionadas.slice(-3).forEach(inf => {
        const infLi = document.createElement('li');
        infLi.innerHTML = `&rarr; ${inf.tipo} em ${new Date(inf.data).toLocaleString('pt-BR')}`;
        ul.appendChild(infLi);
      });
      li.appendChild(ul);
    }

    lista.appendChild(li);
  });
}
