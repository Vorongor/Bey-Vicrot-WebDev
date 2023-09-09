import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio',
      description: 'Сайт компанії веб-розробників',
      image: 'portfolio.jpg', // Додайте шлях до фото проекту
      link: 'https://vorongor.github.io/goit-markup-hw-07/',
    },
    {
      title: 'ChockoShop',
      description: 'Онлайн магазин шоколаду',
      image: 'chockoshop.jpg', // Додайте шлях до фото проекту
      link: 'https://paskudas.github.io/chocobytebuilders/',
    },
    {
      title: 'Boock Shelf',
      description: 'Онлайн магазин книжок',
      image: 'bookshelf.jpg', // Додайте шлях до фото проекту
      link: 'https://giligran.github.io/team-13-bookshelf/',
    },
    {
      title: 'Movie List',
      description: 'Сервіс пошуку фільмів',
      image: 'movielist.jpg', // Додайте шлях до фото проекту
      link: 'https://vorongor.github.io/goit-react-hw-05-movies/',
    },
    {
      title: 'Phone Book',
      description: 'Онлайн телефонна книжка',
      image: 'phonebook.jpg', // Додайте шлях до фото проекту
      link: 'https://vorongor.github.io/goit-react-hw-08-phonebook/',
    },
  ];

  return (
    <div className="projects">
      <h3>Мої проекти</h3>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Деталі проекту</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
