import userError from './user-error.js'
import repoError from './repo-error.js'
import removeElement from './remove-element.js'
import fillElement from './fill-element.js'

export default async function fetchUser (url) {
    try {
        const user = await fetch(url);
        const userJSON = await user.json(); 
        const userRepos = await fetch(`${url}/repos`);
        const userReposJSON = await userRepos.json();
        removeElement();
        repoError(userJSON, userReposJSON);
        fillElement(userJSON, userReposJSON);
    } catch {  
        userError();
    }
}