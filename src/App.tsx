import { Volume, Volume1, Volume2 } from 'lucide-react';


//Volume Controls

function App() {
  return (
    <div className='container'>
      <div className='bar'>
        <button className='key' onClick={() => window.volumeAPI.toggleMute()}>
          <Volume />
        </button>
        <button className='key' onClick={() => window.volumeAPI.decreaseVolume()}>
          <Volume1 />
        </button>
        <button className='key' onClick={() => window.volumeAPI.increaseVolume()}>
          <Volume2 />
        </button>
      </div>
    </div>
  );
}

export default App;