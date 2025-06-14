import React from "react";
import "./PlantDetails.css";

const PlantDetails = ({ plant, onClose }) => {
  if (!plant) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <img src={plant.image} alt={plant.commonName} />
        <h2>{plant.commonName}</h2>
        <p><em>{plant.scientificName}</em></p>
        <p><strong>Care Level:</strong> {plant.careLevel}</p>
        <p>{plant.description}</p>
      </div>
    </div>
  );
};

export default PlantDetails;
