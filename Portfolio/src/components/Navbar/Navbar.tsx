import React from 'react';
import style from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav>
            <a href='/'>Porfolio</a>
            <div>
                <ul className='d-flex'>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#experience'></a>Experience</li>
                    <li><a href='#skills'></a>Skills</li>
                    <li><a href='#education'></a>Education</li>
                    <li><a href='#projects'></a>Projects</li>
                    <li><a href='#achievements'></a>Achievements </li>
                    <li><a href='#contact'></a>Contact</li>
                </ul>
            </div>
        </nav>
    )
};


