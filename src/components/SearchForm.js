import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

const SearchPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

const SearchBar = styled.div`
    border: solid 2px  #38C9CC;
    margin: 3% 0;
`

export default function SearchForm() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        const characters = res.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setCharacters(characters);
      });
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <SearchPage>
        <SearchBar>
          <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search By Name"
            value={query}
            onChange={handleInputChange}
          />
        </SearchBar>

        <Container>
          {characters.map(character => {
            return (
              <CharacterCard
                key={character.id}
                {...character}
              />
            )
          }
          )}
        </Container>
      </SearchPage>
    </div>
  )
}