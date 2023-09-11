import * as React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
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
import TextField from '@mui/material/TextField';
import style from './Conatcts.module.css';

const Contacts = () => {
  return (
    <div id='Contacts' className={style.box}>
      {/* Блок соціальних мереж */}
      <div className="social-media">
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Contact me on social media
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <CallIcon />
              </ListItemIcon>
              <strong>Номер телефону:</strong> +1234567890
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>
              <strong>Email:</strong> example@gmail.com
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <InstagramIcon />
              </ListItemIcon>
              <strong>Instagram:</strong>
              <a
                href="https://www.instagram.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                @example
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TelegramIcon />
              </ListItemIcon>
              <strong>Telegram:</strong>
              <a
                href="https://t.me/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                @example
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <strong>Facebook:</strong>
              <a
                href="https://www.facebook.com/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                Example Facebook
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/example"
                target="_blank"
                rel="noopener noreferrer"
              >
                Example LinkedIn
              </a>
            </ListItem>
          </List>
        </Grid>
      </div>
      {/* Блок форми для фідбеку */}
      <div className="feedback-form">
        <h3>Leave your FeedBack</h3>
        <List style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <FormControl>
            <FormLabel>Name:</FormLabel>
            <Input placeholder="Your name, pleace" />
            <FormHelperText>It will be greate to know your name</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input placeholder="Your email, pleace" />
            <FormHelperText>It will help me to finde you</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Feedback:</FormLabel>
            <Input placeholder="Let me take your order..." />
            <FormHelperText>Thank you for your feedback</FormHelperText>
          </FormControl>
          <Button type="submit">Надіслати</Button>
        </List>
      </div>
    </div>
  );
};

export default Contacts;
