import fillElement from './fill-element.js'
import userError from './user-error.js'
import repoError from './repo-error.js'

export default async function fetchUser (url) {
    try {
        const user = await fetch(url);
        const userJSON = await user.json(); 
        const userRepos = await fetch(`${url}/repos`);
        const userReposJSON = await userRepos.json();

        if(!userReposJSON.length) {
            repoError();
        } else {
            fillElement(userJSON, userReposJSON);
        };

    } catch(error) {  
        userError();
    };
}