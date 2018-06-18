import React, { Component } from 'react';

import styles from './Header.css';

export default class Footer extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav>
          <ul>
            <li><a href="/albums">
              Albums</a></li>
            <li><a href="/about">
              About</a></li>
            <li><a href="/images">
              Images</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}