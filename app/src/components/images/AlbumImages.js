import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from '../thumbnail/Thumbnail';
import { getAlbum, getImages } from '../albums/reducers';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../albums/Albums.css';
import { getUser } from '../auth/reducers';

class AlbumImages extends Component {

  static propTypes = {
    album: PropTypes.object,
    images: PropTypes.array,
    user: PropTypes.object
  };

  render() {
    const { images, album, user } = this.props;

    return (
      <div className={styles.albums}>
        {user && <Link to={`/albums/${album._id}/images/new`}>
          <Thumbnail url="https://dharmamerchantservices.com/wp-content/uploads/2015/06/add.png" title=""/>
        </Link>}
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
    images: getImages(state),
    user: getUser(state)
  }),
  null
)(AlbumImages);