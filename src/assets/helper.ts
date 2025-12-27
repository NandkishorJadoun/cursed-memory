export const API = "https://api.jikan.moe/v4/manga/113138/characters";

export const targetNames = [
  "Fushiguro, Megumi",
  "Gojou, Satoru",
  "Itadori, Yuuji",
  "Kugisaki, Nobara",
  "Hanami",
  "Mahito",
  "Uraume",
  "Jougo",
  "Panda",
  "Okkotsu, Yuuta",
  "Iori, Utahime",
  "Inumaki, Toge",
];

interface CharData {
  id: string;
  name: string;
  image: string;
}

export function shuffle(array: CharData[]) {
  const arr = array.slice();
  let currentIndex = arr.length;
  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    const temp = arr[currentIndex] as CharData
    arr[currentIndex] = arr[randomIndex] as CharData
    arr[randomIndex] = temp;
  }
  return arr;
}

export function prettyName(name: string) {
  const arr = name.split(",");
  if (arr.length < 2) {
    return name;
  }
  const reversed = arr.reverse();
  return reversed.join(" ");
}
