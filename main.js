const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('night-mode')
})

function inputbox() {
  var nome = document.getElementById("nome").value;
  localStorage.setItem("nome", nome);

  var senha = document.getElementById("senha").value;
  localStorage.setItem("senha", senha);
}