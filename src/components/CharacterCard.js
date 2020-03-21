import React from "react";
import { CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2%;
    position: relative;
    border-radius: 0.2rem;
    background-color: whitesmoke;
    color: #284B5E;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    &:hover {
        bottom: .1rem;
        background-color:  #38C9CC;
        color: whitesmoke;
    }
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <div>
        <CardImg src={props.image} alt="Images" />
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardSubtitle>Species: {props.species}</CardSubtitle>
          <CardSubtitle>Gender: {props.gender}</CardSubtitle>
        </CardBody>
      </div>
    </Card>
  )
}
