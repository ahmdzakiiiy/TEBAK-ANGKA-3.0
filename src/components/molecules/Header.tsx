import { Text } from "../atoms/Text";

export const Header = () => {
  return (
    <header className="px-4 py-3 mx-auto text-center md:p-5">
      <Text variant="title" className="text-xl md:text-2xl">
        TEBAK ANGKA{" "}
        <span className="text-2xl text-teal-500 md:text-3xl">v3</span>
      </Text>
      <Text variant="subtitle" className="mt-2 text-base md:text-lg md:mt-4">
        Selamat Datang di Game Tebak Angka!
      </Text>
      <Text className="mt-2 mb-1 text-sm md:text-base">
        Pilih angka dengan mengikuti{" "}
        <span className="font-semibold text-rose-600">kata hati</span> kamu
        sendiri untuk memenangkan permainan ini ^^
      </Text>
      <Text className="text-sm font-medium md:text-base">
        Kamu punya <span className="font-semibold">3x</span> kesempatan bermain
        lhoo.
      </Text>
    </header>
  );
};
