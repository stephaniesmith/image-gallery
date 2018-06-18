import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createImage } from '../albums/actions';
import { getImages } from '../albums/reducers';


const defaultState = {
  title: '',
  description: '',
  url: ''
};

class NewImage extends Component {

  static propTypes = {
    createImage: PropTypes.func.isRequired,
    match: PropTypes.object
  };

  static getDerivedStateFromProps({ image }, { edit }) {
    if(edit) return null;

    return {
      edit: image ? { ...image } : { ...defaultState }
    }; 
  }

  componentDidMount(){
    this.setState({ 
      edit: { AlbumId: this.props.match.params.id, ...this.state.edit }
    });
  }

  state = {
    edit: null
  };

  handleChange = ({ target }) => {
    this.setState(({ edit }) => {
      return {
        edit: {
          ...edit,
          [target.placeholder]: target.value
        }
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createImage(this.state.edit);
    this.setState({
      edit: { ...defaultState }
    });
  };

  render() {

    const { title, description, url } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="title" value={title} onChange={this.handleChange}/>
        <input placeholder="description" value={description} onChange={this.handleChange}/>
        <input placeholder="url" value={url} onChange={this.handleChange}/>
        <button type="submit">Add Album</button>
      </form>
    );
  }
}

export default connect(
  state => ({ images: getImages(state) }),
  { createImage }
)(NewImage);


