 import React from "react";





class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            option: "",
            button: "",
            input: ""
        };
    }
onClick = () => {
    this.props.loadSong(this.state.text)

}
    handleChangeForAll = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    render() {
        return (
            <div>
                
                <input className="imput-style"
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChangeForAll}
                    
                />
                <button
                    name="button"
                    onClick={this.onClick}>
                    Get Picture ! </button>
                <button> Next</button>

    
          </div>
        );
    }
}


export default Forms;
