import { useState, useEffect } from 'react';
import { ChatContainer } from './styles';
import { FaArrowRightLong } from 'react-icons/fa6';
import { VscRobot } from 'react-icons/vsc';
import { LiaEdit } from 'react-icons/lia';
import { MdSend } from 'react-icons/md';
import { BiLoaderCircle } from 'react-icons/bi';
import httpClient from '@/api/axios';
import { toast } from 'react-toastify';
import { DefaultChatHistory } from '@/constants/gemini';

const scrollToBottomChat = () => {
  const chatMessages = document.querySelector('.chats');
  const scrollHeight = chatMessages.scrollHeight;
  chatMessages.scrollTop = scrollHeight;
};

const ChatBox = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([...DefaultChatHistory]);

  useEffect(() => {
    const storedChatHistory = JSON.parse(localStorage.getItem('chatHistory'));
    if (storedChatHistory) {
      setHistory(storedChatHistory);
    }
  }, []);

  useEffect(() => {
    scrollToBottomChat();
  }, [history]);

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate user input
    if (!text.trim()) {
      setLoading(false);
      return;
    }

    // Add user message to chat history
    let updatedHistory = [
      ...history,
      {
        id: history.length + 1,
        role: 'user',
        parts: [{ text }],
      },
    ];
    setHistory(updatedHistory);
    setText(''); // Clear input field

    // Get stored user data
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    const storedReportData = JSON.parse(localStorage.getItem('reportData'));
    // Remove imagePreview from storedUserData
    delete storedUserData.imagePreview;

    const payload = {
      message: text,
      history: history,
      userData: storedUserData,
      reportData: storedReportData,
    };

    try {
      const response = await httpClient.post('/chat', payload);
      const { data, status } = response;

      if (status === 200) {
        const newAIChat = {
          id: history.length + 2,
          role: 'model',
          parts: [{ text: data.result }],
        };
        updatedHistory = [...updatedHistory, newAIChat];
        setHistory(updatedHistory);
        localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again.');
      // Remove last user message & restore text
      updatedHistory.pop();
      setHistory(updatedHistory);
      setText(text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatContainer>
      <h4 className='bg-primary heading-4'>
        Virtual Dermatologist ChatBox🥼‍️
      </h4>

      <div className='chat-item'>
        <div className='chats'>
          {/* <div class='fx-center robot-box'>
            <VscRobot className='hidden md:block' size={28} />
            <p class='message'>
              Hi there! I'm your virtual dermatologist. Feel free to ask me any
              questions about your skin health. Based on the photo and
              description of your symptoms, I'll use your information to provide
              personalized insights and recommendations. Let's get started!
            </p>
          </div>
          <div class='fx-center user-box'>
            <p class='message'>
              What are some of the side effects of sylicidic acid on oily skin
              like mine?
            </p>
          </div> */}

          {history.map((item) => (
            <div
              key={item.id}
              className={`fx-center ${
                item.role === 'model' ? 'robot-box' : 'user-box'
              }`}
            >
              {item.role === 'model' && (
                <VscRobot className='hidden md:block' size={28} />
              )}
              <p className='message'>{item.parts[0].text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleChatSubmit} className='chat-actions'>
          <FaArrowRightLong className='arrow-icon' size={24} />
          <input
            type='text'
            name='message'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            placeholder='Type your skin concern for personalized advice!'
          />
          <button>
            {loading ? (
              <BiLoaderCircle
                color='#9c9c9c'
                className='menu-icon animate-spin'
                size={26}
              />
            ) : (
              <MdSend className='menu-icon' size={24} />
            )}
          </button>
        </form>
      </div>
    </ChatContainer>
  );
};

export default ChatBox;
