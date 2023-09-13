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
          backgroundColor: '#454545',
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              mt: 4,
              mb: 2,
              backgroundColor: '#ff6000',
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
                <CallIcon sx={{ color: '#ff6000' }} />
              </ListItemIcon>
              +38(063)-68-24-667
            </ListItem>
            <ListItem component={'a'} href="mailto:mr.maddarknes@gmail.com">
              <ListItemIcon>
                <AlternateEmailIcon sx={{ color: '#ff6000' }} />
              </ListItemIcon>
              mr.maddarknes@gmail.com
            </ListItem>
            <ListItem
              component={'a'}
              href="https://www.instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>
                <InstagramIcon sx={{ color: '#ff6000' }} />
              </ListItemIcon>
              @example
            </ListItem>
            <ListItem
              component={'a'}
              href="https://t.me/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>
                <TelegramIcon sx={{ color: '#ff6000' }} />
              </ListItemIcon>
              @example
            </ListItem>
            <ListItem
              component={'a'}
              href="https://www.facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>
                <FacebookIcon sx={{ color: '#ff6000' }} />
              </ListItemIcon>
              Example Facebook
            </ListItem>
            <ListItem
              component={'a'}
              href="https://www.linkedin.com/in/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon>
                <LinkedInIcon sx={{ color: '#ff6000' }} />
              </ListItemIcon>
              Example LinkedIn
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
