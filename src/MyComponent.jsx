import React from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';

const MyComponent = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
  useReactMediaRecorder({ 
    audio: true,
    mediaRecorderOptions: { mimeType: 'audio/webm' }
  });
  return (
    <div className=''>
      <p>{status}</p>
      <div onClick={startRecording}>Start Recording</div>
      <div onClick={stopRecording}>Stop Recording</div>
      <audio src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
};

export default MyComponent;