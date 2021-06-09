import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'

function Navbar({handleClick, click}) {
	return (
		<>
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#hero" className="navbar-logo">
					JAN STASZAK
				</a>
                <div className="menu-icon" onClick={() => handleClick(click)}>
                    <Hamburger />
                </div>
			</div>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li className="nav-item">
					HOME
				</li>
				<li className="nav-item">ABOUT</li>
				<li className="nav-item">PROJECTS</li>
				<li className="nav-item">CONTACT</li>
			</ul>
        </nav>
		</>
	)
}

export default Navbar
