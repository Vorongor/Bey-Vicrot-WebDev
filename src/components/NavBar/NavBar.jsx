import React from 'react';
import style from './NavBar.module.css';

const NavigationMenu = ({ onPageChange }) => {
  return (
    <nav className={style.menu}>
      <div className="info-section">
        <h2 className={style.title}>BEY VICTOR</h2>
      </div>
      <div>
        <ul className={style.list}>
          <li>
            <a className={style.link} href="#section1" onClick={() => onPageChange('Hero')}>
              Hero
            </a>
          </li>
          <li>
            <a className={style.link} href="#section2" onClick={() => onPageChange('Summary')}>
              Summary
            </a>
          </li>
          <li>
            <a className={style.link} href="#section3" onClick={() => onPageChange('TechSkills')}>
              Tech Skills
            </a>
          </li>
          <li>
            <a className={style.link} href="#section4" onClick={() => onPageChange('SoftSkills')}>
              SOFT SKILLS
            </a>
          </li>
          <li>
            <a className={style.link} href="#section5" onClick={() => onPageChange('Projects')}>
              PROJECTS
            </a>
          </li>
          <li>
            <a className={style.link} href="#section6" onClick={() => onPageChange('Contacts')}>
              CONTACTS
            </a>
          </li>
        </ul>
      </div>
      <div className={style.btnGrup}>
        <button className={style.btn} onClick={() =>onPageChange('Hero')}>Back to Top</button>
        <button className={style.btn} onClick={() => onPageChange('Contacts')}>
          Cotacts
        </button>
      </div>
    </nav>
  );
};

export default NavigationMenu;
