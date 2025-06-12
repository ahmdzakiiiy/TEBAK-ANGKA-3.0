import { useState } from "react";
import { Button } from "../atoms/Button";
import { InputNumber } from "../atoms/InputNumber";
import { Text } from "../atoms/Text";

interface GameModalProps {
  isVisible: boolean;
  onGuess: (number: number) => void;
  message: string;
}

export const GameModal = ({ isVisible, onGuess, message }: GameModalProps) => {
  const [guessNumber, setGuessNumber] = useState<number>(1);

  if (!isVisible) return null;

  return (
    <section className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="w-11/12 max-w-xs p-4 text-center bg-white border shadow-lg rounded-xl text-slate-800 md:max-w-sm lg:max-w-md md:p-6">
        <Text className="text-sm font-medium md:text-base lg:text-lg">
          Guess the number 1-10
        </Text>

        {message && (
          <Text variant="error" className="my-2 text-sm md:text-base md:my-3">
            {message}
          </Text>
        )}

        <Text className="my-3 text-base font-semibold md:text-lg">
          Masukkan angka tebakanmu
        </Text>

        <div className="my-3">
          <InputNumber value={guessNumber} onChange={setGuessNumber} />
        </div>

        <Button
          onClick={() => onGuess(guessNumber)}
          className="w-full max-w-xs py-2 mx-auto my-2 md:w-auto md:px-8"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </section>
  );
};
