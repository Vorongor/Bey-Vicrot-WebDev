import React, { useState } from 'react';

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
    // Отримайте дані з полів name, email та message і відправте їх на сервер або на Telegram бота.
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
    // Скиньте дані після відправки форми
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h2>Залиште свій відгук</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Повідомлення:</label>
          <textarea
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
