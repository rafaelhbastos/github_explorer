export default function listSmoothly() {
  const listAll = setInterval(activeBlock, 100);
  
  function activeBlock() {
    const list = document.querySelectorAll('.list li');
    const message = document.querySelector('.error-message');
    if(list.length){
      list.forEach(repo => {
        repo.classList.add('active');
        clearInterval(listAll);
      });
    }
    if(message) {
      message.classList.add('active');
      clearInterval(listAll);
    }
  }
}