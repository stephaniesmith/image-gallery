import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAlbum } from './reducers';
import { loadAlbum } from './actions';
// import Thumbnail from '../thumbnail/Thumbnail';

class AlbumDetail extends Component {

  static propTypes = {
    album: PropTypes.object,
    images: PropTypes.array,
    match: PropTypes.object
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.loadAlbum(this.props.match.params.id);
    //get the images by albumId
  }

  render() {
    const { images, album } = this.props;
    const { title, description, posterImage } = album;
    
    return (
      <div>
        {title ? <h1>{title}</h1> : <h1>No title</h1>}
        {description ? <h1>{description}</h1> : <h1>No description</h1>}
        {posterImage ? <img src={posterImage}/> : <h1>No Cover Image</h1>}
        {/* {images.map(image => <Thumbnail
          key={image._id}
          url={image.url}
          title={image.title}/>)} */}
      </div>
    );
  }
}

export default connect(
  state => ({ album: getAlbum(state) }),
  { loadAlbum }
)(AlbumDetail);