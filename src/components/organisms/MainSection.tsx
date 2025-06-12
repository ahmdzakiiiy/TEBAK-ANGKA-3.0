import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';

interface MainSectionProps {
  onShowGame: () => void;
}

export const MainSection = ({ onShowGame }: MainSectionProps) => {
  return (
    <main>
      <div className="container max-w-sm p-12 m-4 mx-auto bg-white border rounded-md shadow-sm">
        <Text variant="subtitle" className="items-center text-center">
          Tekan tombol ini manieezz💋
        </Text>
        <Button
          variant="secondary"
          onClick={onShowGame}
          className="block mx-auto mt-4"
        >
          Touch Me
        </Button>
      </div>
    </main>
  );
};
