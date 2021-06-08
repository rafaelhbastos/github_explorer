export default function loading() {
    const container = document.querySelector('.container');
    const loading = document.createElement('div');
    const loadingText = document.createElement('p');
    loadingText.innerText = 'Loading...'
    loadingText.classList.add('loader-text');
    loading.classList.add('loader');
    container.appendChild(loading);
    container.appendChild(loadingText);
}