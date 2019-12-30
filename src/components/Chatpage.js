import React, {Component} from 'react';
import ChatHeader from './Helper/ChatHeader';

export default class Chatpage extends Component {
  render () {
    return (
      <div>
        <div>
          <ChatHeader />
        </div>
        <div className="chat-page">
          Chat page
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
    );
  }
}
