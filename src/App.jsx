import { useEffect, useState } from "react";
import { shuffle, prettyName, targetNames, API } from "./assets/helper";
import Card from "./components/Card";
import "./styles/index.css";

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

  const mainJsx = (
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
  );

  const mainLoading = <div className="loading">Loading...</div>;

  return (
    <>
      <header>
        <h1>Cursed Memory</h1>
        <div>
          <p>Score: {score}</p>
          <p>Best: {best}</p>
        </div>
      </header>
      {data.length > 0 ? mainJsx : mainLoading}
      <footer>
        <p>
          Made with ❤️ by{" "}
          <a href="https://github.com/NandkishorJadoun/">Nandkishor</a>
        </p>
      </footer>
    </>
  );
}
