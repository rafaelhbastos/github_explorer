export default function userError() {
    const container = document.querySelector('.container');
    const message = document.createElement('p');
    message.classList.add('error-message');
    message.innerText = 'User not Found';
    container.appendChild(message);
}