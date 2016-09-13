import m from 'mithril'
import {bindActionCreators} from 'redux'
import store from '../store'
import {
	creators,
	ADD,
	REMOVE,
	EDIT_TITLE,
	TOGGLE_COMPLETED
} from '../actions/TodoActions'

function TodoListController (args) {
	this.actions = bindActionCreators(creators, store.dispatch)
}

function TodoListView (ctrl, args) {
	const filter = m.route.param('filter') || 'all'
	const todos = store.getState().todos.toJS()

	return <div>
		<div>
			<button onclick={ctrl.actions[ADD]}>
				Add Todo
			</button>
		</div>
		<div class='todos'>
		{todos.map(todo => {
			return <h3>{todo.title}</h3>
		})}
		</div>
	</div>
}

export default {
	controller: TodoListController,
	view: TodoListView
}