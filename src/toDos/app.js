import baseHTML from './app.html?raw'
import { ToDo } from './models/toDo';
import ToDoStore from '../store/toDo.store'
import { renderToDos } from './use-cases';

const ELEMENT_IDS = {
    TODO_LIST: '.todo-list'
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayToDos = () => {
        const toDos = ToDoStore.getToDos(ToDoStore.getCurrentFilter())
        renderToDos(ELEMENT_IDS.TODO_LIST, toDos)
    }

    /** When the app started */
    (() => {
        const app = document.createElement('div')
        app.innerHTML = baseHTML
        document.querySelector(elementId).append(app)
        displayToDos()
    })();

}