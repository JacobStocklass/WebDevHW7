import React from 'react';
import AppMode from '../AppMode.js'


class EditLogPage extends React.Component{
    constructor(props){
        super(props);
        let today = new Date(Date.now()-(new Date()).getTimezoneOffset()*60000);
        if(this.props.mode === AppMode.EDIT_LOG){
          this.state = {date: today.toISOString().substr(0,10),
                        name: "",
                        age: ""}
        }
        else{
          this.state = this.props.startData;
        }
        //this.nameInputRef = React.createRef();
        //this.ageInputRef = React.createRef();
    }

    handleChange = (event) => {
      const name = event.target.name;
      this.setState({[name]: event.target.value});
    }

    handleSaveButton = (event) => {
        
        //do something to say save the stuff to local storage that we need to save
        let data = this.state;
        console.log(data);
        setTimeout(this.props.handleSave, 1000, data);
        event.preventDefault();
      
  }
  render(){
    if(this.props.mode == AppMode.EDIT_LOG){
      return(
        <div>
            <p>This is the page to add new records</p>
            <form onSubmit={this.handleSaveButton}>
            <label htmlFor="nameInput" style={{ padding: 0, fontSize: 24 }}>
                Name:
                <input name="name" value={this.state.name} type="text" placeholder="Enter a name"
                id="nameInput" onChange={this.handleChange} required={true}/>
            </label>
            <p />
            <label htmlFor="ageInput" style={{ padding: 0, fontSize: 24 }}>
                Age:
                <input name="age" value={this.state.age} type="number" placeholder="Age" onChange={this.handleChange} required={true}/>
            </label>
            <button type="submitthis">
                &nbsp;Save
            </button>
        </form>
        </div>
      )
    }
    else if(this.props.mode == AppMode.EDIT_EDIT){
      //add ability to edit a existing thing or delete it
      return null;
    }
    else{
      return null;
    }
  }
}
export default EditLogPage