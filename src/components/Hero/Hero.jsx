import * as React from 'react';
import style from './Hero.module.css';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

const Hero = () => {
  const imgUrl = require('../../img/profil.jpg');
  return (
    <div id="Hero" style={{ padding: '12px' }}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: '12px',
          gap: '20px',
        }}
      >
        <Box
          color="primary"
          orientation="horizontal"
          size="sm"
          variant="outlined"
          sx={{
            minWidth: 280,
            // minHeight: 220,
            padding: 2,
          }}
        >
          <img className={style.img} src={imgUrl} alt="Bey Victor" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3" textAlign={'center'}>
            Віктор Бей
          </Typography>
          <Typography variant="h4" textAlign={'center'}>
            Fullstack Frontend розробник
          </Typography>
          <Typography variant="p" textAlign={'center'}>
            Привіт, мене звати Віктор, і я Fullstack Frontend розробник. У цьому
            портфоліо я хочу представити вам ряд моїх власних умінь та досвіду у
            веб-розробці. Моє завдання - створювати красиві та функціональні
            веб-сайти, які надихають і спрощують життя користувачів. Поглибтеся
            у мої проекти та дізнайтеся більше про мене!
          </Typography>
        </Box>
      </Card>
    </div>
  );
};

export default Hero;
