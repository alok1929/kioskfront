import React, { useState } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

const MessageInput = ({ onSendVoiceMessage }) => {
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ audio: true });

  const handleStopRecording = () => {
    stopRecording();
    if (mediaBlobUrl) {
      onSendVoiceMessage(mediaBlobUrl);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4">
      <button onClick={startRecording} className="bg-green-600 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1v22m-7-6h14" />
        </svg>
      </button>
      <button onClick={handleStopRecording} className="bg-red-600 p-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14" />
        </svg>
      </button>
      {status === 'recording' && <p className="text-white">Recording...</p>}
    </div>
  );
};

const App = () => {
  const [messages, setMessages] = useState([]);

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true });


  return (
    <div>
      <div className='bg-blue-400 p-4 flex space-x-20'>
        <div className='text-2xl font-mono py-2'>kioskBOT</div>
        <div className='p-1 px-80 flex items-center justify-center'>
          <div className='border-gray-300 bg-red-200 rounded-full p-1 w-10'>
            <div className='px-1 animate-pulse text-xl'>🙋</div>
          </div>
          <div className='px-6 p-2 flex font-semibold'>
            Hi! I'm a south indian store assistant. Click 🔴 to start ordering!!
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <div className="w-full max-w-3xl p-4">
          {messages.map((message, index) => (
            <div key={index} className="my-2 p-2 rounded-lg bg-gray-200 text-black self-start">
              {message.audioUrl ? <audio src={message.audioUrl} controls /> : null}
            </div>
          ))}
        </div>
        <MessageInput onSendVoiceMessage={handleSendVoiceMessage} />
      </div>
    </div>
  );
};

export default App;