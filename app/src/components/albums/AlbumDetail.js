import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAlbum, getImages } from './reducers';
import { loadAlbum } from './actions';
import Thumbnail from '../thumbnail/Thumbnail';
import styles from './Albums.css';

class AlbumDetail extends Component {

  static propTypes = {
    album: PropTypes.object,
    images: PropTypes.array,
    match: PropTypes.object,
    loadAlbum: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadAlbum(this.props.match.params.id);
  }

  render() {
    const { images, album } = this.props;
    const { title, description, posterImage } = album;
    
    return (
      <div>
        {title ? <h1>{title}</h1> : <h1>No title</h1>}
        {description ? <p>{description}</p> : <p>No description</p>}
        {posterImage ? <img src={posterImage}/> : <h1>No Cover Image</h1>}
        <div className={styles.albums}>
          <Link to={`/albums/${album._id}/images/new`}>
            <Thumbnail url="https://dharmamerchantservices.com/wp-content/uploads/2015/06/add.png" title=""/>
          </Link>
          {images && images.map(image => <Thumbnail
            key={image._id}
            url={image.url}
            title={image.title}/>)}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ 
    album: getAlbum(state),
    images: getImages(state)
  }),
  { loadAlbum }
)(AlbumDetail);