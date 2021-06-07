export default function fillElement (user,userRepos) {
    const container = document.querySelector('.container');
    const list = document.createElement('ul');
    list.classList.add('list');

    userRepos.forEach(item => {
        const newElement = document.createElement('li');

        const elementPhoto = new Image();
        elementPhoto.src = user.avatar_url;
        elementPhoto.alt = 'default-photo';

        const elementRepository = document.createElement('div');
        elementRepository.classList.add('repository');

        const repositoryLink = document.createElement('a');
        repositoryLink.setAttribute('href', item.html_url);
        repositoryLink.setAttribute('target', 'blank');
        repositoryLink.innerText = item.full_name;

        const repositoryText = document.createElement('p');
        repositoryText.innerText = item.description;
            
        const elementArrow = document.createElement('span');
        elementArrow.classList.add('arrow-right');

        const arrowLink = document.createElement('a');
        arrowLink.setAttribute('href', item.html_url);
        arrowLink.setAttribute('target', 'blank');

        const arrowImg = new Image();
        arrowImg.src = './img/arrow-right.png';
        arrowImg.alt = 'arrow-right';
            
        elementRepository.appendChild(repositoryLink);
        elementRepository.appendChild(repositoryText);

        arrowLink.appendChild(arrowImg);
        elementArrow.appendChild(arrowLink);

        newElement.appendChild(elementPhoto);
        newElement.appendChild(elementRepository);
        newElement.appendChild(elementArrow);

        list.appendChild(newElement);
    });
    container.appendChild(list);
}