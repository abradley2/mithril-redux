import {List, Map} from 'immutable'
import {generate as uid} from 'shortid'
import {
	ADD, 
	REMOVE, 
	EDIT_TITLE, 
	TOGGLE_COMPLETED
} from '../actions/TodoActions'

export default function (state = List([]), action) {

	switch (action.type) {

		case ADD:
			return state.push(
				Map({
					id: uid(),
					title: 'New Todo',
					completed: false
				})
			)

		case REMOVE:
			return state.filter(todo => {
				return todo.id !== action.todoId
			})

		case EDIT_TITLE:
			var idx = state.indexOf(todo => todo.id === action.todoId)
			
			return state.set(
				idx, 
				state.get(idx).set('title', action.title)
			)

		case TOGGLE_COMPLETED:
			var idx = state.indexOf(todo => todo.id === action.todoId)

			return state.set(
				idx,
				state.get(idx).set('completed', !state.get(idx).get('completed'))
			)

		default:
			return state
	}

}