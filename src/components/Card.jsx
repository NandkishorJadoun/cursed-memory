export default function Card({ name, image, handleCardClick }) {
  return (
    <div className="card" onClick={handleCardClick}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
