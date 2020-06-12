import React, { Component } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Photos.css";

class Photos extends Component {
  constructor(props) {
    super();
    this.state = {
      pictures: [],
      indexValue: 0,
      search: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.ReloadImages();
  }
  // Making an api call to flickr to fetch data, for more infomation read the readme file
  ReloadImages = () => {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=" +
        process.env.REACT_APP_API_KEY +
        "&tags=" +
        this.state.search +
        " &per_page=10&page=1&format=json&nojsoncallback=1"
    )
      .then(function (response) {
        return response.json();
      })
      .then(
        function (res) {
          let picArray = res.photos.photo.map((pic) => {
            var srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              ".jpg";
            return (
              <Link to={`/photodetails/${pic.id}`}>
                <img alt="dogs" src={srcPath} key={pic.id}></img>
              </Link>
            );
          });
          this.setState({ pictures: picArray });
        }.bind(this)
      );
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    const { search } = this.state;
    this.ReloadImages();
  }

  render() {
    return (
      <div>
        <Container>
          {/* Input to search location for images */}
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formBasicSurname">
                <Form.Control
                  size="lg"
                  type="text"
                  name="search"
                  onChange={this.handleChange}
                  placeholder="type in your search eg. Location"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicFullname">
                <Button variant="primary" size="lg" onClick={this.handleSubmit}>
                  Search
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>
          {/*  Display images */}
          {this.state.pictures}
        </Container>
      </div>
    );
  }
}

export default Photos;
