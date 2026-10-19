const campoTamanho = document.getElementById("tamanho");
const checkNumeros = document.getElementById("numeros");
const checkSimbolos = document.getElementById("simbolos");
const campoSenha = document.getElementById("senha");
const aviso = document.getElementById("aviso");

function gerarSenha() {
  const tamanho = parseInt(campoTamanho.value);

  if (isNaN(tamanho) || tamanho < 4 || tamanho > 32) {
    aviso.style.color = "red";
    aviso.textContent = "Escolha um tamanho entre 4 e 32.";
    return;
  }

  let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (checkNumeros.checked) {
    caracteres += "0123456789";
  }
  if (checkSimbolos.checked) {
    caracteres += "!@#$%&*?";
  }

  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    const posicao = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[posicao];
  }

  campoSenha.value = senha;
  aviso.textContent = "";
}

function copiarSenha() {
  if (campoSenha.value === "") {
    aviso.style.color = "red";
    aviso.textContent = "Gere uma senha primeiro.";
    return;
  }

  navigator.clipboard.writeText(campoSenha.value);
  aviso.style.color = "green";
  aviso.textContent = "Senha copiada!";
}

document.getElementById("gerar").addEventListener("click", gerarSenha);
document.getElementById("copiar").addEventListener("click", copiarSenha);
