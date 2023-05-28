import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Flashlight from './components/FlashLight/Flashlight';


function App() {
  const [status, setStatus] = useState(false)

  useEffect(() => {
    console.log(`Is the light on? ${status}`)
  }, [status])

  const handleClick = () => {
    if (status === true) {
      setStatus(false)
    } else {
      setStatus(true)
    }
  }

  return (
    <div className="App">
      {status === false ? <Flashlight/> : ''}
      <div className={status + 'FlashLight' }>
      <button onClick={handleClick}>
        This light is {status ? "on" : "off"}!
      </button>
      </div>
    </div>
  );
}

export default App;
