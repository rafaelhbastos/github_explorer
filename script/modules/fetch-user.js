import fillElement from './fill-element.js'

export default async function fetchUser (url) {
    try {
        const response = await (await fetch(url)).json();
        fillElement(response);
    } catch(error) {  
        const err = error;
    }
}