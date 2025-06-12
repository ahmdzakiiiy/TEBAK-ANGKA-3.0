import { useState } from "react";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";
import { MainSection } from "../organisms/MainSection";
import { GameModal } from "../organisms/GameModal";
import { Button } from "../atoms/Button";

export const GameTemplate = () => {
  const [showGame, setShowGame] = useState(false);
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(3);
  const [targetNumber, setTargetNumber] = useState(
    () => Math.floor(Math.random() * 10) + 1
  );
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  // Generate a new target number and reset game state
  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 10) + 1);
    setAttempts(3);
    setMessage("");
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
      setMessage("Game Over! Kesempatan kamu sudah habis.");
      setIsGameOver(true);
      return;
    }

    const newAttempts = attempts - 1;
    setAttempts(newAttempts);

    if (guessNumber === targetNumber) {
      setMessage("Selamat! Kamu berhasil menebak angka dengan benar! 🎉");
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex-grow">
        {!showGame ? (
          <MainSection onShowGame={() => setShowGame(true)} />
        ) : isGameOver ? (
          <div className="flex items-center justify-center w-full px-4 mt-8">
            <div
              className={`w-11/12 max-w-xs p-5 mx-auto text-center bg-white border shadow-md rounded-xl md:p-8 md:max-w-sm ${
                isWin ? "border-green-500" : "border-red-500"
              }`}
            >
              <div
                className={`mb-4 text-base font-bold md:text-xl md:mb-6 ${
                  isWin ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </div>
              <div className="flex flex-col justify-center w-full gap-3 md:flex-row md:gap-4">
                <Button
                  onClick={resetGame}
                  className="w-full py-2 md:w-auto md:px-6"
                >
                  Coba Lagi
                </Button>
                <Button
                  onClick={handleBack}
                  variant="secondary"
                  className="w-full py-2 md:w-auto md:px-6"
                >
                  Kembali
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <GameModal
            isVisible={showGame}
            onGuess={handleGuess}
            message={message}
          />
        )}{" "}
        {message && !isGameOver && (
          <div className="my-4 text-xl font-bold text-center text-slate-700 md:my-6 md:text-2xl">
            GOOD LUCK !💋
          </div>
        )}
      </div>

      <div className="px-4 py-6 mx-auto text-sm italic text-center text-slate-600 md:text-base md:max-w-lg">
        Game tebak angka menggunakan React JS yang diperbarui dengan tampilan UI
        pada web menggunakan Tailwind CSS sehingga tampilan antarmuka game ini
        bisa cantik secantik Aldaa❤️
      </div>

      <Footer />
    </div>
  );
};
