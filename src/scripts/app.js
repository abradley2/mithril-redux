import m from 'mithril'
import {combineReducers} from 'redux'
import todos from './reducers/todos'

const app = combineReducers({
	todos: todos
})

export default app
