import React from 'react';
import NavBar from './NavBar.js';
import SideMenu from './SideMenu.js';
import ModeBar from './ModeBar.js';
import FloatingButton from './FloatingButton.js';
import LoginPage from './LoginPage.js';
//import FeedPage from './FeedPage.js';
import DataPage from './DataPage.js';
import EditPage from './EditPage.js';
import AppMode from "../AppMode.js";
import EditLogPage from  "./EditLog.js"
import EditTable from "./EditTable.js"
//import FontAwesome from 'react-fontawesome';

const modeTitle = {};
modeTitle[AppMode.LOGIN] = "Welcome to Jacobs Homework 6";
modeTitle[AppMode.EDIT] = "Edit Mode";
modeTitle[AppMode.DATA] = "Data mode";
modeTitle[AppMode.EDIT_LOG] = "Log new";
modeTitle[AppMode.EDIT_EDIT] = "Edit something";


const modeToPage = {};
modeToPage[AppMode.LOGIN] = LoginPage;
modeToPage[AppMode.EDIT] = EditPage;
modeToPage[AppMode.DATA] = DataPage;
modeToPage[AppMode.EDIT_LOG]=  EditPage;
modeToPage[AppMode.EDIT_EDIT]= EditPage;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {mode: AppMode.LOGIN,
                  menuOpen: false,
                  userId: "",
                  showAbout: false,
                  rounds: [],
                  roundCount: 0
    };
  }

  handleChangeMode = (newMode) => {
    this.setState({mode: newMode});
  }

  openMenu = () => {
    this.setState({menuOpen : true});
  }
  
  closeMenu = () => {
    this.setState({menuOpen : false});
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
  }
  handleClick = (event) => {
    if (this.state.menuOpen) {    
      this.closeMenu();
    }
    event.stopPropagation();
  }
  setUserId = (Id) => {
    this.setState({userId: Id});
  }

  componentDidMount() {
    window.addEventListener("click",this.handleClick);
  }

//We remove the event listener when the component
//unmounts. This is a best practice. 
  componentWillUnmount() {
    window.removeEventListener("click",this.handleClick);
  }

  toggleAbout = () => {
    this.setState(prevState => ({showAbout: !prevState.showAbout}));
  }

  

  renderAbout = () => {
    return (
      <div className="modal" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title"><b>About SpeedScore</b>
                <button className="close-modal-button" onClick={this.toggleAbout}>
                  &times;</button>
              </h3>
            </div>
            <div className="modal-body">
              <img
              src="https://jewishlouisville.org/wp-content/uploads/2016/03/J-logo-1col-1.jpg"
              height="200" width="200"/>
              <h3>The World's First and Only Suite of Apps for
              Jacobs HW 6</h3>
              <p>Version CptS 489 (React)<br/>
              &copy; Too Live Since '95. All rights
              reserved.
              </p>
              <div style={{textAlign: "left"}}>
                <p>This apps support</p>
                <ul>
                <li>Some stuff</li>
                <li>Other things</li>
                <li>Yeet Gang</li>
                </ul>
                <p>This app was developed by Jacob Stocklass for CS489 HW6.</p>
                <p>For more information on this app, I can be reached at my email jacob.stocklass@wsu.edu</p>
                <button onClick={this.toggleAbout}>OK</button>
                <p>Yeet Gang get out of here.
                </p>
              </div>
              
            </div>
            </div>
        </div>
      </div>
    );
  }

  logout = () =>{
    this.state.mode = AppMode.LOGIN;
    this.state.userId = "";
    this.state.showAbout = false;
    this.toggleMenuOpen();
    this.render();
  }

  render() {
    const ModePage = modeToPage[this.state.mode];
    return (
      <div onClick={this.handleClick}>
        <NavBar 
          title={modeTitle[this.state.mode]}
          mode={this.state.mode}
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}
          toggleMenuOpen={this.toggleMenuOpen}/>
        <SideMenu 
          mode={this.state.mode}
          menuOpen={this.state.menuOpen}
          changeMode={this.handleChangeMode}
          showAbout={this.toggleAbout}
          logout={this.logout}/>
        <ModeBar 
          mode={this.state.mode} 
          changeMode={this.handleChangeMode}
          menuOpen={this.state.menuOpen}/>
        <ModePage menuOpen={this.state.menuOpen}
          mode={this.state.mode} 
          userID = {this.state.userId}
          changeMode={this.handleChangeMode}
          setUserId={this.setUserId}/>
        
        {this.state.showAbout ? this.renderAbout() : null}
      </div>
      );  
  }
}

export default App;