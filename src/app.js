const element = document.querySelector("#root");

function App() {
	const [activity, setActivity] = React.useState("");
	const [todos, setTodos] = React.useState([]);

	function generateId() {
		return Date.now();
	}
	function submitHandler(event) {
		event.preventDefault();
		setTodos([
			...todos,
			{
				id: generateId(),
				activity: activity,
			},
		]);
		setActivity("");
	}

	function deleteHandler() {
		console.log('hapus')
	}

	return (
		<>
			<h1>Todo todos Lite</h1>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					placeholder="Add your plan here"
					value={activity}
					onChange={function (event) {
						setActivity(event.target.value);
					}}
				></input>
				<button type="submit">SUBMIT</button>
			</form>
			<ul>
				{todos.map(function (todo) {
					return (
						<li key={todo.id}>
							{todo.activity}
							<button onClick={deleteHandler}>DELETE</button>
						</li>
					);
				})}
			</ul>
		</>
	);
}

ReactDOM.render(<App />, element);
