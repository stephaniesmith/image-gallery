import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAlbums } from './reducers';
import { loadAlbums } from './actions';
import Thumbnail from '../thumbnail/Thumbnail';
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
        <Link to="/albums/new">
          <Thumbnail url="https://dharmamerchantservices.com/wp-content/uploads/2015/06/add.png" title=""/>
        </Link>
        {albums.map(album => <Link key={album._id} to={`/albums/${album._id}/images/thumbnail`}>
          <Thumbnail url={album.posterImage} title={album.title}/>
        </Link>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({ albums: getAlbums(state) }),
  { loadAlbums }
)(Albums);
