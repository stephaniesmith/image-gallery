import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  title: '',
  description: '',
  posterImage: ''
};


export default class NewAlbum extends Component {

  static PropTypes = {
    onComplete: PropTypes.func.isRequired,
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
    this.props.onComplete(this.state.edit);
    this.setState({
      edit: { ...defaultState }
    });
  };

  render() {

    const { title, description, posterImage } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="title" value={title} onChange={this.handleChange}/>
          <input placeholder="description" value={description} onChange={this.handleChange}/>
          <input placeholder="posterImage" value={posterImage} onChange={this.handleChange}/>
          <button type="submit">Add Album</button>
        </form>
      </div>
    );
  }
}

