import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/accueil" element={<Home />} />
					<Route path="/details" element={<Details />} />
					<Route path="/details/:id" element={<Details />} />
					<Route path="/" element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
