import React, { useState, useEffect } from "react";
import PlantCard from "./components/PlantCard";
import PlantDetails from "./components/PlantDetails";
import plantsData from "./data/plantsData";
import "./App.css";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedPlant, setSelectedPlant] = useState(null);

  useEffect(() => {
    setPlants(plantsData);
  }, []);

  const filteredPlants = plants.filter((plant) => {
    const matchesSearch = plant.commonName.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter ? plant.careLevel === filter : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="app">
      <h1 className="plant-heading">Plant Care Library 🪴</h1>

      <input
        type="text"
        placeholder="Search by plant name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filters">
        {["Easy", "Medium", "Hard"].map((level) => (
          <button
            key={level}
            onClick={() => setFilter(filter === level ? "" : level)}
            className={filter === level ? "active" : ""}
          >
            {level}
          </button>
        ))}
      </div>

        <div className="plant-grid">
        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onClick={() => setSelectedPlant(plant)}
          />
        ))}
      </div>

      {selectedPlant && (
        <PlantDetails
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />
      )}
    </div>
  );
}

export default App;
