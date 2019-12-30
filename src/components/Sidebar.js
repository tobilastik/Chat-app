import React, {Component} from 'react';
import image from '../assets/images/dp.jpeg';

export default class Sidebar extends Component {
  render () {
    return (
      <div>
        <div className="sidebar-header">
          <img src={image} className="profile-pic" alt="profile-pic" />

          <div className="">
            <i className="fas fa-sync-alt sidebar-icon" />
            <i className="fas fa-comment-alt sidebar-icon" />
            <i className="fas fa-ellipsis-v sidebar-icon" />
          </div>
        </div>
        <div>
          <form>
            <input placeholder="Search or start new chat" />
          </form>
        </div>

      </div>
    );
  }
}
