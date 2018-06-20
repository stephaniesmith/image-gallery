import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getImages } from '../albums/reducers';

class ImageGallery extends Component {
  
  static propTypes = {
    images: PropTypes.array,
  };

  state = {
    index: 0
  };

  handleIndex(increment) {
    event.preventDefault();
    const { index } = this.state;

    this.setState({ index: index + increment });
  }

  render() {
    const { images } = this.props;
    const { index } = this.state;
    const { title, description, url } = images[index];

    return (
      <div>
        <button onClick={() => this.handleIndex(-1)} disabled={index === 0}>back</button>
        <button onClick={() => this.handleIndex(+1)} disabled={index === images.length - 1}>next</button>
        <div>
          <h2>{title}</h2>
          <img src={url}/>
          <p>{description}</p>
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