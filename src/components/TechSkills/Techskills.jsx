import React from 'react';

const TechSkills = () => {
  return (
    <div className="tech-skills">
      <h3>Технічні навички</h3>
      <div className="skill-card">
        <h4>HTML</h4>
        <p>
          HTML (HyperText Markup Language) - це основна мова розмітки для
          створення веб-сторінок. Вона використовується для структурування
          контенту та визначення його семантики.
        </p>
      </div>
      <div className="skill-card">
        <h4>CSS</h4>
        <p>
          CSS (Cascading Style Sheets) - це мова для стилізації веб-сторінок.
          Вона дозволяє керувати виглядом та макетом елементів на сторінці.
        </p>
      </div>
      <div className="skill-card">
        <h4>JavaScript</h4>
        <p>
          JavaScript - це мова програмування, яка використовується для створення
          інтерактивних та динамічних веб-сторінок. Вона дозволяє додавати
          функціональність до сторінок.
        </p>
      </div>
      <div className="skill-card">
        <h4>React</h4>
        <p>
          React - це бібліотека JavaScript для створення інтерфейсів
          користувача. Вона дозволяє побудувати ефективні та перевірені
          компоненти для веб-додатків.
        </p>
      </div>
      <div className="skill-card">
        <h4>Redux</h4>
        <p>
          Redux - це бібліотека для керування станом додатків у веб-розробці.
          Вона допомагає зберігати та оновлювати стан додатку в одному
          централізованому місці.
        </p>
      </div>
      <div className="skill-card">
        <h4>Node.js</h4>
        <p>
          Node.js - це середовище виконання JavaScript, яке дозволяє виконувати
          код на стороні сервера. Воно широко використовується для створення
          серверів та додатків.
        </p>
      </div>
      <div className="skill-card">
        <h4>Bootstrap та Material UI</h4>
        <p>
          Bootstrap і Material UI - це популярні бібліотеки інтерфейсу
          користувача, які надають готові компоненти та стилі для швидкого
          розроблення стильних веб-додатків.
        </p>
      </div>
    </div>
  );
};

export default TechSkills;
