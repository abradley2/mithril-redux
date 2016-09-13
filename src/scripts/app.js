import m from 'mithril'
import {combineReducers} from 'redux'
import todos from './reducers/todos'

const app = combineReducers({
	_startComputation: startComputation,

	todos: todos,

	_endComputation: endComptuation
})


function startComputation (state = {}) {
	m.startComputation()
	return state
}

function endComptuation (state = {}) {
	m.endComputation()
	return state
}

export default app