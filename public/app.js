function Hello(props) {
  return /*#__PURE__*/React.createElement("h1", null, "Hello, ", props.name);
}
const root = document.querySelector("#root");
function tick() {
  const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hello, {
    name: "Kiki"
  }), /*#__PURE__*/React.createElement("h1", null, "Waktu Sekarang Menunjukan:"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString('en-US')));
  ReactDOM.render(element, root);
}
setInterval(() => {
  tick();
}, 1000);