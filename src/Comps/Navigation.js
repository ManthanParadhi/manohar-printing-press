import React from 'react';
import { Telephone } from '../Logos/Telephone';
import { Call } from '../Logos/Call';
import { Link } from 'react-router-dom';
const Navigation = () => {
    
    return (
        <div>    
            <nav className="dark text-center">
				<h1> Manohar Printing Press and Photo Studio</h1>
				<div>
				<Telephone/>
				<h3>(02363) 246548</h3>
				</div>
				<div>
				<Call />
				<Link to="tel:+919421936685"> HI </Link><h3>9421936685 / 9421983063</h3>
				</div>
            </nav>
        </div>
    )
}

export default Navigation;