function login() {
  const usuario = document.getElementById('usuario').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const perfil = document.getElementById('perfil').value;

  if (usuario && senha) {
    localStorage.setItem('usuarioLogado', JSON.stringify({ usuario, perfil }));
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('loginErro').style.display = 'block';
  }
}

function verificarLogin(permissoes = []) {
  const dados = localStorage.getItem('usuarioLogado');
  if (!dados) {
    window.location.href = 'index.html';
    return;
  }

  const { perfil } = JSON.parse(dados);
  if (permissoes.length && !permissoes.includes(perfil)) {
    alert('Acesso negado!');
    window.location.href = 'index.html';
  }
}

function logout() {
  localStorage.removeItem('usuarioLogado');
  window.location.href = 'index.html';
}
