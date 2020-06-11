import React, { Component } from 'react'
import './Testpage.css'

class Testpage extends Component {

    constructor(){
        super();
        this.state = {
          pictures: [],
        };
      }
    
      componentDidMount(){
        alert(process.env.REACT_APP_API_KEY);
        fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_API_KEY+'&tags=cow &per_page=10&page=1&format=json&nojsoncallback=1')
        .then(function(response){
          return response.json();
        })
        .then(function(res){
          console.log(JSON.stringify(res));
          let picArray = res.photos.photo.map((pic) => {
            
            var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
            return(
              <img alt="dogs" src={srcPath}></img>
            )
          })
          this.setState({pictures: picArray});
        }.bind(this))
      }

    render() {
        return (
            <div>
                <h1>this is a test page</h1>
                <p className="App-intro">
          {this.state.pictures}
        </p>
            </div>
        )
    }
}

export default Testpage
