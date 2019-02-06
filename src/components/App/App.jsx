import React from "react";
import './App.css';
//import Forms from "../Forms/forms";

import Gallery from "../Gallery/gallery";
import Search from  "../Search/search";
import ImageUploader from 'react-images-upload';
//import Carousel from "../Carousel/carousel";

// import InfiniteScroll from 'react-infinite-scroller';

class App extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     text: "",
   }
 }
 setText = (text) => {
   this.setState({
     text: text
   })
 }

 render() {
   return (
     
       <div>
         <div className="main">
          
          
           <h1>
                Your first <br></br>ten thousand photos <br></br>will be the worst.<br></br>
          </h1>

          <h4> Henri Cartier Bresson</h4>
          <h2>Take one of ours...</h2>

          <nav className="navigationUP">
                      <ul className="nawigationUL">
                        <li><a href="#"></a>popular</li>
                        <li><a href="#"></a>photographer</li>
                        <li><a href="#"></a>favourites</li>
                      </ul>
           </nav>
      </div>
           <div className="form-container">
           <Search loadText={this.setText}/>
           </div>
           <div className="container">
             <div className="row">
             
               <Gallery term={this.state.text} />
               {/* <ImageUploader 
                withIcon={true}
                buttonText='add your photo'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}/> */}
               

            
              
  

             </div>
             
           </div>
         </div>
       


   )
 }
}
export default App;