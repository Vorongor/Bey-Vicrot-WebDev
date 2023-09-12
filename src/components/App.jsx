import React from 'react';
import Contacts from './Contats/Contacts';
import Hero from './Hero/Hero';
import NavigationMenu from './NavBar/NavBar';
import Projects from './Projects/Projects';
import SoftSkills from './SoftSkills/Softskills';
import Summary from './Summary/Summary';
import TechSkills from './TechSkills/Techskills';
import style from './component.module.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#dde6ed',
        overflow: 'scroll',
      }}
    >
      <NavigationMenu />
      <Hero />
      <Summary />
      <TechSkills />
      <SoftSkills />
      <Projects />
      <Contacts />
      <div className={style.btnGrup}>
        {
          <button className={style.btn}>
            <a href="#Header" className={style.link}>
              Scroll Up
            </a>
          </button>
        }
        {
          <button className={style.btn}>
            <a href="#Contacts" className={style.link}>
              Scroll Down
            </a>
          </button>
        }
      </div>
    </div>
  );
};
