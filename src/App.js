import { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageHistory from './components/MessageHistory';

function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="main">
      <h1 className="main__heading">My SMS Messenger</h1>
      <div className="bottom">
        <MessageForm messages={messages} setMessages={setMessages} className="main__left" />
        <MessageHistory messages={messages} className="main__right" />
      </div>
    </div>
  );
}

export default App;
