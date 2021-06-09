import React, { useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

function Navbar() {
	const [click, setClick] = useState(false);
	
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);


	return (
		<>
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#hero" className="navbar-logo" onClick={ closeMobileMenu }>
					JAN STASZAK
				</a>
                <div className="menu-icon" onClick={ handleClick }>
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
