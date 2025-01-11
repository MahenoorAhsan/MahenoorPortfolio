import React, {useState} from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    return (
        
        <nav className={styles.navbar}>
            <a href='/' className={styles.title}>Porfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={ menuOpen ? "../../assets/nav/crossIcon.png":"../../assets/nav/menuIcon.png"} alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}></img>
                <ul className={ `${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                    <li onClick={() => setMenuOpen(false)}><a href='#about'>About</a></li>
                    <li onClick={() => setMenuOpen(false)}><a href='#experience'>Experience</a></li>
                    <li onClick={() => setMenuOpen(false)}><a href='#skills'>Skills</a></li>
                    <li onClick={() => setMenuOpen(false)}><a href='#education'>Education</a></li>
                    <li onClick={() => setMenuOpen(false)}><a href='#projects'>Projects</a></li>
                    <li onClick={() => setMenuOpen(false)}><a href='#achievements'>Achievements</a> </li>
                    <li onClick={() => setMenuOpen(false)}><a href='#contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
};


