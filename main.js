import './style.css'
import { App } from './src/toDos/app'
import TodoStore from './src/store/toDo.store'  


TodoStore.initStore()
App('#app');
