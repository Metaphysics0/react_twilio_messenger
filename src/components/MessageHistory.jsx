import React from 'react';
import Message from './Message';

const MessageHistory = ({ messages }) => {
  return (
    <div className="card">
      <h2>Message History ({messages.length})</h2>
      {messages.map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </div>
  );
};

export default MessageHistory;
