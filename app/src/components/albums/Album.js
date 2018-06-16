import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadAlbum } from './actions';
import PropTypes from 'prop-types';
import styles from './album.css';



class Album extends Component {
  
  static propTypes = {
    album: PropTypes.object.isRequired
  };

  render() {
    const { title, posterImage, _id, loadAlbum } = this.props.album;

    return (
      <div className={styles.album}>
        <Link to={`/albums/${_id}`} onClick={loadAlbum}>
          <h1>{_id}</h1>
          <img src={posterImage}/>
          <h2>{title}</h2>
        </Link>
      </div>
    );
  }
}

export default connect(
  state => ({ _id: state._id }),
  { loadAlbum }
)(Album);


