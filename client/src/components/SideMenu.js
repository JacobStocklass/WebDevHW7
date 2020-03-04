import React from 'react';
import AppMode from '../AppMode.js';
//import App from './App.js';



class SideMenu extends React.Component {

  renderModeMenuItems = () => {
    switch (this.props.mode) {
      case AppMode.EDIT:
        return(
          <div>
          
          <a className="sidemenu-item" >
              <span className="fa fa-plus"></span>&nbsp;Add Data Record</a>
              
          <a className="sidemenu-item" >
              <span className="fa fa-save"></span>&nbsp;Edit Data Record</a>
          </div>
        );
      break;
      case AppMode.EDIT_EDIT:
        return(
          <div>
          
          <a className="sidemenu-item" >
              <span className="fa fa-plus"></span>&nbsp;Add Data Record</a>
          
          
          <a className="sidemenu-item" >
              <span className="fa fa-save"></span>&nbsp;Edit Data Record</a>
          
          </div>
        );
      break;
      case AppMode.EDIT_LOG:
        return(
          <div>
          
          <a className="sidemenu-item" >
              <span className="fa fa-plus"></span>&nbsp;Add Data Record</a>
          
          
          <a className="sidemenu-item" >
              <span className="fa fa-save"></span>&nbsp;Edit Data Record</a>
          
          </div>
        );
      break;
      case AppMode.DATA:
        return(
          <div>
            <a className="sidemenu-item">
              <span className="fa fa-plus"></span>&nbsp;Test Data</a>
            <a className="sidemenu-item">
              <span className="fa fa-search"></span>&nbsp;Test Test Data</a>
          </div>
          );
      break;
      default:
          return null;
      }
  }
  
    render() {
      return (
       <div className= {"sidemenu " + (this.props.menuOpen ? "sidemenu-open" : "sidemenu-closed")} >
         {/* SIDE MENU TITLE */}
         <div className="sidemenu-title">
           <img src='http://tiny.cc/chrisprofilepic' height='50' width='50' />
           <span className="sidemenu-userID">&nbsp;{this.props.userId}</span>
         </div>
         {/* MENU CONTENT */}
         {/*Mode-based menu items */}
         {this.renderModeMenuItems()}
         {/* Always-there menu items */}
         <a className="sidemenu-item" onClick={this.props.showAbout}><span className="fa fa-info-circle">
             </span>&nbsp;About</a>
         <a className="sidemenu-item" onClick={this.props.logout}><span className="fa fa-sign-out">
             </span>&nbsp;Log Out</a>
       </div>
       );
   }
}

export default SideMenu;
