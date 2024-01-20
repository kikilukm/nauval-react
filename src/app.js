function Hello(props) {
	return <h1>Hello, {props.name}</h1>;
}

const root = document.querySelector("#root");

function tick() {
    
    const element = (
        <>
            <Hello name="Kiki"/>
            <h1>Waktu Sekarang Menunjukan:</h1>
            <h2>{new Date().toLocaleTimeString('en-US')}</h2>
        </>
    );
    
    
    
    ReactDOM.render(element, root);
}

setInterval(() => {tick()
    
}, 1000);