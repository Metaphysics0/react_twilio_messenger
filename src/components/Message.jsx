import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className="message__top">
        <h4 className="message__number">{message.phone || '999-999-9999'}</h4>
        <p className="message__date">{message.date || ''}</p>
      </div>
      <p className="message__body">{message.message || ''}</p>
    </div>
  );
};

export default Message;
