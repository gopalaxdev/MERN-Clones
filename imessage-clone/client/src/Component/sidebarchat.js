import React, { Component } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../Component/sidebar.css'
class SidebarChat extends Component {

    render() {
        return (
            <div className="sidebarchat_comp">
                <AccountCircleIcon className='sidebar_avatar' />
                <div className="sidebarchat_comp_details">
                    <div className="sidebarchat_comp_details_main">
                        <h4 className='channel_name'>Channel Name</h4>
                        <p className='channel_name_last'>Last message sent</p>
                    </div>
                    <p className='sidebar_timestamp'>timestamp</p>
                </div>
            </div>
        )
    }
}

export default SidebarChat;