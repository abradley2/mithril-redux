import m from 'mithril'
import store from './store'
import TodoList from './views/TodoList'

store.dispatch({
	type: "Let's get this party started!"
})

document.addEventListener('DOMContentLoaded', function () {

	m.route(document.querySelector('body'), '/app', {
		'/app': TodoList,
		'/app/todos': TodoList,
		'/app/todos/:filter': TodoList
	})

})
