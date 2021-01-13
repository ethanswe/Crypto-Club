import React, { Component } from 'react';
import MenuDrop from '../../imgs/menuDrop.png';
import styled from 'styled-components';

class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu() {
    
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
    
  }

  render() {
    return (
      <div>
        <DropDown onClick={this.showMenu}>
          
        </DropDown>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button> Edit </button>
                <button> Delete </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Card;


const DropDown = styled.div`
background-image: url(${MenuDrop});
width: 50px;
height: 30px;
background-position: cover;
:hover{
    opacity: 0.5;
}
`