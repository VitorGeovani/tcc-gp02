// Definindo as variáveis para os elementos relevantes
const modalCv = new bootstrap.Modal(document.getElementById('modalCv'));
const cvFrame = document.getElementById('cvFrame');
const cvDownloadLink = document.getElementById('cvDownloadLink');

// Definindo a função para mostrar o modal com o currículo
function showCvModal(cvFile) {
    cvFrame.setAttribute('src', cvFile);
    cvDownloadLink.setAttribute('href', cvFile);
    modalCv.show();
}

// Adicionando o evento de clique para cada botão "Ver Currículo"
const btnVerCv = document.querySelectorAll('.btn-ver-cv');
btnVerCv.forEach(btn => {
    const cvFile = btn.getAttribute('data-cv');
    btn.addEventListener('click', () => showCvModal(cvFile));
});
