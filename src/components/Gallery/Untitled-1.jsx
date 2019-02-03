import React from "react";
class MusicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      musicInfo: null,
      newPage: 0
    };
  }
  onClick = () => {
    this.setState({
      newPage: this.state.newPage + 1
    }, () => {
      fetch(`https://cors-anywhere.herokuapp.com/http://itunes.apple.com/search?term=${this.props.term}&offset=${this.state.newPage * 50}`).then(
        response => {
          if (response.ok) {
            return response.json();
          } else {
            console.log(response)
          }
        }
      ).then(data => {
        console.log(data);
        this.setState({
          musicInfo: data
        })
      })
    })
  }
  componentDidUpdate(prevProps) {
    if (this.props.term !== prevProps.term) {
      fetch(`https://cors-anywhere.herokuapp.com/http://itunes.apple.com/search?term=${this.props.term}`).then(
        response => {
          if (response.ok) {
            return response.json();
          } else {
            console.log(response)
          }
        }
      ).then(data => {
        console.log(data);
        this.setState({
          musicInfo: data
        })
      })
    }
  }

  //wyciagnij pobieranie do jednej metody



  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/http://itunes.apple.com/search?term=${this.props.term}&`).then(
      response => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response)
        }
      }
    ).then(data => {
      console.log(data);
      this.setState({
        musicInfo: data
      })
    })
  }
  render() {
    if (this.state.musicInfo === null) {
      return null
    }
    return <div className="container">
      {this.state.musicInfo.results.map(musicInfo => {
        return <div className="search-results" key={musicInfo.trackId}>
          <img className="image" src={musicInfo.artworkUrl100} />
          <div className="artist">
            {musicInfo.artistName}
            {musicInfo.trackName}
          </div>
          <div className="genre">
            {musicInfo.primaryMusicGenre}</div>
        </div>
      })}
      <button
        onClick={this.onClick}>
        Next</button>
    </div>
  }
}


export default MusicInfo;







a {
    text-decoration: none;
    display: inline-block;
    width: 330px;
    height: 228px;
    opacity: 1;
    transform: scale(1,1);
    transition-timing-function: ease-out;
    transition-duration: 250ms;
    -webkit-transform: scale(1,1);
    -webkit-transition-timing-function: ease-out;
    -webkit-transition-duration: 250ms;
    -moz-transform: scale(1,1);
    -moz-transition-timing-function: ease-out;
    -moz-transition-duration: 250ms;
}
a:hover {
    opacity: .7;
    transform: scale(1.05,1.07);
    transition-timing-function: ease-out;
    transition-duration: 250ms;
    -webkit-transform: scale(1.05,1.07);
    -webkit-transition-timing-function: ease-out;
    -webkit-transition-duration: 250ms;
    -moz-transform: scale(1.05,1.07);
    -moz-transition-timing-function: ease-out;
    -moz-transition-duration: 250ms;
    position: relative;
    z-index: 99;
}