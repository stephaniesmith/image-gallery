import React, { Component } from 'react';
import styles from './album.css';
import { Link } from 'react-router-dom';

export default class AddAlbum extends Component {
  render() {
    return (
      <div className={styles.album}>
        <Link to="/albums/new">
          <img src="https://dharmamerchantservices.com/wp-content/uploads/2015/06/add.png"/>
        </Link>
      </div>
    );
  }
}
