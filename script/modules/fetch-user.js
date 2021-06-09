import userError from './user-error.js'
import repoError from './repo-error.js'
import removeElement from './remove-element.js'
import fillElement from './fill-element.js'
import loading from './loading.js'
import endLoading from './end-loading.js'
import listSmoothly from './list-smoothly.js'

export default async function fetchUser (url) {
    try {
        removeElement();
        loading();
        const user = await fetch(url);
        const userJSON = await user.json(); 
        const userRepos = await fetch(`${url}/repos`);
        const userReposJSON = await userRepos.json();
        repoError(userJSON, userReposJSON);
        fillElement(userJSON, userReposJSON);
    } catch {  
        userError();
    } finally {
        endLoading();
        listSmoothly();
    }
}