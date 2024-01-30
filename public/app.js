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
  function deleteHandler() {
    console.log('hapus');
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Todo todos Lite"), /*#__PURE__*/React.createElement("form", {
    onSubmit: submitHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Add your plan here",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "SUBMIT")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, /*#__PURE__*/React.createElement("button", {
      onClick: deleteHandler
    }, "DELETE"));
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), element);