const element = document.querySelector("#root");

function App() {
	const [activity, setActivity] = React.useState("");
	const [edit, setEdit] = React.useState({});
	const [todos, setTodos] = React.useState([]);

	function generateId() {
		return Date.now();
	}
	function saveTodoHandler(event) {
		event.preventDefault();

		if (edit.id) {
			const updatedTodo = {
				id: edit.id,
				activity: activity,
			};

			const editTodoIndex = todos.findIndex(function (todo) {
				return todo.id === edit.id;
			});

			const updatedTodos = [...todos];
			updatedTodos[editTodoIndex] = updatedTodo;

			setTodos(updatedTodos);
			return cancelEditHandler();
		}

		setTodos([
			...todos,
			{
				id: generateId(),
				activity: activity,
			},
		]);

		cancelEditHandler();
	}
	function removeTodoHandler(todoId) {
		const filteredTodos = todos.filter(function (todo) {
			return todo.id !== todoId;
		});

		setTodos(filteredTodos);
		cancelEditHandler();
	}

	function editTodoHandler(todo) {
		setActivity(todo.activity);
		setEdit(todo);
	}

	function cancelEditHandler() {
		setActivity("");
		setEdit({});
	}

	return (
		<>
			<h1 className="title">Todo Lite ✅</h1>
			<img
				alt="nature"
				src="https://th.bing.com/th/id/R.baa8b83e6e6ce6a2dcd86082b59effca?rik=rUAlj4EmP%2f4ZLg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-8HfLPbR1n0M%2fVLREeYjL0pI%2fAAAAAAAAAb8%2fCxNo7Qn3vG0%2fs1600%2fTo-Do%2bList.png&ehk=8KCQGCqkoAv3Jb2lkwYw94QfJ71bxVu1ywp65%2b6%2bBD4%3d&risl=&pid=ImgRaw&r=0"
			/>
			<form onSubmit={saveTodoHandler}>
				<input
					type="text"
					placeholder="Add your plan here"
					value={activity}
					onChange={function (event) {
						setActivity(event.target.value);
					}}
				></input>
				<button className="sbmt-button" type="submit">
					{edit.id ? "SIMPAN PERUBAHAN" : "SUBMIT"}
				</button>
				{edit.id && (
					<button className="sbmt-button" onClick={cancelEditHandler}>
						BATAL
					</button>
				)}
			</form>
			<ul>
				{todos.map(function (todo) {
					return (
						<li key={todo.id}>
							{todo.activity}
							<button
								className="button"
								onClick={editTodoHandler.bind(this, todo)}
							>
								UBAH
							</button>

							<button
								className="button"
								onClick={removeTodoHandler.bind(this, todo.id)}
							>
								HAPUS
							</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

ReactDOM.render(<App />, element);
