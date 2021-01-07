


import React from 'react';
import './AppFooter.scss';

export function AppFooter() {
    return (
        <div className="app-footer">
            <div>
                <ul>
                    <li>About Us</li>
                    <li>Restaurants</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Careers</li>
                    <li>About Developer</li>
                    <li>More Code</li>
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


