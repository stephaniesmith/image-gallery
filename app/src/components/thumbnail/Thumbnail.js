import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Thumbnail.css';

export default class Thumbnail extends Component {
  
  static propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, url } = this.props;

    return (
      <div className={styles.thumbnail}>
        <img src={url}/>
        <h2>{title}</h2>
      </div>
    );
  }
}


