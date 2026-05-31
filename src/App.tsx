import { Volume, Volume1, Volume2, Smile } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';

function App() {

  const togglePicker = () => {


  }
  return (
    <div className='container'>
      <div className='handle'>
        <button className='window-icon'></button>
        <button className='window-icon'></button>
        <button className='window-icon'></button>
      </div>
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
        <button className='key' onClick={() => togglePicker()}>
          <Smile />
        </button>
      </div>
    </div>
  );
}

export default App;