import toDoStore, { Filters } from "../../store/toDo.store";

let element;
/**
 * 
 * @param {String} elementId 
 */
export const renderPendingToDos = (elementId) => {

    if (!element)
        element = document.querySelector(elementId)
    if (!element)
        throw new Error(`Element ${elementId} not found`)

    element.innerHTML = toDoStore.getToDos(Filters.PENDING).length
}