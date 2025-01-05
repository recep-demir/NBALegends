import data from '../helper/data';
import PlayerCard from './PlayerCard';
import { useState } from 'react';

function CardContainer() {
  const [aranan, setAranan] = useState('');

  const aramaFonksiyonu = (e) => {
    setAranan(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(aranan.toLowerCase())
  );

  return (
    <>
      <input
        className="searchBar"
        type="text"
        placeholder="Search Player..."
        onChange={aramaFonksiyonu}
      />
      <div className="card-container">
        {filteredData.map((item, index) => (
          <PlayerCard key={index} {...item} />
        ))}
      </div>
    </>
  );
}

export default CardContainer;
