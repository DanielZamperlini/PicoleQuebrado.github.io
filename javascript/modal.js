export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const adicionarModal = document.querySelector('.slide-shapes li')
  console.log(adicionarModal)
  
  if(botaoAbrir && botaoFechar && containerModal) {
    
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }
    function cliqueForaModal(event) {
      if(event.target === this) {
        toggleModal(event);
      }
    }
    function addModal(event) {
      event.preventDefault();
      adicionarModal.classList.toggle('oi')
    }
  
    botaoAbrir.addEventListener('click', toggleModal , addModal);
    botaoFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', cliqueForaModal);
  }
}

