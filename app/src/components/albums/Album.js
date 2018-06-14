import React, { Component } from 'react';
import styles from './album.css';

export default class Album extends Component {
  render() {
    return (
      <div className={styles.album}>
        <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"/>
        <h2>Name of Album</h2>
      </div>
    );
  }
}


