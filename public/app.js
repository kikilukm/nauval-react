const element = document.querySelector("#root");
function App() {
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  function generateId() {
    return Date.now();
  }
  function submitHandler(event) {
    event.preventDefault();
    setTodos([...todos, {
      id: generateId(),
      activity: activity
    }]);
    setActivity("");
  }
  function removeTodoHandler(todoId) {
    const filterTodos = todos.filter(function (todos) {
      return todos.id !== todoId;
    });
    setTodos(filterTodos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Todo Lite \u2705"), /*#__PURE__*/React.createElement("img", {
    src: "https://th.bing.com/th/id/R.baa8b83e6e6ce6a2dcd86082b59effca?rik=rUAlj4EmP%2f4ZLg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-8HfLPbR1n0M%2fVLREeYjL0pI%2fAAAAAAAAAb8%2fCxNo7Qn3vG0%2fs1600%2fTo-Do%2bList.png&ehk=8KCQGCqkoAv3Jb2lkwYw94QfJ71bxVu1ywp65%2b6%2bBD4%3d&risl=&pid=ImgRaw&r=0"
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: submitHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Add your plan here",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "sbmt-button",
    type: "submit"
  }, "SUBMIT")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, /*#__PURE__*/React.createElement("button", null, " ", "EDIT"), /*#__PURE__*/React.createElement("button", {
      className: "button",
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "DELETE"));
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), element);