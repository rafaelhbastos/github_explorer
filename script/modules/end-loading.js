export default function endLoading() {
    const container = document.querySelector('.container');
    const loading = document.querySelector('.loader');
    const loadingText = document.querySelector('.loader-text');

    container.removeChild(loading);
    container.removeChild(loadingText);
}