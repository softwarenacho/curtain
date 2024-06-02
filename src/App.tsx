import { useState } from 'react';
import Curtain from './components/index';

function App() {
  const [control, setControl] = useState(false);

  return (
    <Curtain control={control} setControl={setControl} props={{}}>
      <h1 onClick={() => setControl(!control)}>Click to Close a Curtain</h1>
    </Curtain>
  );
}

export default App;
