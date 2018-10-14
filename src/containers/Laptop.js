import React, { Component } from 'react';
import '../styles/Laptop.scss';
import laptopImg from '../images/macbook.png';

class Laptop extends Component {


  render() {
    const {img, alt, size} = this.props;

    return (
      <div className='laptop-container' style={{
        minWidth: size,
      }
      }>
          <div className="device">
            <div className="screen">
              <img src={img} alt={alt}/>
            </div>
          </div>
      </div>
    );
  }
}

export default Laptop;
