import m from 'mithril'

function TodoController (args) {

}

function TodoView (ctrl, args) {
	return <div class='todo'>
		<div class='input-group'>
			<span class='input-group-btn'>
				<button 
					class={args.todo.completed ? 'btn btn-success' : 'btn btn-disabled'}
					onclick={args.onToggleCompleted}
				>
					O
				</button>
			</span>
			<input 
				class='form-control' 
				type='text'
				value={args.todo.title}
				onchange={e => {
					args.onEditTitle(e.target.value)
				}}
			/>
			<span class='input-group-btn'>
				<button class='btn btn-danger' onclick={args.onRemoveClick}>
					X
				</button>
			</span>
		</div>
	</div>
}

export default {
	controller: TodoController,
	view: TodoView
}