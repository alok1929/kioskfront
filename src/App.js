import React from 'react';
import MyComponent from './MyComponent.jsx'; // or './MyComponent' if your bundler handles extensions

const App = () => {
  return (
    <div>
      <div className='bg-blue-400 p-4 flex space-x-20'>
        <div className='text-2xl font-mono py-2'>kioskBOT</div>
        <div className=' p-1 px-80 flex items-center justify-center'>
          <div className=' border-gray-300 bg-red-200 rounded-full p-1 w-10'>
            <div className='px-1 animate-pulse text-xl  '>🙋</div>
          </div>
          <div className='px-6 p-2 flex font-semibold '>
            Hi! I'm a south indian store assistant. Click 🔴 to start ordering!!
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className="w-full max-w-3xl p-4">
          <MyComponent />
        </div>
      </div>
    </div>
  );
};

export default App;