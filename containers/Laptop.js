import React, { Component } from 'react';
import styles from '../styles/laptop.module.scss';

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
      <div className={styles.laptopContainer}>
          <div className={styles.device}>
            <div className={styles.screen}>
              <div className={styles.laptopBgImg}
                   style={bgStyle(img)}
               />
            </div>
          </div>
      </div>
    );
  }
}

export default Laptop;
