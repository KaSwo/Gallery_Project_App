import React from "react";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: null,
      page: 1 ,
     };
  }

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

  
 
   

    getNextPage =()=>{
      fetch(this.state.nextPageUrl)   
        .then( resp =>resp.json())
        .then(data=> {
            this.setState({
            nextPageUrl: data.nextPageUrl
       })
      })
    }

        


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
                <img className="pictures"style={{ opacity:"1",
                          width:"100",
                          height:"auto",
                          transition: "5s ease",
                          backfaceVisibility:"hidden",
                          margin:"10px"
                       }}
                      src={photo.src.medium} alt=""></img>        
              </div>
          </li> 
          })}
        }
      </ul>
      <button className="nextButton"
               onClick ={this.onClick}
               >Next</button> 
    </div>
  }
    
  }
  
 
 
 
 

  
export default Gallery;
