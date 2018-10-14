import React, { Component } from 'react';
import '../styles/Laptop.scss';
import laptopImg from '../images/macbook.png';

function bgStyle(bg) {

  const style = {
    backgroundImage: `url("${bg}")`,
    backgroundSize: 'cover'
  };

  return style;
}


class Laptop extends Component {

  render() {
    const {img, alt, size} = this.props;

    return (
      <div className='laptop-container'>
          <div className="device">
            <div className="screen">
              <div className='laptopBgImg'
                   style={bgStyle(img)}
               />
            </div>
          </div>
      </div>
    );
  }
}

export default Laptop;
