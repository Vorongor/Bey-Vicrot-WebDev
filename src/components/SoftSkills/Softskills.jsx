import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import GroupsIcon from '@mui/icons-material/Groups';

const SoftSkills = () => {
  return (
    <div id="SoftSkills" style={{ padding: '12px' }}>
      <Card sx={{ p: 2, backgroundColor: '#9db2bf' }}>
        <Typography variant="h3" textAlign={'center'}>
          Соціальні та міжособистісні навички
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
              Стресостійкість
            </Typography>
            <AdminPanelSettingsIcon
              sx={{ fontSize: '4rem', paddingLeft: '35%' }}
            />
            <Typography variant="body2" color="text.secondary">
              Стресостійкість - це важлива якість, яка допомагає зберігати
              спокій та приймати обдумані рішення в найважчі моменти. Ця навичка
              дозволяє досягати цілей, навіть у стресових ситуаціях.
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
              Ініціативність
            </Typography>
            <HowToRegIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />
            <Typography variant="body2" color="text.secondary">
              Ініціативність - це здатність самостійно започатковувати дії та
              вирішувати проблеми. Вона сприяє ефективній роботі та розвитку в
              будь-якій галузі.
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
              Бажання розвиватися
            </Typography>
            <EngineeringIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />
            <Typography variant="body2" color="text.secondary">
              Бажання розвиватися - це ключова якість для досягнення успіху.
              Постійне навчання та вдосконалення навичок допомагають рости як
              професіоналу та як особистості.
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
              Адаптивність
            </Typography>
            <SensorOccupiedIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />
            <Typography variant="body2" color="text.secondary">
              Адаптивність - це здатність швидко адаптуватися до змінних
              обставин та навколишнього середовища. Вона важлива для успішного
              вирішення завдань у різних умовах.
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
              Лідерство
            </Typography>
            <GroupsIcon sx={{ fontSize: '4rem', paddingLeft: '35%' }} />
            <Typography variant="body2" color="text.secondary">
              Лідерство - це здатність вести та впливати на інших, спрямовуючи
              їхні зусилля до досягнення спільних цілей. Ця навичка допомагає
              створювати команди та досягати високих результатів.
            </Typography>
          </Card>
        </Box>
      </Card>
    </div>
  );
};

export default SoftSkills;
