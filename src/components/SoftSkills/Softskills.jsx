import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import GroupsIcon from '@mui/icons-material/Groups';
import '../component.module.css';

const softSkillsData = [
  {
    title: 'Стресостійкість',
    description:
      'Стресостійкість - це важлива якість, яка допомагає зберігати спокій та приймати обдумані рішення в найважчі моменти. Ця навичка дозволяє досягати цілей, навіть у стресових ситуаціях.',
    icon: (
      <AdminPanelSettingsIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />
    ),
  },
  {
    title: 'Ініціативність',
    description:
      'Ініціативність - це здатність самостійно започатковувати дії та вирішувати проблеми. Вона сприяє ефективній роботі та розвитку в будь-якій галузі.',
    icon: <HowToRegIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />,
  },
  {
    title: 'Бажання розвиватися',
    description:
      'Бажання розвиватися - це ключова якість для досягнення успіху. Постійне навчання та вдосконалення навичок допомагають рости як професіоналу та як особистості.',
    icon: <EngineeringIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />,
  },
  {
    title: 'Адаптивність',
    description:
      'Адаптивність - це здатність швидко адаптуватися до змінних обставин та навколишнього середовища. Вона важлива для успішного вирішення завдань у різних умовах.',
    icon: <SensorOccupiedIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />,
  },
  {
    title: 'Лідерство',
    description:
      'Лідерство - це здатність вести та впливати на інших, спрямовуючи їхні зусилля до досягнення спільних цілей. Ця навичка допомагає створювати команди та досягати високих результатів.',
    icon: <GroupsIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />,
  },
];

const SoftSkills = () => {
  return (
    <div id="SoftSkills" style={{ padding: '12px' }}>
      <Card sx={{ p: 3, backgroundColor: 'var(--secondary-color)' }}>
        <Typography variant="h3" textAlign={'center'} sx={{ mb: 3 }}>
          Соціальні та міжособистісні навички
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
          {softSkillsData.map((skill, index) => (
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
                  'linear-gradient(136deg, var(--transparent-accent-color), transparent)',
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

export default SoftSkills;
