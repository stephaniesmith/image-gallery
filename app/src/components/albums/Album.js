import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './album.css';



export default class Album extends Component {
  
  static propTypes = {
    album: PropTypes.object.isRequired
  };

  render() {
    const { title, posterImage } = this.props.album;

    return (
      <div className={styles.album}>
        <img src={posterImage}/>
        <h2>{title}</h2>
      </div>
    );
  }
}


