import * as m from 'mithril'

var App = {
	controller: function () {

	},
	view: function () {
		return <h3 class='title'>Hello World!</h3>
	}
}

document.addEventListener('DOMContentLoaded', function () {
	m.mount(
		document.querySelector('body'),
		App
	)
})
