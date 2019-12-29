import React, {Component} from 'react';
import image from '../assets/images/dp.jpeg';

export default class Sidebar extends Component {
  render () {
    return (
      <div>

        <header className="sidebar-header">
          <img src={image} className="profile-pic" alt="profile-pic" />
          <div className="sidebar-icon">
            <i className="fas fa-comment-alt" />
            <i className="fas fa-ellipsis-v" />
          </div>
          <div />
        </header>
      </div>
    );
  }
}
