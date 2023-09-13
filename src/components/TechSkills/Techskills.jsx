import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import TerminalIcon from '@mui/icons-material/Terminal';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
const TechSkills = () => {
  return (
    <div id="TechSkills" style={{ padding: '12px' }}>
      <Card sx={{ p: 2, backgroundColor: '#454545' }}>
        <Typography variant="h3" textAlign={'center'}>
          Технічні навички
        </Typography>
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
          <Card
            color="primary"
            orientation="horizontal"
            size="sm"
            variant="outlined"
            sx={{
              maxWidth: 280,
              minHeight: 220,
              padding: 2,
            }}
          >
            <Typography textAlign={'center'} variant="h5">
              HTML
            </Typography>
            <CodeIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />
            <Typography variant="body2" color="text.secondary">
              HTML (HyperText Markup Language) - це основна мова розмітки для
              створення веб-сторінок. Вона використовується для структурування
              контенту та визначення його семантики.
            </Typography>
          </Card>
          <Card
            color="primary"
            orientation="horizontal"
            size="sm"
            variant="outlined"
            sx={{
              maxWidth: 280,
              minHeight: 220,
              padding: 2,
            }}
          >
            <Typography textAlign={'center'} variant="h5">
              CSS
            </Typography>
            <LineStyleIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />
            <Typography variant="body2" color="text.secondary">
              CSS (Cascading Style Sheets) - це мова для стилізації
              веб-сторінок. Вона дозволяє керувати виглядом та макетом елементів
              на сторінці.
            </Typography>
          </Card>

          <Card
            color="primary"
            orientation="horizontal"
            size="sm"
            variant="outlined"
            sx={{
              maxWidth: 280,
              minHeight: 220,
              padding: 2,
            }}
          >
            <Typography textAlign={'center'} variant="h5">
              JavaScript
            </Typography>
            <DataThresholdingIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />
            <Typography variant="body2" color="text.secondary">
              JavaScript - це мова програмування, яка використовується для
              створення інтерактивних та динамічних веб-сторінок. Вона дозволяє
              додавати функціональність до сторінок.
            </Typography>
          </Card>

          <Card
            color="primary"
            orientation="horizontal"
            size="sm"
            variant="outlined"
            sx={{
              maxWidth: 280,
              minHeight: 220,
              padding: 2,
            }}
          >
            <Typography textAlign={'center'} variant="h5">
              React
            </Typography>
            <DynamicFormIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />
            <Typography variant="body2" color="text.secondary">
              React - це бібліотека JavaScript для створення інтерфейсів
              користувача. Вона дозволяє побудувати ефективні та перевірені
              компоненти для веб-додатків.
            </Typography>
          </Card>
          <Card
            color="primary"
            orientation="horizontal"
            size="sm"
            variant="outlined"
            sx={{
              maxWidth: 280,
              minHeight: 220,
              padding: 2,
            }}
          >
            <Typography textAlign={'center'} variant="h5">
              Node.js
            </Typography>
            <TerminalIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />
            <Typography variant="body2" color="text.secondary">
              Node.js - це середовище виконання JavaScript, яке дозволяє
              виконувати код на стороні сервера. Воно широко використовується
              для створення серверів та додатків.
            </Typography>
          </Card>
          <Card
            color="primary"
            orientation="horizontal"
            size="sm"
            variant="outlined"
            sx={{
              maxWidth: 280,
              minHeight: 220,
              padding: 2,
            }}
          >
            <Typography textAlign={'center'} variant="h5">
              Bootstrap та Material UI
            </Typography>
            <IntegrationInstructionsIcon
              sx={{ fontSize: '4rem', paddingLeft: '35%' }}
            />
            <Typography variant="body2" color="text.secondary">
              Bootstrap і Material UI - це популярні бібліотеки інтерфейсу
              користувача, які надають готові компоненти та стилі для швидкого
              розроблення стильних веб-додатків.
            </Typography>
          </Card>
        </Box>
      </Card>
    </div>
  );
};

export default TechSkills;
