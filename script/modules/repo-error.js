export default function repoError() {
    const container = document.querySelector('.container');
    const message = document.createElement('p');
    message.classList.add('error-message');
    message.innerText = 'User has no repositories';
    container.appendChild(message);
}