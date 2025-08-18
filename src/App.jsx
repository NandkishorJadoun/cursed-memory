import { useEffect, useState } from "react";
import { shuffle, prettyName } from "./assets/helper";
import Card from "./components/Card";
const API = "https://api.jikan.moe/v4/manga/113138/characters";

const targetNames = [
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

export default function App() {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  const [best, setBest] = useState(0);

  useEffect(() => {
    let ignore = false;
    if (ignore) return;
    fetch(API)
      .then((res) => res.json())
      .then((json) => {
        if (ignore) return;
        const rawData = json.data;
        const cleanData = rawData
          .filter((charData) => targetNames.includes(charData.character.name))
          .map((charData) => {
            return {
              id: prettyName(charData.character.name),
              name: prettyName(charData.character.name),
              image: charData.character.images.webp.image_url,
            };
          });

        setData(shuffle(cleanData));
      });

    return () => {
      ignore = true;
    };
  }, []);

  const score = cards.length;

  return (
    <>
      <header>
        <h1>Cursed Memory</h1>
        <div>
          <p>Score: {score}</p>
          <p>Best: {best}</p>
        </div>
      </header>
      <main>
        {data.map((char) => (
          <Card
            key={char.id}
            name={char.name}
            image={char.image}
            handleCardClick={() => {
              setData(shuffle(data));
              const id = char.id;
              if (cards.includes(id)) {
                setBest(Math.max(best, cards.length));
                setCards([]);
              } else {
                setCards([...cards, id]);
              }
            }}
          />
        ))}
      </main>
    </>
  );
}
