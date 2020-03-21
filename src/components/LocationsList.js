import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then((res) => {
        setCharacters(res.data.results);
      })
  }, []);

  return (
    <div>
      <Container>
        {characters.map(character => {
          return (
            <LocationCard
              key={character.name}
              {...character}
            />
          )
        })}
      </Container>
    </div>
  );
}
