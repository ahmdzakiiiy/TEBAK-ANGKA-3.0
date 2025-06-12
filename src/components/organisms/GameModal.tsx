import { useState } from 'react';
import { Button } from '../atoms/Button';
import { InputNumber } from '../atoms/InputNumber';
import { Text } from '../atoms/Text';

interface GameModalProps {
  isVisible: boolean;
  onGuess: (number: number) => void;
  message: string;
}

export const GameModal = ({ isVisible, onGuess, message }: GameModalProps) => {
  const [guessNumber, setGuessNumber] = useState<number>(1);

  if (!isVisible) return null;

  return (
    <section className="h-full w-full bg-black bg-opacity-50 fixed flex justify-center items-center content-center left-0 top-0">
      <div className="container max-w-sm p-2 text-center bg-white border shadow-lg rounded-xl text-slate-800 md:max-w-xl md:p-8 lg:max-w-xl lg:p-12">
        <Text className="p-2 text-base font-normal md:text-lg">
          Guess the number 1-10
        </Text>
        
        {message && <Text variant="error" className="mb-4">{message}</Text>}

        <Text className="mb-4 text-lg font-semibold md:text-xl">
          Masukkan angka tebakanmu
        </Text>

        <InputNumber
          value={guessNumber}
          onChange={setGuessNumber}
          className="md:m-2"
        />
        <br />

        <Button
          onClick={() => onGuess(guessNumber)}
          className="mx-auto my-1"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </section>
  );
};
