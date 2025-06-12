import { Text } from '../atoms/Text';

export const Header = () => {
  return (
    <header className="p-5 mx-auto text-center">
      <Text variant="title">
        TEBAK ANGKA <span className="text-3xl text-teal-500">2</span>
      </Text>
      <Text variant="subtitle" className="mt-4">
        Selamat Datang di Game Tebak Angka!
      </Text>
      <Text className="mt-2 mb-1">
        Pilih angka dengan mengikuti <span className="font-semibold text-rose-600">kata hati</span> kamu sendiri untuk memenangkan permainan ini ^^
      </Text>
      <Text className="font-medium">
        Kamu punya <span className="font-semibold">3x</span> kesempatan bermain lhoo.
      </Text>
    </header>
  );
};
