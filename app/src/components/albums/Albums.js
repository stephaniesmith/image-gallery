import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAlbums } from './reducers';
import { loadAlbums } from './actions';
import Album from './Album';
import AddAlbum from './AddAlbum';
import styles from './Albums.css';

class Albums extends Component {

  static propTypes = {
    loadAlbums: PropTypes.func.isRequired,
    albums: PropTypes.array
  };

  componentDidMount() {
    this.props.loadAlbums();
  }

  render() {
    const { albums } = this.props;
    if(!albums) return null;
    
    return (
      <div className={styles.albums}>
        <AddAlbum/>
        {albums.map(album => <Album key={album._id} {...album}/>)}
      </div>
    );
  }
}

export default connect(
  state => ({ albums: getAlbums(state) }),
  { loadAlbums }
)(Albums);
