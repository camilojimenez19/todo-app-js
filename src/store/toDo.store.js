import { ToDo } from "../toDos/models/toDo";

const Filters = {
    ALL: 'all',
    COMPLETED: 'completed',
    PENDING: 'pending'
}


const state = {
    todos: [
        new ToDo('Piedra del alma'),
        new ToDo('Piedra del infinito'),
        new ToDo('Piedra del tiempo'),
    ],
    filter: Filters.ALL
}

const initStore = () => {
    console.log(state)
    console.log('InitStore 🥑');
}

const loadStore = () => {
    throw new Error('Not implemented')
}


/**
 * Get ToDo's
 * @param {String} filter 
 * @returns {Array<ToDo>} 
 */
const getToDos = (filter = Filters.ALL) => {
    switch (filter) {
        case Filters.ALL:
            return [...state.todos]
        case Filters.COMPLETED:
            return state.todos.filter( todo => todo.done)
        case Filters.PENDING:
            return state.todos.filter( todo => !todo.done)
        default:
            throw new Error(`Option ${filter} is not valid.`)
    }
}

/**
 * Add new ToDo
 * @param {String} description 
 */
const addToDo = (description) => {
    if(!description) throw new Error('Description is required')
    state.todos.push(new ToDo(description))
}

/**
 * Toggle ToDo By id
 * @param {String} todoId Todo Id
 */
const toggleToDo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId)
            todo.done = !todo.done
        return todo
    }) 
}

/**
 * Delete one ToDo by Id
 * @param {String} todoId Id ToDo
 */
const deleteToDo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)
}

/**
 * Delete toDo's completed
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done)
}

/**
 * Set new filter
 * @param {Filters} newFilter option filter
 */
const setFilter = (newFilter = Filters.ALL) => {
    if(!Object.keys(Filters).includes(newFilter))
        throw new Error('The selected filter is invalid')
    state.filter = newFilter
}

/**
 * Return the current filter selected
 * @returns {String} Option filter selected
 */
const getCurrentFilter = () => {
    return state.filter
}


export default {
    initStore,
    loadStore,
    addToDo,
    toggleToDo,
    deleteToDo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getToDos,
}