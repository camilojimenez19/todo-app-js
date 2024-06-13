import baseHTML from './app.html?raw'
import { ToDo } from './models/toDo';
import ToDoStore from '../store/toDo.store'
import { renderToDos } from './use-cases';
import toDoStore from '../store/toDo.store';

const ELEMENT_IDS = {
    TODO_LIST: '.todo-list',
    NEW_TODO_INPUT: '#new-todo-input'
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

    /** HTML references */
    const newDescriptionInput = document.querySelector(ELEMENT_IDS.NEW_TODO_INPUT)
    const toDoListUl = document.querySelector(ELEMENT_IDS.TODO_LIST)


    /** Listeners */
    newDescriptionInput.addEventListener('keyup', (event) => {
        
        if(
            event.keyCode !== 13 ||
            event.target.value.trim().length === 0
        ) return
        
        toDoStore.addToDo(event.target.value)
        displayToDos()
        event.target.value = ''
    });

    toDoListUl.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]')
        toDoStore.toggleToDo(element.getAttribute('data-id'))
        displayToDos()
    })

}