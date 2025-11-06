import { useState, React } from "react";
import { Card, Image } from "semantic-ui-react";

function HogCard({ hog, hideHog }) {
  const [hiddenDiv, sethiddenDiv] = useState(false);
  const [hiddenHog, sethiddenHog] = useState(false);

  function handleHideClick() {
    sethiddenDiv((previousState) => !previousState);
  }

  function handleHidePigClick() {
    // call parent to remove the hog from the list
    if (hideHog) hideHog(hog);
  }

  return (
    <div>
      <button onClick={handleHidePigClick}>Hide Me</button>
      <div className={hiddenHog ? "hidePig" : "showPig"}>
        <Card
          aria-label="hog card"
          onClick={handleHideClick}
          className="ui card"
        >
          <Image
            src={hog.image}
            alt={`Photo of ${hog.name}`}
            wrapped
            ui={false}
            className="image"
          />
          <Card.Content>
            <Card.Header>
              <h3>{hog.name}</h3>
            </Card.Header>

            {hiddenDiv && (
              <div className="extraContent">
                <Card.Description>Specialty: {hog.specialty}</Card.Description>
                <Card.Meta>{hog.weight}</Card.Meta>
                <Card.Description>
                  {hog.greased ? "Greased" : "Nongreased"}
                </Card.Description>
                <Card.Description>
                  {hog["highest medal achieved"]}
                </Card.Description>
              </div>
            )}
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
export default HogCard;