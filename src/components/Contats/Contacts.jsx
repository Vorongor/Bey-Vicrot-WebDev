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
import FeedbackForm from 'components/FeedBackForm/FeedBackForm';

const Contacts = () => {
  const [clientName, setClienName] = React.useState('');
  const [clientEmail, setClienEmail] = React.useState('');
  const [clientFeedback, setClienFeedack] = React.useState('');

  const apiToken = '6407481840:AAE5YyjD19wV9jzvgLOc-zo77PVYkPdkA_I';
  const chatId = '644717925';

  function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${apiToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: message,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
 
  function handleSendMessage() {
    const userMessage = {
      name: clientName,
      email: clientEmail,
      feedback: clientFeedback,
    };
    sendTelegramMessage(userMessage);
    console.log(userMessage)
  }

  return (
    <div id="Contacts" className={style.box}>
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
              <strong>Номер телефону: </strong>
              <a style={{ textDecoration: 'none' }} href="tel:+380636824667">
                +38(063)-68-24-667
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AlternateEmailIcon />
              </ListItemIcon>
              <strong>Email: </strong>{' '}
              <a
                style={{ textDecoration: 'none' }}
                href="mailto:mr.maddarknes@gmail.com"
              >
                mr.maddarknes@gmail.com
              </a>
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
      <FeedbackForm />
      {/* <div className="feedback-form">
        <h3>Leave your FeedBack</h3>
        <List style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <FormControl>
            <FormLabel>Name:</FormLabel>
            <Input
              onChange={handleNameChange}
              placeholder="Your name, pleace"
            />
            <FormHelperText>It will be greate to know your name</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Email:</FormLabel>
            <Input
              onChange={handleEmailChange}
              placeholder="Your email, pleace"
            />
            <FormHelperText>It will help me to finde you</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Feedback:</FormLabel>
            <Input
              onChange={handleFeedbackChange}
              placeholder="Let me take your order..."
            />
            <FormHelperText>Thank you for your feedback</FormHelperText>
          </FormControl>
          <Button type="submit" onSubmit={handleSendMessage}>
            Надіслати
          </Button>
        </List>
      </div> */}
    </div>
  );
};

export default Contacts;
