import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import fetchData from "./PokiCall";
import './PokiHome.css';

function PokiHome() {
  const [pokemon, setPokemon] = useState("zubat");
  const [data, setData] = useState();



  const handleFetchData = async () => {
    const fetchedData = await fetchData(pokemon);
  
    if (fetchedData) {
      setData(fetchedData);
    }

  };
  
  const validateAndFetchData = async () => {
    if (pokemon) {
      try {
        const validatedData = await fetchData(pokemon);
        if (validatedData) {
          handleFetchData();
        } else {
          console.log('Invalid data');
        }
      } catch (error) {
        console.error('Error during data validation:', error);
      }
    } else {
      console.log('No pokemon provided');
    }
  };
  validateAndFetchData();
  
  
  

  return (
    <Container className="background center">

      <Row>
        <Col>
          <h1>Poki Api</h1>
        </Col>
      </Row>

      <Row>
        <Col >
          <h1>Input Pokemon</h1>
          <input
            onChange={(event) => {
              setPokemon(event.target.value);
            }}
          />
        </Col>
      </Row>

      <Row>
        <Col  className="pokiName">
          <Row>
            <Row>
              <Col> <p>{data && data.name}</p> </Col>
              <Col > <p> types: {data && data.types.map(type => {
                return `${type.type.name} `;
              })}
              </p> </Col>
            </Row>
          </Row>
          <Row>
            <Col >
              <img src={data && data.sprites.front_default} alt={data && data.name} />
            </Col>
            <Col >
              <img src={data && data.sprites.back_default} alt={data && data.name} />
            </Col>
          </Row>
          <Row>
            <Col >
              <img src={data && data.sprites.front_shiny} alt={data && data.name} />
            </Col>
            <Col >
              <img src={data && data.sprites.back_shiny} alt={data && data.name} />
            </Col>
          </Row>
      <Row>
        <Col>
          <h1>moves</h1>
          <p> moves: {data && data.moves.map(moves => {
            return `${moves.move.name} `;
          })}
          </p>
        </Col>
      </Row>
        </Col>
      </Row>


    </Container >
  );
}

export default PokiHome;
