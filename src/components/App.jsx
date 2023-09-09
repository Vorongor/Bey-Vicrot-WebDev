import React, { useState, useEffect } from 'react';
import {
  Link,
  Element,
  scrollSpy,
  animateScroll as scroll,
} from 'react-scroll';
import Contacts from './Contats/Contacts';
import Hero from './Hero/Hero';
import NavigationMenu from './NavBar/NavBar';
import Projects from './Projects/Projects';
import SoftSkills from './SoftSkills/Softskills';
import Summary from './Summary/Summary';
import TechSkills from './TechSkills/Techskills';
import style from './component.module.css'

export const App = () => {
  const sections = [
    'Hero',
    'Summary',
    'TechSkills',
    'SoftSkills',
    'Projects',
    'Contacts',
  ];
  const [activePageIndex, setActivePageIndex] = useState(0);
  const handlePageChange = pageName => {
    const pageIndex = sections.indexOf(pageName);
    if (pageIndex !== -1) {
      setActivePageIndex(pageIndex);
    }
  };

  const scrollToNextSection = () => {
    if (activePageIndex < sections.length - 1) {
      setActivePageIndex(activePageIndex + 1);
    }
  };

  const scrollToPreviousSection = () => {
    if (activePageIndex > 0) {
      setActivePageIndex(activePageIndex - 1);
    }
  };

  // useEffect(() => {
  //   const handleScroll = event => {
  //     if (event.deltaY > 0) {
  //       scroll.scrollMore(300);
  //       scrollToNextSection();
  //     } else {
  //       scroll.scrollMore(-300);
  //       scrollToPreviousSection();
  //     }
  //   };
  //   window.addEventListener('wheel', handleScroll);
  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   scrollSpy.update();
  // }, []);

  useEffect(() => {
    scroll.scrollTo(`section${activePageIndex + 1}`, {
      smooth: true,
      duration: 500,
      offset: -50,
    });
  }, [activePageIndex]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000000ab'
      }}
    >
      <NavigationMenu onPageChange={handlePageChange} />

      {sections.map((sectionName, index) => (
        <Element key={sectionName} name={`section${index + 1}`}>
          {activePageIndex === index && (
            <>
              {sectionName === 'Hero' && <Hero />}
              {sectionName === 'Summary' && <Summary />}
              {sectionName === 'TechSkills' && <TechSkills />}
              {sectionName === 'SoftSkills' && <SoftSkills />}
              {sectionName === 'Projects' && <Projects />}
              {sectionName === 'Contacts' && <Contacts />}
            </>
          )}
        </Element>
      ))}

      <div className={style.btnGrup}>
        {<button className={style.btn} onClick={scrollToPreviousSection}>Scroll Up</button>}
        <button className={style.btn} onClick={scrollToNextSection}>Scroll Down</button>
      </div>
    </div>
  );
};
