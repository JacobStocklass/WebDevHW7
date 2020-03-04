import React from 'react';
import AppMode from '../AppMode.js'
import EditLogPage from './EditLog'
import EditTable from './EditTable'




class EditPage extends React.Component {
    constructor(props){
      super(props);
      let data = JSON.parse(localStorage.getItem("hwUserData"));
      //console.log(this.props.userID)
      //console.log(JSON.stringify(data[this.props.userID]));
      this.state = {people: data[this.props.userID].people,
                    peopleCount: data[this.props.userID].peopleCount,
                    deleteId: "",
                    editId: ""};
    }

    handleAddButtonClick = () => {
      this.props.changeMode(AppMode.EDIT_LOG)
    }

    handleSave = (newData) => {
      let data = JSON.parse(localStorage.getItem("hwUserData"));
      let newPeople = this.state.people;
      let newCount = this.state.peopleCount;
      newData.peopleNum = newCount + 1;
      newPeople[this.state.peopleCount+1] = newData;
      data[this.props.userID].people = newPeople;
      data[this.props.userID].peopleCount = this.state.peopleCount + 1;
      localStorage.setItem("hwUserData",JSON.stringify(data));
      this.setState({people: newPeople, peopleCount: newData.peopleNum});
      this.props.changeMode(AppMode.EDIT);
    }
    //need to display local stuff here??
    render() {
      return(
      <div className="padded-page">
        <h1></h1>
        <table className="table table-hover">
          <thead className="thead-light">
          <tr>
            <th>Name | </th>
            <th>Age | </th>
          </tr>
          </thead>
          
          <EditTable
          people={this.state.people}
          changeMode={this.props.changeMode}
          menuOpen={this.props.menuOpen}
          userID={this.props.userID}/>
          
        </table>
        <button id="addRecordButton" onClick={this.handleAddButtonClick}>
            <span className="fa fa-plus"></span>
        </button>
        <EditLogPage
          mode={this.props.mode}
          startData={""}
          handleSave={this.handleSave}/>
      </div>
      );
    }
}

export default EditPage;