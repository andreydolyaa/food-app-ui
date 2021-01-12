

import './Contact.scss';
import React from 'react';
import gmail from '../../assets/img/icons/gmail.png';
import github from '../../assets/img/icons/github.png';
import linkedin from '../../assets/img/icons/linkedin.png';

export function Contact() {
    return (
        <div className="contact">
            <div>
            <h3>Contact me via <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dolya7kk@gmail.com">Gmail</a></h3>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dolya7kk@gmail.com"><img src={gmail}></img></a>
            </div>
            <div>
            <h3>Checkout My <a href="https://github.com/andreydolyaa?tab=repositories">GitHub</a></h3>
            <a href="https://github.com/andreydolyaa?tab=repositories"><img src={github}></img></a>
            </div>
            <div>
            <h3>Contact me via <a href="https://www.linkedin.com/in/andrey-dolya-250130203/">Linkedin</a></h3>
            <a href="https://www.linkedin.com/in/andrey-dolya-250130203/"><img src={linkedin}></img></a>
            </div>
        </div>
    )
}


