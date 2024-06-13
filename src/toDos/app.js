import baseHTML from './app.html?raw'

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    /** When the app started */
    (() => {
        const app = document.createElement('div')
        app.innerHTML = baseHTML
        document.querySelector(elementId).append(app)
    })();

}