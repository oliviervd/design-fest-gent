import { render } from 'preact';
import Router from "preact-router";
import './style.css';
import {useEffect, useState} from "preact/hooks";
import Home from "./pages/home";
import About from "./pages/about";
import People from "./pages/people";

const App = () => {

	const [language, setLanguage] = useState("en")

	return (
		<Router>
			<Home path={"/"}/>
			<About path={"/about"} />
			<People path={"/people"} />
		</Router>
	);
}

render(<App />, document.body);