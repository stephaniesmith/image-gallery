import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from '../thumbnail/Thumbnail';
import { getAlbum, getImages } from '../albums/reducers';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../albums/Albums.css';

class AlbumImages extends Component {

  static propTypes = {
    album: PropTypes.object,
    images: PropTypes.array,
  };

  render() {
    const { images, album } = this.props;

    return (
      <div className={styles.albums}>
        <Link to={`/albums/${album._id}/images/new`}>
          <Thumbnail url="https://dharmamerchantservices.com/wp-content/uploads/2015/06/add.png" title=""/>
        </Link>
        {images && images.map(image => <Thumbnail
          key={image._id}
          url={image.url}
          title={image.title}/>)}
      </div>
    );
  }
}

export default connect(
  state => ({ 
    album: getAlbum(state),
    images: getImages(state)
  }),
  null
)(AlbumImages);