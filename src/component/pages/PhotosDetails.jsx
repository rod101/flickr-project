import React, { Component } from "react";
import { Container } from "react-bootstrap";

class PhotosDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: null,
      dateUploaded: null,
      owner: null,
      location: null,
    };
    console.log("help", this.props.match.params);
  }

  componentDidMount() {
    let imageId = this.props.match.params.id;
    this.loadImageDetails(imageId);
  }
  // Get the image details
  loadImageDetails(imageId) {
    const GET_PIC_URL =
      "https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" +
      process.env.REACT_APP_API_KEY +
      "&nojsoncallback=1&per_page=10&format=json&photo_id=" +
      imageId;

    fetch(GET_PIC_URL)
      .then(function (response) {
        return response.json();
      })
      .then(
        function (res) {
          let pic = res.photo;
          let srcPath =
            "https://farm" +
            pic.farm +
            ".staticflickr.com/" +
            pic.server +
            "/" +
            pic.id +
            "_" +
            pic.secret +
            ".jpg";
          console.log(srcPath);
          this.setState({ path: srcPath });
          this.setState({ dateUploaded: pic.dates.taken });
          this.setState({ owner: pic.owner.realname });
          this.setState({ location: pic.owner.location });
        }.bind(this)
      );
  }

  render() {
    // this.props.match.params.id
    const { params } = this.props.match;
    const { id } = params;

   
    return (
      <div>
        <Container>
          <h1>Image Details</h1>
          <img src={this.state.path} />
          <div>
            <p>Owner : {this.state.owner} </p>
            <p>Date Taken : {this.state.dateUploaded} </p>
            <p>Location : {this.state.location} </p>
          </div>
          <p>Picture Id From flicker: {id}</p>
        </Container>
      </div>
    );
  }
}

export default PhotosDetails;
