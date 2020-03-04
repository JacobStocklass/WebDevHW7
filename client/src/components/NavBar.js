import React from 'react';
import AppMode from '../AppMode.js'
//write a button click handler that uses props and conditionally render menu button icon


//how do i get the menu Icon in this thing???
class NavBar extends React.Component {

  handleMenuBtnClick = () => {
    if(this.props.mode === AppMode.EDIT_LOG || this.propsmode === AppMode.EDIT_EDIT){
      this.props.changeMode(AppMode.EDIT)
      return;
    }
    if (this.props.mode != AppMode.LOGIN){
      this.props.toggleMenuOpen();
    }
  }
  
  getMenuBtnIcon = () => {
    if ((this.props.mode === AppMode.EDIT_LOG) || (this.props.mode === AppMode.EDIT_EDIT))
        return "fa fa-arrow-left";
    if (this.props.menuOpen)
      return "fa fa-times";
    return "fa fa-bars";
  }
  render() {
    return (
      <div className="navbar">  
        <span className="navbar-items">
          <button className="sidemenu-btn" onClick={this.handleMenuBtnClick}>
            <span id="sidemenu-btn-icon" className={"sidemenu-btn-icon " + this.getMenuBtnIcon()}>
            </span>
          </button>
          <img src="https://jewishlouisville.org/wp-content/uploads/2016/03/J-logo-1col-1.jpg" alt="Speed Score Logo" height="38px"
            width="38px" />
          <span id="topBarTitle" className="navbar-title">
            &nbsp;{this.props.title}
          </span>
        </span>
      </div>
    ); 
  }
}

export default NavBar;

//