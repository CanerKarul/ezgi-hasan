import { useState } from 'react';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import { memories } from './data/memories';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
      {!started && <Intro onStart={() => setStarted(true)} />}

      {started && (
        <div style={{
          opacity: started ? 1 : 0,
          transition: 'opacity 1.5s ease-in'
        }}>
          <Timeline memories={memories} />
        </div>
      )}
    </div>
  );
}

export default App;
