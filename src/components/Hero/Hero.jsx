import React from 'react';
import style from './Hero.module.css';

const Hero = () => {
  const imgUrl = require('../../img/profil.jpg');
  return (
    <div className={style.hero}>
      <div>
        <img className={style.img} src={imgUrl} alt="Bey Victor" />
      </div>
      {/* Ім'я та прізвище */}
      <h1 className="hero-name">Віктор Бей</h1>
      {/* Професія */}
      <h2 className="hero-title">Fullstack Frontend розробник</h2>
      {/* Вступний текст */}
      <p className="hero-introduction">
        Привіт, мене звати Віктор, і я Fullstack Frontend розробник. У цьому
        портфоліо я хочу представити вам ряд моїх власних умінь та досвіду у
        веб-розробці. Моє завдання - створювати красиві та функціональні
        веб-сайти, які надихають і спрощують життя користувачів. Поглибтеся у
        мої проекти та дізнайтеся більше про мене!
      </p>
    </div>
  );
};

export default Hero;
