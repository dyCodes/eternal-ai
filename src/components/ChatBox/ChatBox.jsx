import { useState } from 'react';
import { ChatContainer } from './styles';
import { FaArrowRightLong } from 'react-icons/fa6';
import { VscRobot } from 'react-icons/vsc';
import { LiaEdit } from 'react-icons/lia';
import { MdSend } from 'react-icons/md';

const ChatBox = () => {
  const [text, setText] = useState('');

  const handleChatSubmit = (e) => {
    e.preventDefault();

    console.log('User message:', text);
  };

  return (
    <ChatContainer>
      <h4 className='bg-primary heading-4'>
        Virtual Dermatologist ChatBox🥼‍️
      </h4>

      <div className='chat-item'>
        <div className='chats'>
          <div className='fx-center robot-box'>
            <div>
              <VscRobot size={28} />
            </div>
            <p>
              Hi there! I'm your virtual dermatologist. Feel free to ask me any
              questions about your skin health. Based on the photo and
              description of your symptoms, I'll use your information to provide
              personalized insights and recommendations. Let's get started!"
            </p>
          </div>

          <div className='user-box'>
            <div />
            <div className='fx-center user-message'>
              <p>
                What are some of the side effects of sylicidic acid on oily skin
                like mine
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleChatSubmit} className='chat-actions'>
          <FaArrowRightLong className='arrow-icon' size={24} />
          <input
            type='text'
            name='message'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type your skin concern for personalized advice!'
          />
          <button>
            <MdSend className='menu-icon' size={24} />
          </button>
        </form>
      </div>
    </ChatContainer>
  );
};

export default ChatBox;
