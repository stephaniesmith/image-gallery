import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Thumbnail from '../thumbnail/Thumbnail';

class AlbumDetail extends Component {

  static PropTypes = {
    album: PropTypes.object,
    images: PropTypes.array
  };

  componentDidMount() {
    //get the album
    //get the images by albumId
  }

  render() {
    const { images } = this.props;
    if(!images) return null;
    
    return (
      <div>
        {images.map(image => <Thumbnail
          key={image._id}
          url={image.url}
          title={image.title}/>)}
      </div>
    );
  }
}

export default connect(
  // state => ({ albums: getAlbums(state) }),
  // { loadAlbums }
)(AlbumDetail);