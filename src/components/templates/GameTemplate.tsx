import { useState } from 'react';
import { Header } from '../molecules/Header';
import { Footer } from '../molecules/Footer';
import { MainSection } from '../organisms/MainSection';
import { GameModal } from '../organisms/GameModal';
import { Button } from '../atoms/Button';

export const GameTemplate = () => {
  const [showGame, setShowGame] = useState(false);
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(3);
  const [targetNumber, setTargetNumber] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  // Generate a new target number and reset game state
  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 10) + 1);
    setAttempts(3);
    setMessage('');
    setIsGameOver(false);
    setIsWin(false);
  };

  // Go back to main screen
  const handleBack = () => {
    setShowGame(false);
    resetGame();
  };
  const handleGuess = (guessNumber: number) => {
    if (attempts <= 0) {
      setMessage('Game Over! Kesempatan kamu sudah habis.');
      setIsGameOver(true);
      return;
    }

    const newAttempts = attempts - 1;
    setAttempts(newAttempts);

    if (guessNumber === targetNumber) {
      setMessage('Selamat! Kamu berhasil menebak angka dengan benar! 🎉');
      setIsWin(true);
      setIsGameOver(true);
      return;
    }

    if (newAttempts === 0) {
      setMessage(`Game Over! Angka yang benar adalah ${targetNumber}`);
      setIsGameOver(true);
      return;
    }

    if (guessNumber < targetNumber) {
      setMessage(`Angka terlalu kecil! Sisa kesempatan: ${newAttempts}`);
    } else {
      setMessage(`Angka terlalu besar! Sisa kesempatan: ${newAttempts}`);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-grow">
        {!showGame ? (
          <MainSection onShowGame={() => setShowGame(true)} />
        ) : isGameOver ? (
          <div className={`container max-w-sm p-8 mx-auto mt-8 text-center bg-white border shadow-md rounded-xl ${isWin ? 'border-green-500' : 'border-red-500'}`}>
            <div className={`mb-6 text-xl font-bold ${isWin ? 'text-green-600' : 'text-red-600'}`}>{message}</div>
            <div className="flex justify-center space-x-4">
              <Button 
                onClick={resetGame} 
                className="px-6"
              >
                Coba Lagi
              </Button>
              <Button 
                onClick={handleBack}
                variant="secondary"
                className="px-6"
              >
                Kembali
              </Button>
            </div>
          </div>
        ) : (
          <GameModal 
            isVisible={showGame} 
            onGuess={handleGuess}
            message={message}
          />
        )}
        
        {message && !isGameOver && (
          <div className="my-6 text-2xl font-bold text-center text-slate-700">
            GOOD LUCK !💋
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
