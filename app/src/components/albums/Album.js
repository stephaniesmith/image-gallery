import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './album.css';



export default class Album extends Component {
  
  static propTypes = {
    _id: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired
  };

  render() {
    const { title, posterImage, _id } = this.props;

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


