import { createToDoHTML } from "./create-todo-html";

let element;

/**
 *  
 * @param {String} elementId 
 * @param {Array<ToDo>} toDos 
 */
export const renderToDos = (elementId, toDos = []) => {

    if(!element)
        element = document.querySelector(elementId);

    if (!element) throw new Error(`Element ${elementId} not found`)

    element.innerHTML = ''
    
    toDos.forEach( todo => {
        element.append(createToDoHTML(todo))
    })

}