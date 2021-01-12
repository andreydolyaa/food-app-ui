


import React from 'react';
import './AppFooter.scss';
import { Link } from 'react-router-dom';

export function AppFooter() {
    return (
        <div className="app-footer">
            <div>
                <ul>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/"><li>Restaurants</li></Link>
                    <Link to="/contact"><li>Contact Us</li></Link>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Careers</li>
                    <Link to="/about"><li>About Developer</li></Link>
                    <a href="https://github.com/andreydolyaa"><li>More Code</li></a>
                </ul>
            </div>
            <div className="social">
                <ul>
                    <li><a className="linkedin" href="https://www.linkedin.com/in/andrey-dolya-250130203/"><i class="fab fa-linkedin-in"></i>Linkedin</a></li>
                    <li><a className="github" href="https://github.com/andreydolyaa"><i class="fab fa-github"></i>GitHub</a></li>
                    <li><a className="facebook" href="https://facebook.com"><i class="fab fa-facebook"></i>Facebook</a></li>
                </ul>
            </div>
        </div>
    )
}


