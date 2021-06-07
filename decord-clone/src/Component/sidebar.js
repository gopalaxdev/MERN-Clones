import React, { Component } from 'react';
import './sidebar.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className='sidebar_top'>
                    Gopala Agrawal
                    <ExpandMoreIcon />

                </div>

                <div className="sidebar_channel">
                    <div className="sidebar_channel_text">
                        <div className="sidebar_channel_text_expand">
                            <ExpandMoreIcon />
                            Text Channel
                      </div>

                        <AddIcon />
                    </div>

                    <div className="sidebar_channel_list">
                        <div className="sidebar_channel_list_display">
                            #Youtube
                        </div>
                        <div className="sidebar_channel_list_display">
                            #Test Channel</div>
                        <div className="sidebar_channel_list_display">
                            #Wow it works!</div>
                    </div>
                </div>

                <div className="sidebar_footer">
                    <div className="sidebar_footer_connect">
                        <SignalCellularAltIcon className='sidebar_signal' />
                        <div className="sidebar_footer_connect_text">
                            <h4>Voice Connected</h4>
                            <p>Strem</p>
                        </div>

                        <div className="sidebar_footer_connect_icons">
                            <InfoIcon />
                            <PhoneIcon />

                        </div>

                    </div>

                    <div className="sidebar_footer_user">
                        <AccountCircleIcon className='sidebar_avatar' />
                        <div className="sidebar_footer_user_text">
                            <h4>Gopala Agrawal</h4>
                            <p>CQsFN8</p>
                        </div>

                        <div className="sidebar_footer_user_icons">
                            <MicIcon />
                            <HeadsetIcon />
                            <SettingsIcon />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;