function consultarPlaca() {
  const placa = document.getElementById('consultaPlaca').value.trim().toUpperCase();
  const motos = JSON.parse(localStorage.getItem('motos')) || [];
  const moto = motos.find(m => m.placa === placa);

  const resultado = document.getElementById('resultadoConsulta');
  if (!moto) {
    resultado.innerHTML = '<div class="alert red">Moto não encontrada!</div>';
    return;
  }

  const statusClass = moto.status === 'normal' ? 'green' : 'red';
  resultado.innerHTML = `
    <div class="alert ${statusClass}">
      <strong>Placa:</strong> ${moto.placa}<br>
      <strong>Modelo:</strong> ${moto.modelo}<br>
      <strong>Cor:</strong> ${moto.cor}<br>
      <strong>Status:</strong> ${moto.status}
    </div>
  `;
}

function consultarBracao() {
  const nome = document.getElementById('consultaBracao').value.trim();
  const historicoBracoes = JSON.parse(localStorage.getItem('historicoBracoes')) || {};

  const resultado = document.getElementById('resultadoBracao');
  if (!historicoBracoes[nome]) {
    resultado.innerHTML = '<div class="alert red">Bração não encontrado!</div>';
    return;
  }

  resultado.innerHTML = `
    <div class="alert red">
      <strong>Nome:</strong> ${nome}<br>
      <strong>Histórico:</strong><br>${historicoBracoes[nome]}
    </div>
  `;
}

function consultarInfracoes() {
  const placa = document.getElementById('consultaInfracaoPlaca').value.trim().toUpperCase();
  const infracoes = JSON.parse(localStorage.getItem('infracoes')) || [];

  const lista = document.getElementById('listaInfracoes');
  lista.innerHTML = '';

  const filtradas = infracoes.filter(i => i.placa === placa);
  if (filtradas.length === 0) {
    lista.innerHTML = '<div class="alert red">Nenhuma infração encontrada para esta placa.</div>';
    return;
  }

  filtradas.forEach(i => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${i.tipo}</strong> - ${new Date(i.data).toLocaleString('pt-BR')} - R$${i.multa},00`;
    lista.appendChild(li);
  });
}
