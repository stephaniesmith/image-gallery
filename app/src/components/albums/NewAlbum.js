import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAlbum } from './actions';
import { getAlbums } from './reducers';

const defaultState = {
  title: '',
  description: '',
  posterImage: ''
};


class NewAlbum extends Component {

  static propTypes = {
    createAlbum: PropTypes.func.isRequired,
  };

  static getDerivedStateFromProps({ album }, { edit }) {
    if(edit) return null;

    return {
      edit: album ? { ...album } : { ...defaultState }
    }; 
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
    this.props.createAlbum(this.state.edit);
    this.setState({
      edit: { ...defaultState }
    });
  };

  render() {

    const { title, description, posterImage } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="title" value={title} onChange={this.handleChange}/>
        <input placeholder="description" value={description} onChange={this.handleChange}/>
        <input placeholder="posterImage" value={posterImage} onChange={this.handleChange}/>
        <button type="submit">Add Album</button>
      </form>
    );
  }
}

export default connect(
  state => ({ albums: getAlbums(state) }),
  { createAlbum }
)(NewAlbum);

