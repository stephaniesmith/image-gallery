import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAlbum } from './reducers';
import { loadAlbum } from './actions';
import Thumbnail from '../thumbnail/Thumbnail';

class AlbumDetail extends Component {

  static propTypes = {
    album: PropTypes.object,
    images: PropTypes.array
  };

  componentDidMount() {
    this.props.loadAlbum();
    //get the images by albumId
  }

  render() {
    const { images, album } = this.props;
    // if(!album) return null;
    
    return (
      <div>
        {album ? <h1>{album.title}</h1> : <h1>No album</h1>}
        {images.map(image => <Thumbnail
          key={image._id}
          url={image.url}
          title={image.title}/>)}
      </div>
    );
  }
}

export default connect(
  state => ({ album: getAlbum(state) }),
  { loadAlbum }
)(AlbumDetail);