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

import Todo from '../components/Todo'

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
			return <Todo
				todo={todo}
				onEditTitle={title => {
					console.log('edit title of ',todo.id, title)
					ctrl.actions[EDIT_TITLE](todo.id, title)
				}}
				onToggleCompleted={() => {
					ctrl.actions[TOGGLE_COMPLETED](todo.id)
				}}
				onRemoveClick={() => {
					ctrl.actions[REMOVE](todo.id)
				}}
			/>
		})}
		</div>
	</div>
}

export default {
	controller: TodoListController,
	view: TodoListView
}