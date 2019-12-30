import React, {Component} from 'react';
import image from '../../assets/images/dp.jpeg';
import {lists} from '../../data/contactList';

export default class Sidebar extends Component {
  state = {
    list: lists,
  };
  render () {
    const {list} = this.state;
    return (
      <div className="chat-header">
        <div className="header">
          <div className="sidebar-header">
            <img src={image} className="profile-pic" alt="profile-pic" />

            <div className="">
              <i className="fas fa-search sidebar-icon" />
              <i className="fas fa-paperclip sidebar-icon" />
              <i className="fas fa-ellipsis-v sidebar-icon" />
            </div>
          </div>

        </div>

      </div>
    );
  }
}
