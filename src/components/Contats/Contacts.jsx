import * as React from 'react';
import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import style from './Conatcts.module.css';
import FeedbackForm from 'components/FeedBackForm/FeedBackForm';
import '../component.module.css';
const Contacts = () => {
  return (
    <div id="Contacts" className={style.box}>
      {/* Блок соціальних мереж */}
      <Card
        sx={{
          width: 300,
          height: 336,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'var(--secondary-color)',
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              mt: 4,
              mb: 2,
              backgroundColor: 'var(--accent-color)',
              textAlign: 'center',
            }}
            variant="h6"
            component="div"
          >
            Contact me on social media
          </Typography>
          <List>
            <ListItem component={'a'} href="tel:+380636824667">
              <ListItemIcon>
                <CallIcon sx={{ color: 'var(--primary-color)' }} />
              </ListItemIcon>
              +38(063)-68-24-667
            </ListItem>
            <ListItem component={'a'} href="mailto:mr.maddarknes@gmail.com">
              <ListItemIcon>
                <AlternateEmailIcon sx={{ color: 'var(--primary-color)' }} />
              </ListItemIcon>
              mr.maddarknes@gmail.com
            </ListItem>
            <ListItem
              component={'a'}
              href="https://www.instagram.com/un.known_oficer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>
                <InstagramIcon sx={{ color: 'var(--primary-color)' }} />
              </ListItemIcon>
              @un.known_oficer
            </ListItem>
            <ListItem
              component={'a'}
              href="https://t.me/Vorongor9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>
                <TelegramIcon sx={{ color: 'var(--primary-color)' }} />
              </ListItemIcon>
              @Vorongor
            </ListItem>
            <ListItem
              component={'a'}
              href="https://www.facebook.com/profile.php?id=100012828817503"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>
                <FacebookIcon sx={{ color: 'var(--primary-color)' }} />
              </ListItemIcon>
              Віктор Бей
            </ListItem>
            <ListItem
              component={'a'}
              href="https://www.linkedin.com/in/%D0%B2%D1%96%D0%BA%D1%82%D0%BE%D1%80-%D0%B1%D0%B5%D0%B9-57859526b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>
                <LinkedInIcon sx={{ color: 'var(--primary-color)' }} />
              </ListItemIcon>
              Victor (Vorongor) Bey
            </ListItem>
          </List>
        </Grid>
      </Card>
      {/* Блок форми для фідбеку */}
      <Card sx={{ width: 300 }}>
        <FeedbackForm />
      </Card>
    </div>
  );
};

export default Contacts;
