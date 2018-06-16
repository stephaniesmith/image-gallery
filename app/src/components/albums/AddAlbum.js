import React, { Component } from 'react';
import styles from './Thumbnail.css';

export default class AddAlbum extends Component {
  render() {
    return (
      <div className={styles.thumbnail}>
        <img src="https://dharmamerchantservices.com/wp-content/uploads/2015/06/add.png"/>
      </div>
    );
  }
}
