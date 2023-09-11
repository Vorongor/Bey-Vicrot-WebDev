import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const Projects = () => {
  const portfolioUrl = require('../../img/Portfolio.jpg');
  const chokoshopUrl = require('../../img/Chokoshop.jpg');
  const bookshelfUrl = require('../../img/Bookshelf.jpg');
  const moviefinderUrl = require('../../img/Moviefinder.jpg');
  const phonebookUrl = require('../../img/Phonebook.jpg');
  const projects = [
    {
      title: 'Portfolio',
      description: 'Сайт компанії веб-розробників',
      image: portfolioUrl,
      link: 'https://vorongor.github.io/goit-markup-hw-07/',
    },
    {
      title: 'ChockoShop',
      description: 'Онлайн магазин шоколаду',
      image: chokoshopUrl,
      link: 'https://paskudas.github.io/chocobytebuilders/',
    },
    {
      title: 'Boock Shelf',
      description: 'Онлайн магазин книжок',
      image: bookshelfUrl,
      link: 'https://giligran.github.io/team-13-bookshelf/',
    },
    {
      title: 'Movie List',
      description: 'Сервіс пошуку фільмів',
      image: moviefinderUrl,
      link: 'https://vorongor.github.io/goit-react-hw-05-movies/',
    },
    {
      title: 'Phone Book',
      description: 'Онлайн телефонна книжка',
      image: phonebookUrl,
      link: 'https://vorongor.github.io/goit-react-hw-08-phonebook/',
    },
  ];

  return (
    <div id="Projects" style={{ padding: '12px' }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          padding: '8px',
        }}
      >
        <Typography variant="h4">Мої проекти</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {projects.map((project, index) => (
            <Card
              color="primary"
              orientation="horizontal"
              size="sm"
              variant="outlined"
              sx={{
                maxWidth: 280,
                minHeight: 220,
                padding: 2,
                textAlign: 'center',
              }}
              key={index}
            >
              <img
                style={{
                  width: '180px',
                  height: '120px',
                  boxShadow: '3px 2px 10px 0px rgba(0,0,0,0.75)',
                }}
                src={project.image}
                alt={project.title}
              />
              <Typography variant="h5">{project.title}</Typography>
              <Typography variant="p">{project.description}</Typography>
              <br />
              <Typography
                component={'a'}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Посилання на проект
              </Typography>
            </Card>
          ))}
        </Box>
      </Card>
    </div>
  );
};

export default Projects;
