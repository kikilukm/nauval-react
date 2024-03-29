const element = document.querySelector("#root");
function App() {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState("");
  function generateId() {
    return Date.now();
  }
  function saveTodoHandler(event) {
    event.preventDefault();
    if (!activity) {
      return setMessage("Aktivitas tidak boleh kosong ....!!!!");
    }
    if (edit.id) {
      const updatedTodo = {
        ...edit,
        activity: activity
      };
      const editTodoIndex = todos.findIndex(function (todo) {
        return todo.id === edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancelEditHandler();
    }
    setTodos([...todos, {
      id: generateId(),
      activity: activity,
      done: false
    }]);
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
    setMessage("");
  }
  function doneTodoHandler(todo) {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(function (currentTodo) {
      return currentTodo.id === todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
    // console.log(updatedTodos)
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Todo Lite \u2705"), /*#__PURE__*/React.createElement("img", {
    alt: "nature",
    src: "https://th.bing.com/th/id/R.baa8b83e6e6ce6a2dcd86082b59effca?rik=rUAlj4EmP%2f4ZLg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-8HfLPbR1n0M%2fVLREeYjL0pI%2fAAAAAAAAAb8%2fCxNo7Qn3vG0%2fs1600%2fTo-Do%2bList.png&ehk=8KCQGCqkoAv3Jb2lkwYw94QfJ71bxVu1ywp65%2b6%2bBD4%3d&risl=&pid=ImgRaw&r=0"
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, message && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "red"
    }
  }, message), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Tambahkan disini",
    value: activity,
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "sbmt-button",
    type: "submit"
  }, edit.id ? "SIMPAN PERUBAHAN" : "SUBMIT"), edit.id && /*#__PURE__*/React.createElement("button", {
    className: "sbmt-button",
    onClick: cancelEditHandler
  }, "BATAL")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      onChange: doneTodoHandler.bind(this, todo),
      checked: todo.done
    }), todo.activity, todo.done ? " (Sudah Selesai)" : " (Belum Selesai)", /*#__PURE__*/React.createElement("button", {
      className: "button",
      onClick: editTodoHandler.bind(this, todo)
    }, "UBAH"), /*#__PURE__*/React.createElement("button", {
      className: "button",
      onClick: removeTodoHandler.bind(this, todo.id)
    }, "HAPUS"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Belum ada aktivitas..")));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), element);