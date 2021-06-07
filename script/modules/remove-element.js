export default function removeElement() {
    const container = document.querySelector('.container');
    const list = document.querySelector('.list');
    const message = document.querySelector('.error-message')
    if(list) {
        container.removeChild(list);
    } else if (message) {
        container.removeChild(message);
    }
}