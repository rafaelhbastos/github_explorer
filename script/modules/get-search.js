import fetchUser from './fetch-user.js'

export default function getSearch () {
    const btn = document.querySelector('.btn');
    const input = document.querySelector('.input');
    
    btn.addEventListener('click', callFetch);

    function callFetch () {
        fetchUser(`https://api.github.com/users/${input.value}`);
    }
}