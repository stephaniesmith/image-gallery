import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getImages } from '../albums/reducers';

class ImageGallery extends Component {
  
  static propTypes = {
    images: PropTypes.array,
  };

  render() {
    const { images } = this.props;

    return (
      <div>
        <button>back</button><button>next</button>
        <div>
          <img src={images[0].url}/>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    images: getImages(state)
  }),
  null
)(ImageGallery);