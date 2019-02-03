import React from "react";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: null,
      page: 1 ,
     };
  }
 //button next - metoda onClick pobranie danych - kolejne strony O TYM SAMYM TAGU 
    onClick = () => {
      this.setState({
        page: this.state.page +1 
      },() =>{
        fetch(`https://api.pexels.com/v1/search?query=${this.props.term}`,{
          headers: {
            "Authorization": "563492ad6f9170000100000119b2c277c7c340bbab928823d2551d3b"
          }
        }).then(response => {
          if (response.ok) {
            return response.json();

          }else{
            console.log(response)
          }
        }
      ).then(data => {
        console.log(data);
        this.setState({
          gallery:data.photo
        })
      })  
    })
  }
       

 getNextPage =()=>{
      fetch(this.state.nextPageUrl)   
        .then( resp =>resp.json())
        .then(data=> {
            this.setState({
            nextPageUrl: data.nextPageUrl
       })
      })
    }
                   

//POBRANIE zdjęć z api 

  componentDidMount() {
    fetch(`https://api.pexels.com/v1/curated`,{
      headers: {
        "Authorization": "563492ad6f9170000100000119b2c277c7c340bbab928823d2551d3b"
      }
    })
     .then( resp => resp.json())
     .then(data => {
      console.log(data)
      this.setState({
        gallery:data.photos // objekt -photo-galeria 
      }) 
    })
    
       
  }
  
        
//pobieranie zdjęć z API po tagach

  componentDidUpdate(prevProps){
    if (prevProps.term != this.props.term) {//spr czy term props uległ zmianie 
      fetch(`https://api.pexels.com/v1/search?query=${this.props.term}`,{
        headers: {
          "Authorization": "563492ad6f9170000100000119b2c277c7c340bbab928823d2551d3b"
        }
      })
       .then( resp => resp.json())
       .then(data => {
        console.log(data)
        this.setState({
          gallery:data.photos // objekt -photo-galeria 
        }) 
      })

    }

  }

 

 render() {
  if (this.state.gallery === null) {
    return null
  }
  return <div>
    <ul>
        {this.state.gallery.map (photo => {
            return <li className="galleryBody" key={photo.id}>
            <div className="container">          
                {/* <div>{photo.photographer} </div> */}
                <img className="pictures"                       
                      src={photo.src.medium} alt=""></img>        
              </div>
          </li> 
          })}
        }
      </ul>
      <button className="nextButton"
               onClick ={this.onClick}>Next</button>
    </div>
  }
    
  }
  
 
 
 
 

  
export default Gallery;
