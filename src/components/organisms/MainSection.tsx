import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';

interface MainSectionProps {
  onShowGame: () => void;
}

export const MainSection = ({ onShowGame }: MainSectionProps) => {
  return (
    <main className="flex items-center justify-center w-full px-4 mt-8">
      <div className="w-11/12 max-w-xs p-8 bg-white border rounded-lg shadow-md md:max-w-sm lg:max-w-md md:p-10">
        <Text variant="subtitle" className="items-center text-center">
          Tekan tombol ini manieezz
        </Text>
        <Button
          variant="secondary"
          onClick={onShowGame}
          className="block w-full py-3 mx-auto mt-6 text-center md:w-auto md:px-8"
        >
          Touch Me
        </Button>
      </div>
    </main>
  );
};
