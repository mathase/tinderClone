/* eslint-disable no-template-curly-in-string */

import React, { useState, useEffect } from "react";
import "./TinderCard.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

export default function TinderCards() {
  const onSwipe = (direction, nameToDelete) => {
    console.log("removing : " + nameToDelete);
    // setLastDirection(direction);
  };

  const onCardLeftScreen = (name) => {
    console.log(name + " left the screen");
  };

  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("http://localhost:5000/tinder/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);

  console.log(people);

  return (
    <div className="tinder__card">
      <div className="tinder__card__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            flickOnSwipe={true}
            onSwipe={(dir) => onSwipe(dir, person.name)}
            onCardLeftScreen={() => onCardLeftScreen(person.name)}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3 className="">{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
