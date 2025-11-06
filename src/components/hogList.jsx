import { useState, React } from "react";
import HogCard from "./hogCard";

function HogList({ hogs, hideHog }) {
  const [displayGreased, setDisplayGreased] = useState(false);

  function handleGreasedClick() {
    setDisplayGreased((prevState) => !prevState);
  }

  const hogsToDisplay = hogs.filter((hog) => {
    if (!displayGreased) return true;
    return hog.greased;
  });

  return (
    <div className="listContainer">
      <div className="filterSection">
        <input
          type="checkbox"
          id="greased-checkbox"
          checked={displayGreased}
          onChange={handleGreasedClick}
        />
        <label htmlFor="greased-checkbox">Greased Pigs Only?</label>
      </div>

      <div className="hogList">
        {hogsToDisplay.map((hog, index) => (
          <HogCard key={index} hog={hog} hideHog={hideHog} />
        ))}
      </div>
    </div>
  );
}

export default HogList;