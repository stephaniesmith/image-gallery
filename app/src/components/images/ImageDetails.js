import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImages } from '../albums/reducers';


class ImageDetails extends Component {
  
  static propTypes = {
    images: PropTypes.array
  }; 

  render() {
    const { images } = this.props;

    return (
      <ul>
        {images && images.map(image => <li key={image._id}>
          <h3>{image.title}</h3>
          <p>{image.description}</p>
          <p>{image.title}</p>
        </li>)}
      </ul>
    );
  }
}

export default connect(
  state => ({ 
    images: getImages(state)
  }),
  null
)(ImageDetails);