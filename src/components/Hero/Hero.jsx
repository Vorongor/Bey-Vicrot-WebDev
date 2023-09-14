import React from 'react';
import style from './Hero.module.css';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import ReplyIcon from '@mui/icons-material/Reply';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import '../component.module.css'

const Hero = () => {
  const imgUrl = require('../../img/profilstrickt.jpg');

  return (
    <div id="Hero" style={{ padding: '12px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px',
          gap: '12px',
          backgroundColor: `var(--secondary-color)`,
        }}
      >
        <Card
          color="primary"
          orientation="vertical"
          size="sm"
          variant="outlined"
          sx={{
            width: 300,
            height: 400,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img className={style.img} src={imgUrl} alt="Bey Victor" />
        </Card>
        <Card
          orientation="vertical"
          sx={{
            width: 300,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p className={style.title}>
            Віктор Бей - Fullstack Frontend розробник
          </p>
          <p className={style.text}>
            Привіт, мене звати Віктор, і я Fullstack Frontend розробник. У цьому
            портфоліо я хочу представити вам ряд моїх власних умінь та досвіду у
            веб-розробці. Моє завдання - створювати красиві та функціональні
            веб-сайти, які надихають і спрощують життя користувачів. До того ж я
            з радістю вчусь застосовувати нові технології так інструменти. Я не
            боюсь випробувань та проявляю розумну ініціативу.
          </p>
        </Card>
        <Card
          orientation="vertical"
          sx={{
            width: 300,
            height: 400,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            overflow: 'hidden',
          }}
          className={style.container}
        >
          <div className={style.top}>
            <div className={style.block}>
              <div className={style.pulse}></div>
              <span className={style.tip}>Have an Idea?</span>
              <OnlinePredictionIcon
                sx={{ fontSize: '4rem' }}
                className={style.icon}
              />
            </div>
            <div className={style.block}>
              {' '}
              <div className={style.pulseL}></div>
              <ReplyIcon sx={{ fontSize: '4rem' }} className={style.iconArr} />
              <span className={style.tipR}>Get it to me</span>
            </div>
            <div className={style.block}>
              {' '}
              <div className={style.pulse}></div>
              <span className={style.tip}>Working hard!</span>
              <SettingsIcon sx={{ fontSize: '4rem' }} className={style.icon} />
            </div>
            <div className={style.block}>
              {' '}
              <div className={style.pulseL}></div>
              <ReplyIcon sx={{ fontSize: '4rem' }} className={style.iconArr} />
              <span className={style.tipR}>I`ll bring you</span>
            </div>
            <div className={style.block}>
              {' '}
              <div className={style.pulse}></div>
              <span className={style.tip}>Grate Job!</span>
              <ImportantDevicesIcon
                sx={{ fontSize: '4rem' }}
                className={style.icon}
              />
            </div>
          </div>
        </Card>
      </Box>
    </div>
  );
};

export default Hero;
