import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const Summary = () => {
  return (
    <div id="Summary" style={{ padding: '12px' }}>
      <Card style={{ backgroundColor: '#9db2bf' }}>
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <Box>
            <Typography variant="h5" component="div">
              <Divider orientation="horizontal">Про мене</Divider>
            </Typography>
            <Typography
              variant="body2"
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              Діючий військовий з 2017 року та ветеран Російсько-Української
              війни. Мої інтереси та досягнення включають єдиноборства, важку
              атлетику, пауерліфтинг і гирьовий спорт. У цьому останньому я був
              чемпіоном України та маю розряд кандидата в майстри спорту.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" component="div">
              <Divider orientation="horizontal">Освіта</Divider>
            </Typography>
            <Typography variant="body2">
              - 2017: Закінчив школу.
              <br />
              - 2017-2021: Національна академія сухопутних військ, закінчив з
              червоним дипломом.
              <br />- 2022-2023: GoIT Academy + EnglishDom school.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" component="div">
              <Divider orientation="horizontal">Робота</Divider>
            </Typography>
            <Typography
              variant="body2"
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              З 2021 року я діючий офіцер військової служби. У 2020 році я мав
              досвід участі у міжнародних навчаннях, зокрема, в аналітичному
              етапі з використанням програмного забезпечення JCats під час
              заходу Rapid Trident 2020.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Summary;
