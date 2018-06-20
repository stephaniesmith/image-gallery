import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import PrivateRoute from '../app/PrivateRoute';
import { getAlbum, getImages } from './reducers';
import { loadAlbum } from './actions';
import NewImage from '../images/NewImage';
import AlbumImages from '../images/AlbumImages';
import ImageDetails from '../images/ImageDetails';
import ImageGallery from '../images/ImageGallery';

class AlbumDetail extends Component {

  static propTypes = {
    album: PropTypes.object,
    images: PropTypes.array,
    match: PropTypes.object,
    loadAlbum: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadAlbum(this.props.match.params.id);
  }

  render() {
    const { album } = this.props;
    const { title, description, posterImage } = album;
    
    return (
      <Router>
        <div>
          {title ? <h1>{title}</h1> : <h1>No title</h1>}
          {description ? <p>{description}</p> : <p>No description</p>}
          {posterImage ? <img src={posterImage}/> : <h1>No Cover Image</h1>}
          <nav>
            <Link to={`/albums/${album._id}/images/thumbnail`}>Thumbnails</Link>
          &nbsp;
            <Link to={`/albums/${album._id}/images/list`}>Image Details</Link>
          &nbsp;
            <Link to={`/albums/${album._id}/images/gallery`}>Image Gallery</Link>
          &nbsp;
          </nav>
          <div>
            <Switch>
              <Route path={`/albums/${album._id}/images/thumbnail`} component={AlbumImages}/>
              <Route path={`/albums/${album._id}/images/gallery`} component={ImageGallery}/>
              <Route path={`/albums/${album._id}/images/list`} component={ImageDetails}/>
              <PrivateRoute path={`/albums/${album._id}/images/new`} component={NewImage}/>
              <Redirect to={`/albums/${album._id}/images/thumbnail`}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ 
    album: getAlbum(state),
    images: getImages(state)
  }),
  { loadAlbum }
)(AlbumDetail);