import React, { Component } from 'react';
import '../Component/sidebar.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import image from '../images/avatar.png'
import SidebarChat from '../Component/sidebarchat'


class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar_header">
                    <AccountCircleIcon className='sidebar_avatar' src={image} />
                    <div className="search">
                        <SearchIcon className='sidebar_search_icon' />
                        <input type="text" placeholder='search' />
                    </div>
                    <ChatIcon className='sidebar_chat_icon' />
                </div>

                <div className="sidebar_chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />
                </div>
            </div>

        )
    }
}

export default Sidebar;