import React, { useState } from 'react';
import { Button } from 'primereact/button';
import './App.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    const newCounter = counter;
    setCounter(newCounter + 1);
  };

  return (
    <div className='App'>
      <div className='App-intro'>
        <Button label='Click' icon='pi pi-check' onClick={increment} />
        <p>Number of Clicks: {counter}</p>
      </div>
    </div>
  );
}

export default App;
