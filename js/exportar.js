function exportarMotosCSV() {
  const motos = JSON.parse(localStorage.getItem('motos')) || [];
  if (motos.length === 0) return alert('Nenhuma moto para exportar.');

  const csv = [
    ['Placa', 'Modelo', 'Cor', 'Status'],
    ...motos.map(m => [m.placa, m.modelo, m.cor, m.status])
  ];

  baixarCSV(csv, 'motos.csv');
}

function exportarInfracoesCSV() {
  const infracoes = JSON.parse(localStorage.getItem('infracoes')) || [];
  if (infracoes.length === 0) return alert('Nenhuma infração para exportar.');

  const csv = [
    ['Nome', 'Placa', 'Tipo', 'Data', 'Multa'],
    ...infracoes.map(i => [i.nome, i.placa, i.tipo, i.data, i.multa])
  ];

  baixarCSV(csv, 'infracoes.csv');
}

function baixarCSV(linhas, nomeArquivo) {
  const csvContent = linhas.map(l => l.join(';')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.setAttribute('href', url);
  link.setAttribute('download', nomeArquivo);
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}