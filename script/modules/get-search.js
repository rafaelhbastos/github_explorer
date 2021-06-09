import fetchUser from './fetch-user.js'

export default function getSearch () {
    const btn = document.querySelector('.btn');
    const input = document.querySelector('.input');
    
    btn.addEventListener('click', callFetch);
    window.addEventListener('keydown', enterCallFetch);

    function callFetch () {
        const user = input.value;
        input.value = '';
        fetchUser(`https://api.github.com/users/${user}`);
    }

    function enterCallFetch(event) {
        if (event.key === 'Enter') {
            const user = input.value;
            input.value = '';
            fetchUser(`https://api.github.com/users/${user}`);  
        }
    }
}