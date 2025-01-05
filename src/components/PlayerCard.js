import { useState } from 'react';

function PlayerCard({ name, img, statistics }) {
  const [imgGoster, setGoster] = useState(true);

  const toggleCard = () => {
    setGoster(!imgGoster);
  };

  return (
    <div className="card" onClick={toggleCard}>
      <img
        src={img}
        className={`card-front ${!imgGoster ? 'hidden' : ''} `}
        alt=""
      />
      <h3>{name}</h3>
      <div className={`card-back ${imgGoster ? 'hidden' : ''} `}>
        {statistics.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default PlayerCard;
