export default function repoError(user,userRepos) {
    if (user.id) {
        if (!userRepos.length) {
            const container = document.querySelector('.container');
            const message = document.createElement('p');
            message.setAttribute("data-anime", "appear");
            message.classList.add('error-message');
            message.innerText = 'User has no repositories';
            container.appendChild(message);
        }
    }
}