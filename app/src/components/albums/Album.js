import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './album.css';



export default class Album extends Component {
  
  static propTypes = {
    album: PropTypes.object.isRequired,
  };

  render() {
    const { title, posterImage, _id } = this.props.album;

    return (
      <div className={styles.album}>
        <Link to={`/albums/${_id}`}>
          <img src={posterImage}/>
          <h2>{title}</h2>
        </Link>
      </div>
    );
  }
}


