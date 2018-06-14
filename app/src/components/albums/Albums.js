import React, { Component } from 'react';
import Album from './Album';
import AddAlbum from './AddAlbum';
import styles from './Albums.css';

export default class Albums extends Component {
  render() {
    return (
      <div className={styles.albums}>
        <AddAlbum/>
        <Album/>
        <Album/>
        <Album/>
        <Album/>
        <Album/>
      </div>
    );
  }
}
