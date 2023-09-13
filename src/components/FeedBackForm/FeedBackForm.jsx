import { Button, Card,  Input, Typography } from '@mui/material';
import React, { useState } from 'react';
import style from './WriteMachin.module.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const apiToken = '6407481840:AAE5YyjD19wV9jzvgLOc-zo77PVYkPdkA_I';
  const chatId = '644717925';

  function sendTelegramMessage(message) {
    const url = `https://api.telegram.org/bot${apiToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: JSON.stringify(message), // Перетворення об'єкта в рядок
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

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    const userMessage = {
      name,
      email,
      feedback: message,
    };
    sendTelegramMessage(userMessage);
    console.log(userMessage);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
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
      <Typography
        sx={{
          mt: 4,
          mb: 2,
          width: 286,
          backgroundColor: '#ff6000',
          textAlign: 'center',
        }}
        variant="h6"
        component="div"
      >
        Залиште свій відгук
      </Typography>
      <form
        style={{
          height: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <Input
            color="warning"
            size="lg"
            variant="solid"
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Name"
          />
        </div>
        <div>
          <Input
            color="warning"
            size="lg"
            variant="outlined"
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        <div  className={style.box}>
          <textarea
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            style={{
              resize: 'none',
              width: '286px',
              height: '64px',
              backgroundColor: '#454545',
              border: '1px solid black',
            }}
            className={style.inputWrapper}
            placeholder="For your Feedback..."
          />
          
          
        </div>
        <Button
          color="warning"
          disabled={false}
          size="lg"
          variant="soft"
          type="submit"
          backgroundColor='#ff6000'
        >
          Відправити
        </Button>{' '}
      </form>
    </Card>
  );
};

export default FeedbackForm;
