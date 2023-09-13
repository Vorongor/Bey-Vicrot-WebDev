import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import DevicesIcon from '@mui/icons-material/Devices';
import CakeIcon from '@mui/icons-material/Cake';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import style from './Projects.module.css';

const Projects = () => {
  const portfolioUrl = require('../../img/Portfolio.jpg');
  const chokoshopUrl = require('../../img/Chokoshop.jpg');
  const bookshelfUrl = require('../../img/Bookshelf.jpg');
  const moviefinderUrl = require('../../img/Moviefinder.jpg');
  const phonebookUrl = require('../../img/Phonebook.jpg');
  const projects = [
    {
      title: 'WebStudio',
      description:
        'Сайт компанії веб-розробників: основою розробки сайту є HTML код доповнений CSS стилями та простими скриптами написами на JavaScrip, що роблять сайт більш живим. Перевагою такого сайту є простота та надійність. А також для більшого охоплення клієнтів при розробці сайту застосована адаптивна вестка, що дозволяє зручно відкривати його з мобільного пристрою.',
      image: portfolioUrl,
      link: 'https://vorongor.github.io/goit-markup-hw-07/',
      icon: <DevicesIcon sx={{ fontSize: '4rem' }} />,
    },
    {
      title: 'ChockoShop',
      description:
        'Онлайн магазин шоколаду: основою розробки є HTML, CSS та простий JavaScript, що роблять наш сайт більш живим та інтерактивним.  Також використано динамічні бібліотеки для ефективного відображення нашого асортименту товарів. Та адаптивний дизайн, для зручного користування з будь-якого пристрою.',
      image: chokoshopUrl,
      link: 'https://paskudas.github.io/chocobytebuilders/',
      icon: <CakeIcon sx={{ fontSize: '4rem' }} />,
    },
    {
      title: 'Boock Shelf',
      description:
        'Онлайн магазин книжок: кістяком проекту все так же залишилося HTML структура та весь основний контет надходить з сервера та обробляється за допомого JavaScript. Так кож застосовано нові технології стилізації та використано динамічні бібліотеки, для прикладу Loader.',
      image: bookshelfUrl,
      link: 'https://giligran.github.io/team-13-bookshelf/',
      icon: <MenuBookIcon sx={{ fontSize: '4rem' }} />,
    },
    {
      title: 'Movie List',
      description:
        'Сервіс пошуку фільмів: Структура цього сайту кардинально відрізняється - він розроблений з використанням бібліотеки React і базується на взаємодії з бекендом. Все наповнення надходить з TMDB API, далі обробляється в компоненти та стилізується з допомогою CSS Module.',
      image: moviefinderUrl,
      link: 'https://vorongor.github.io/goit-react-hw-05-movies/',
      icon: <LiveTvIcon sx={{ fontSize: '4rem' }} />,
    },
    {
      title: 'Phone Book',
      description:
        'Онлайн телефонна книжка: Цей додаок розроблено за допомогою бібліотеки React, а для розширення функціоналу використано: Redux/Toolkit та Redux/Persist. Основою взаємоді з сервером є Swagger API, стилізацію виконана за допомогою Material UI (бібліотеки інтерфейсу користувача)',
      image: phonebookUrl,
      link: 'https://vorongor.github.io/goit-react-hw-08-phonebook/',
      icon: <ContactPhoneIcon sx={{ fontSize: '4rem' }} />,
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
          padding: '12px',
          backgroundColor: '#454545',
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
            <div className={style.card} key={index}>
              <div className={style.cardInner}>
                <div className={style.cardFont}>
                  <Card>
                    <img
                      style={{
                        width: '300px',
                        height: '250px',
                      }}
                      src={project.image}
                      alt={project.title}
                    />
                    <Typography
                      style={{
                        display: 'inline-block',
                        width: '300px',
                        height: '50px',
                        textAlign: 'center',
                      }}
                      variant="h5"
                    >
                      {project.title}
                    </Typography>
                  </Card>
                </div>
                <div className={style.cardBack}>
                  <Card
                    style={{
                      display: 'inline-block',
                      padding: '12px',
                      backgroundColor: '#526d82',
                      color: 'white',
                      width: '300px',
                      height: '300px',
                      textAlign: 'center',
                    }}
                  >
                    <Typography style={{ overflow: 'auto' }} variant="p">
                      {project.description}
                    </Typography>
                    <br />
                    <Typography
                      component={'a'}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Посилання на проект
                      <br />
                      {project.icon}
                    </Typography>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </Box>
      </Card>
    </div>
  );
};

export default Projects;
