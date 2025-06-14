import React from "react";
import "./PlantCard.css";

const PlantCard = ({ plant, onClick }) => {

  const careLevelIcons = {
    Easy: "🟢",
    Medium: "🟡",
    Hard: "🔴"
  };

  return (
    <div className="plant-card" onClick={onClick}>
      <img src={plant.image} alt={plant.commonName} />
      <h2>{plant.commonName}</h2>
      <p><em>{plant.scientificName}</em></p>
      <p>
        <strong>{careLevelIcons[plant.careLevel]}</strong> {plant.careLevel} Care
      </p>
    </div>
  );
};

export default PlantCard;


