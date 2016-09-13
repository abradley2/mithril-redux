export const ADD = 'TodoActions.ADD'
export const EDIT_TITLE = 'TodoActions.EDIT_TITLE'
export const TOGGLE_COMPLETED = 'TodoActions.TOGGLE_COMPLETED'
export const REMOVE = 'TodoActions.REMOVE'

export const creators = {

	[ADD]: function () {
		return {
			type: ADD 
		}
	},

	[EDIT_TITLE]: function (todoId, title) {
		return {
			type: EDIT_TITLE,
			todoId: todoId,
			title: title
		}
	},

	[TOGGLE_COMPLETED]: function (todoId) {
		return {
			type: TOGGLE_COMPLETED,
			todoId: todoId
		}
	},

	[REMOVE]: function (todoId) {
		return {
			type: REMOVE,
			todoId: todoId
		}
	}

}