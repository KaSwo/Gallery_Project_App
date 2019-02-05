
import React from "react";


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            tag: "",
            option:"",
            


        };
    }

   onClick =() => {
       this.props.loadText(this.state.tag)
       this.setState({inputVal: ""}) //dokończ
   }
   
   handleChangeForAll = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 


    

    render() {
        return(
            <div>
               <div className ="inputs">
                    <input className="imput-style" placeholder= "find by tag... "
                        name="tag"
                        value={this.state.tag}
                        onChange={this.handleChangeForAll}/>               
                    
                </div> 
                <button className ="buttonOne"
                    name="button"
                    onClick={this.onClick}>
                    Get Picture ! 
                </button>
                

              


            </div>
        );
        
        
    }
}
    
export default Search;