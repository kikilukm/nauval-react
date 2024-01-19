function Hello(props) {
  return /*#__PURE__*/React.createElement("h1", null, "Hello, ", props.name);
}
const root = document.querySelector("#root");
const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hello, {
  name: "Kiki Lukman Hakim"
}), /*#__PURE__*/React.createElement(Hello, {
  name: "Kiki Hakim"
}), /*#__PURE__*/React.createElement(Hello, {
  name: "Kiki Lukman "
}));
ReactDOM.render(element, root);