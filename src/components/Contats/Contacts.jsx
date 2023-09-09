import React from 'react';

const Contacts = () => {
  return (
    <div className="contacts">
      {/* Блок соціальних мереж */}
      <div className="social-media">
        <h3>Соціальні мережі та контакти</h3>
        <ul>
          <li>
            <strong>Номер телефону:</strong> +1234567890
          </li>
          <li>
            <strong>Email:</strong> example@gmail.com
          </li>
          <li>
            <strong>Instagram:</strong>{' '}
            <a
              href="https://www.instagram.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              @example
            </a>
          </li>
          <li>
            <strong>Telegram:</strong>{' '}
            <a
              href="https://t.me/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              @example
            </a>
          </li>
          <li>
            <strong>Facebook:</strong>{' '}
            <a
              href="https://www.facebook.com/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              Example Facebook
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/example"
              target="_blank"
              rel="noopener noreferrer"
            >
              Example LinkedIn
            </a>
          </li>
        </ul>
      </div>
      {/* Блок форми для фідбеку */}
      <div className="feedback-form">
        <h3>Залиште повідомлення</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Ім'я:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Повідомлення:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Надіслати</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
