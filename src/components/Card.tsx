type CardProps = {
  name: string;
  image: string;
  handleCardClick: React.MouseEventHandler<HTMLDivElement>;
};

export default function Card({ name, image, handleCardClick }: CardProps) {
  return (
    <div className="card" onClick={handleCardClick}>
      <img src={image} alt={name} height={350} />
      <p>{name}</p>
    </div>
  );
}
