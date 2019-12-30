import React, {Component} from 'react';
import image from '../assets/images/dp.jpeg';
import {lists} from '../data/contactList';
import More from './Helper/More';

export default class Sidebar extends Component {
  state = {
    list: lists,
  };
  render () {
    const {list} = this.state;
    return (
      <div className="left-header">
        <div className="header">
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
              <div className="search-container">
                <input
                  className="search-bar"
                  placeholder="Search or start new chat"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="contact-container">
          {list.map (clist => {
            return (
              <div className="contact-list">
                <img
                  src={clist.img}
                  alt="profile-pic"
                  className="profile-pic"
                />
                <div>
                  {clist.name}
                  <p className="contact-msg">{clist.msg}</p>
                </div>
                <p className="contact-time">{clist.time}</p>
              </div>
            );
          })}

        </div>
      </div>
    );
  }
}
