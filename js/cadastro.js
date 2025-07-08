function cadastrarMoto() {
  const placa = document.getElementById('placa').value.trim().toUpperCase();
  const modelo = document.getElementById('modelo').value.trim();
  const cor = document.getElementById('cor').value.trim();
  const status = document.getElementById('status').value;

  if (!placa || !modelo || !cor || !status) {
    document.getElementById('feedbackMoto').innerHTML = '<div class="alert red">Preencha todos os campos.</div>';
    return;
  }

  const motos = JSON.parse(localStorage.getItem('motos')) || [];
  if (motos.some(m => m.placa === placa)) {
    document.getElementById('feedbackMoto').innerHTML = '<div class="alert red">Placa já cadastrada.</div>';
    return;
  }

  motos.push({ placa, modelo, cor, status });
  localStorage.setItem('motos', JSON.stringify(motos));

  document.getElementById('feedbackMoto').innerHTML = '<div class="alert green">Moto cadastrada!</div>';
}

function cadastrarBandido() {
  const nome = document.getElementById('nomeBandido').value.trim();
  const cpf = document.getElementById('cpfBandido').value.trim();
  const rg = document.getElementById('rgBandido').value.trim();

  if (!nome || !cpf || !rg) {
    document.getElementById('feedbackBandido').innerHTML = '<div class="alert red">Preencha todos os campos.</div>';
    return;
  }

  const bandidos = JSON.parse(localStorage.getItem('bandidos')) || [];
  bandidos.push({ nome, cpf, rg });
  localStorage.setItem('bandidos', JSON.stringify(bandidos));

  document.getElementById('feedbackBandido').innerHTML = '<div class="alert red">Bandido registrado!</div>';
}

function cadastrarBracao() {
  const nome = document.getElementById('nomeBracao').value.trim();
  const historico = document.getElementById('historicoBracao').value.trim();

  if (!nome || !historico) {
    document.getElementById('feedbackBracao').innerHTML = '<div class="alert red">Preencha todos os campos.</div>';
    return;
  }

  const bracoes = JSON.parse(localStorage.getItem('bracoes')) || [];
  const historicoBracoes = JSON.parse(localStorage.getItem('historicoBracoes')) || {};
  bracoes.push(nome);
  historicoBracoes[nome] = historico;

  localStorage.setItem('bracoes', JSON.stringify(bracoes));
  localStorage.setItem('historicoBracoes', JSON.stringify(historicoBracoes));

  document.getElementById('feedbackBracao').innerHTML = '<div class="alert red">Bração registrado!</div>';
}

function registrarInfracao() {
  const nome = document.getElementById('nomeInfrator').value.trim();
  const placa = document.getElementById('placaInfracao').value.trim().toUpperCase();
  const tipo = document.getElementById('tipoInfracao').value;
  const data = document.getElementById('dataInfracao').value;

  if (!nome || !placa || !tipo || !data) {
    document.getElementById('feedbackInfracao').innerHTML = '<div class="alert red">Preencha todos os campos.</div>';
    return;
  }

  const multa = tipo === 'Alta Velocidade' ? 500 :
                tipo === 'Fuga' ? 1000 :
                tipo === 'Ultrapassagem Proibida' ? 300 : 150;

  const infracoes = JSON.parse(localStorage.getItem('infracoes')) || [];
  infracoes.push({ nome, placa, tipo, data, multa });
  localStorage.setItem('infracoes', JSON.stringify(infracoes));

  document.getElementById('feedbackInfracao').innerHTML =
    `<div class="alert red">Infração registrada! Multa: R$${multa},00</div>`;
}
