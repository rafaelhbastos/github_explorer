export default function listSmoothly() {
  const listAll = setInterval(activeBlock, 10);
  
  function activeBlock() {
    const list = document.querySelectorAll('.list li');
    if(list.length){
      list.forEach(repo => {
        repo.classList.add('active');
        clearInterval(listAll);
      });
    }
  }
}