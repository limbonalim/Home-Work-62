import React from 'react';
import SendMessageForm from '../../components/SendMessageForm/SendMessageForm.tsx';
import Location from '../../components/Map/Location.tsx';
import SocialLink from '../../components/SocialLink/SocialLink.tsx';

const Contacts = () => {
  return (
    <>
      <h1>Контакты</h1>
      <div>
        <div>
          <h4>InnovateHub Глобальный Офис:</h4>
          <p>Адрес: </p>
          <p>Телефон: </p>
          <p>Email: </p>
        </div>
        <div>
          <h4>Отдел Поддержки Клиентов:</h4>
          <p>Рабочее Время:</p>
          <p>Телефон: </p>
          <p>Email:</p>
        </div>
      </div>
      <h3>Свяжитесь с Нами:</h3>
      <p>Мы готовы ответить на ваши вопросы, обсудить ваши проекты и предложения.
        Напишите нам через форму обратной связи ниже или отправьте электронное письмо на [Email].
      </p>
      <h3>Форма Обратной Связи:</h3>
      <SendMessageForm/>
      <h2>Как Найти Нас</h2>
      <p>Мы находимся в удобном для вас месте.
        Пользуйтесь картой ниже, чтобы найти ближайший к вам офис InnovateHub.
      </p>
      <Location/>
      <h2>Присоединяйтесь к Нам в Социальных Сетях:</h2>
      <p>Следите за нашими обновлениями и участвуйте в дискуссиях в социальных сетях.</p>
      <SocialLink/>
    </>
  );
};

export default Contacts;