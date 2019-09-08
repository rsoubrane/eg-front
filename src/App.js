import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import ExercisesList from "./components/Exercises/ExercisesList";
import EditExercise from "./components/Exercises/EditExercise";
import CreateExercise from "./components/Exercises/CreateExercise";
import CreateUser from "./components/User/CreateUser";

function App() {
	return (
		<Router>
			<Navbar />
			<div className='container'>
				<br />
				<Route path='/' exact component={ExercisesList} />
				<Route path='/edit/:id' component={EditExercise} />
				<Route path='/create' component={CreateExercise} />
				<Route path='/user' component={CreateUser} />
			</div>
		</Router>
	);
}

export default App;
