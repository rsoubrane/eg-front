import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-dark bg-dark navbar-expand-md'>
				<Link to='/' className='navbar-brand'>
					Eptic Games
				</Link>
				<div className='collpase navbar-collapse'>
					<ul className='navbar-nav mr-auto'>
						<li className='navbar-item'>
							<Link to='/' className='nav-link'>
								Exercises
							</Link>
						</li>
						<li className='navbar-item'>
							<Link to='/create' className='nav-link'>
								Create Exercise Log
							</Link>
						</li>
						<li className='navbar-item'>
							<Link to='/user' className='nav-link'>
								Create User
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
