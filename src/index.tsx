import { render } from 'preact';
import Router from "preact-router";
import './style.css';
import {useEffect, useState} from "preact/hooks";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {

	const [language, setLanguage] = useState("en")

	return (
		<Router>
			<Home path={"/"}/>
			<About path={"/about"} />
		</Router>
	);
}

render(<App />, document.body);