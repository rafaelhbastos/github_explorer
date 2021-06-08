export default function endLoading() {
    const container = document.querySelector('.container');
    const loading = document.querySelector('.loader');
    const loadingText = document.querySelector('.loader-text');

    const list = document.querySelector('.list');
    
    if(list){
        list.classList.add('active');
    }


    container.removeChild(loading);
    container.removeChild(loadingText);

}