import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import TerminalIcon from '@mui/icons-material/Terminal';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import '../component.module.css';

const skillsData = [
  {
    title: 'HTML',
    description:
      'HTML (HyperText Markup Language) - це основна мова розмітки для створення веб-сторінок. Вона використовується для структурування контенту та визначення його семантики.',
    icon: <CodeIcon sx={{ fontSize: '4rem', paddingLeft: '40%' }} />,
  },
  {
    title: 'CSS',
    description:
      'CSS (Cascading Style Sheets) - це мова для стилізації веб-сторінок. Вона дозволяє керувати виглядом та макетом елементів на сторінці.',
    icon: <LineStyleIcon sx={{ fontSize: '4rem', paddingLeft: '40%' }} />,
  },
  {
    title: 'JavaScript',
    description:
      'JavaScript - це мова програмування, яка використовується для створення інтерактивних та динамічних веб-сторінок. Вона дозволяє додавати функціональність до сторінок.',
    icon: (
      <DataThresholdingIcon sx={{ fontSize: '4rem', paddingLeft: '40%' }} />
    ),
  },
  {
    title: 'React',
    description:
      'React - це бібліотека JavaScript для створення інтерфейсів користувача. Вона дозволяє побудувати ефективні та перевірені компоненти для веб-додатків.',
    icon: <DynamicFormIcon sx={{ fontSize: '4rem', paddingLeft: '40%' }} />,
  },
  {
    title: 'Node.js',
    description:
      'Node.js - це середовище виконання JavaScript, яке дозволяє виконувати код на стороні сервера. Воно широко використовується для створення серверів та додатків.',
    icon: <TerminalIcon sx={{ fontSize: '4rem', paddingLeft: '40%' }} />,
  },
  {
    title: 'Bootstrap та Material UI',
    description:
      'Bootstrap і Material UI - це популярні бібліотеки інтерфейсу користувача, які надають готові компоненти та стилі для швидкого розроблення стильних веб-додатків.',
    icon: (
      <IntegrationInstructionsIcon
        sx={{ fontSize: '4rem', paddingLeft: '40%' }}
      />
    ),
  },
];

const TechSkills = () => {
  return (
    <div id="TechSkills" style={{ padding: '12px' }}>
      <Card sx={{ p: 3, backgroundColor: 'var(--secondary-color)' }}>
        <Typography variant="h3" textAlign={'center'} sx={{ mb: 3 }}>
          Технічні навички
        </Typography>
        <div
          className="card-container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {skillsData.map((skill, index) => (
            <Card
              key={index}
              color="primary"
              orientation="horizontal"
              size="sm"
              variant="outlined"
              sx={{
                width: 300,
                height: 250,
                padding: 2,
                backgroundImage:
                  'linear-gradient(316deg, var(--transparent-accent-color), transparent)',
                boxShadow: '8px 7px 17px 1px rgba(0,0,0,0.75)',
              }}
            >
              <Typography textAlign={'center'} variant="h5">
                {skill.title}
              </Typography>
              {skill.icon}
              <Typography variant="body2" color="text.secondary">
                {skill.description}
              </Typography>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TechSkills;
