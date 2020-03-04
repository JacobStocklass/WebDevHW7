import React from 'react';
import AppMode from '../AppMode.js'

class EditTable extends React.Component {

    constructor (props){
        super(props);
        let data = JSON.parse(localStorage.getItem("hwUserData"));
        this.state = {people: data[this.props.userID].people,
                      peopleCount: data[this.props.userID].peopleCount};
    }

    renderTable = () =>{
        let table=[];
        for(const r in this.props.people){
            table.push(
                <tr key={r}>
                    <td>{this.props.people[r].date}</td>
                    <td>{this.props.people[r].name}</td>
                    <td>{this.props.people[r].age}</td>
                </tr>
            );
        }
    return table;          
    }

    render(){
        return(
            <tbody>
        {Object.keys(this.props.people).length === 0 ?
        <tr>
            <td colSpan="5" style={{fontstyle: "italic"}}>No People Logged</td>
        </tr> : this.renderTable()
        }
        </tbody>);
    }
}
export default EditTable;