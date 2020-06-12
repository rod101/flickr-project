import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class PhotosDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
          board: {},
          key: "",
          image: null
        };
        console.log("help", this.props.match.params);
      }

      async componentDidMount(){
 //const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&tags='+this.state.search+' &per_page=10&page=1&format=json&nojsoncallback=1'
 //const url = 'https://www.flickr.com/services/rest/?method=flickr.photos&api_key='+process.env.REACT_APP_API_KEY+'';
const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key='+process.env.REACT_APP_API_KEY+'&per_page=10&format=json&nojsoncallback=1'


 //const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&format=json&nojsoncallback=1&auth_token=72157714661935401-709e8fb4db70c7e2&api_sig=5d888fdbb7ba882a928ff7e5e54db7fa'
const response = await fetch(url);
const data = await response.json();
this.setState({image: data.photos.photo.id})
console.log("mydata", data.photos.photo);
//('https://farm'+data.farm+'.staticflickr.com/'+data.server+'/'+data.id+'_'+data.secret+'.jpg')

var srcPath = 'https://farm'+data.farm+'.staticflickr.com/'+data.server+'/'+data.id+'_'+data.secret+'.jpg';
console.log(srcPath)
    }
    

    
                // alert(process.env.REACT_APP_API_KEY);
  
      
    render() {
        // this.props.match.params.id
       const { params } = this.props.match;
       console.log("this is params", params);
       const { id } = params;
     

    //    const {imgurl} = data.photos.photo.id;     
        return (
            <div>
                <Container>

                {/* <img src=""  /> */}

                <h1>details</h1>
               
                {/* <p>userid:{this.props.match.params.id}</p> */}
        <p>userid: {id}</p>
                
                </Container>
            </div>
        )
    }
}

export default PhotosDetails
