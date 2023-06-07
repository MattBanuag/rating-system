import { useState } from 'react';
import Dialog from './components/Dialog';
import StarRating from './components/StarRating';
import './style/index.css';

function App() {
  const [dialogState, setDialogState] = useState(false);

  const handleOpenDialogStatus = () => {
    setDialogState(true);
  };

  const handlecloseDialogStatus = () => {
    setDialogState(false);
  };

  return (
    <main className="flex flex-col justify-center items-center gap-8 h-screen">
      <StarRating/>
      <Dialog
      status={dialogState}
      openDialogFunction={handleOpenDialogStatus}
      closeDialogFunction={handlecloseDialogStatus}
      />
    </main>
  );
}

export default App;
