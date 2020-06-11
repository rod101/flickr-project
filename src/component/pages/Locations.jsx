import React, { Component } from "react";
import axios from "axios";
// import {ListGroup} from 'react-bootstrap';
import ListGroup from "react-bootstrap/ListGroup";
import "./Locations.css";
import { Container } from "react-bootstrap";

class Locations extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    //   Fetching data from an Api using axios, for more infomation check the readme
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
      console.log(persons);
    });
  }

  render() {
    return (
      <div>
        <Container>
          <ListGroup>
            {this.state.persons.map((person) => (
              <ListGroup.Item>
                <b>Location: </b>
                {person.address.street}, {person.address.city} (Geo:{" "}
                {person.address.geo.lat}, {person.address.geo.lng})
              </ListGroup.Item>
            ))}
          </ListGroup>  
        </Container>
      </div>
    );
  }
}

export default Locations;
