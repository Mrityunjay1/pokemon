import './App.css';
import { useState, useEffect } from 'react';
import {  Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [pokemon, setPokemons] = useState([]);

  const getAll = async () => {
    const response = await fetch("https://dev-util.edyst.com/challenge/pokemons/random")
    const data = await response.json();
    console.log(data)
    setPokemons(data);
  }

  useEffect(() => {
    getAll();
  }, [])
  return (
    <div className="container">
      <div className="row">
        {pokemon.map((item,idx) => {
          return (
            
            <Card style={{ width: '18rem', backgroundColor: (item.cardColors.bg)}} className="card" key={idx}>
              <Card.Body>
              <div className="cont">
                <Card.Text className="tagText" style={{ backgroundColor: (item.cardColors.tagbg)}}>{item.tag}
                </Card.Text>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
                
                <Card.Text className="text" style={{ backgroundColor: (item.cardColors.textbg)}}><Card.Title style={{ fontFamily:"Arvo"}}>{item.name}</Card.Title>
                  {item.description}
                </Card.Text>
              </Card.Body>
              <Card.Img variant="top" src={`${item.sprite}`} className="imgrounded" style={{ backgroundColor: (item.cardColors.imgbg)}} />
            </Card>

          )
        })}
      </div>
    </div>
  );
}

export default App;
