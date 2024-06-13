import { ToDo } from "../models/toDo";

/**
 * 
 * @param {ToDo} toDo 
 */
export const createToDoHTML = (toDo) => {
    if(!toDo) throw new Error('A TODO object is required')

    const { id, done, description} = toDo

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
            <label>${description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `

    const liElement = document.createElement('li')
    liElement.setAttribute('data-id', id)
    liElement.innerHTML = html
    
    if(toDo.done)
        liElement.classList.add('completed')

    return liElement
}