function Hello(props) {
	return <h1>Hello, {props.name}</h1>;
}

const root = document.querySelector("#root");

const element = (
	<>
		<Hello name="Kiki Lukman Hakim" />
		<Hello name="Kiki Hakim" />
		<Hello name="Kiki Lukman " />
	</>
);



ReactDOM.render(element, root);