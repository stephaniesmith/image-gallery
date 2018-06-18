import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImages } from '../albums/reducers';
import { loadImages } from '../albums/actions';
import Thumbnail from '../thumbnail/Thumbnail';
import styles from '../albums/Albums.css';

class Images extends Component {

  static propTypes = {
    loadImages: PropTypes.func.isRequired,
    images: PropTypes.array
  };

  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images } = this.props;
    if(!images) return null;

    return (
      <div className={styles.albums}>
        {images.map(image => <Thumbnail key={image._id} url={image.url} title={image.title}/>)}
      </div>
    );
  }
}

export default connect(
  state => ({ images: getImages(state) }),
  { loadImages }
)(Images);