import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const Button = styled.button`
  background: #38C9CC;
  border-radius: 3px;
  border: 1px solid #38C9CC;
  color: whitesmoke;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
}
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Nav>
        <Link to='/'><Button>Home</Button></Link>
        <Link to='/characters'><Button>Characters</Button></Link>
        <Link to='/locations'><Button>Locations</Button></Link>
        <Link to='/search'><Button>Search</Button></Link>
      </Nav>
    </header>
  );
}
