import React from "react";
import { CardBody, CardTitle, CardSubtitle } from "reactstrap";
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

const CardBodyDiv = styled.div`
  padding: 2%;
  width: 250px
`

export default function LocationCard(props) {
  return (
    <Card>
      <CardBodyDiv>
        <CardBody>
          <CardTitle>Name: {props.name}</CardTitle>
          <CardSubtitle>Type: {props.type}</CardSubtitle>
          <CardSubtitle>Dimension: {props.dimension}</CardSubtitle>
          <CardSubtitle>Residents: {props.residents.length}</CardSubtitle>
        </CardBody>
      </CardBodyDiv>
    </Card>
  )
}