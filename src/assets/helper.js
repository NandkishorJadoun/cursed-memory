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

export function shuffle(array) {
  const arr = array.slice();
  let currentIndex = arr.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
}

export function prettyName(name) {
  const arr = name.split(",");
  if (arr.length < 2) {
    return name;
  }
  const reversed = arr.reverse();
  return reversed.join(" ");
}
