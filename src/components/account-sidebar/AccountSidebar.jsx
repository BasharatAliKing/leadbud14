import React, { useState} from 'react'
import './styles.css'
import Typography from 'antd/es/typography/Typography'
const { Paragraph, Title} = Typography;
import { NavLink, useLocation } from 'react-router-dom'
import overviewIcon from '../../assets/images/overview-icon.png'
import billingIcon from '../../assets/images/billing-icon.png'
import emailIcon from '../../assets/images/email-account-icon.png'
import emailListIcon from '../../assets/images/donot-email-icon.png'
import teamIcon from '../../assets/images/my-team-icon.png'
import transactionIcon from '../../assets/images/transaction-icon.png'
import affiliateIcon from '../../assets/images/affiliate-program.png'
import searchIcon from '../../assets/images/setting-search.png'
import bellIcon from '../../assets/images/bell.png'
import trackingIcon from '../../assets/images/tracking-setting-icon.png'
import integrationIcon from  '../../assets/images/integration-icon.png'
import apiIcon from  '../../assets/images/api-icon.png'
import calendarIcon from '../../assets/images/calendar-sync-icon.png'


const AccountSidebar = () => {


    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path;
      };


  return (
    <div className='account-sidebar'>

        <Paragraph className="title">Account</Paragraph>

    <div className="links">
        <ul>
            <li className='li-item'><NavLink to='/account/profile'><img src={overviewIcon} alt="icon" /> Overview</NavLink> </li>
            <li className="li-item"><NavLink to='/account/billing'><img src={billingIcon} alt="icon" /> Billing</NavLink></li>
            <li className="li-item"><NavLink to='/account/email-accounts'><img src={emailIcon} alt="icon" /> Email Account</NavLink></li>
            <li className="li-item"><NavLink to='/account/do-not-email-list'><img src={emailListIcon} alt="icon" /> Do-not-email Lists</NavLink></li>
            <li className="li-item"><NavLink to='/account/team'><img src={teamIcon} alt="icon" /> My Team</NavLink></li>
            <li className="li-item"><NavLink to='/account/transactions'><img src={transactionIcon} alt="icon" /> Transactions</NavLink></li>
            <li className="li-item"><NavLink to='/account/affiliate-program'><img src={affiliateIcon} alt="icon" /> Affiliate Program</NavLink></li>
        </ul>
    </div>


    <Paragraph className="title title-2">Settings</Paragraph>


    <div className="links">
        <ul>
            <li className='li-item'><NavLink to='/account/search-settings'><img src={searchIcon} alt="icon" /> Search Settings</NavLink> </li>
            <li className="li-item"><NavLink to='/account/notification'><img src={bellIcon} alt="icon" /> Notifications</NavLink></li>
            <li className="li-item"><NavLink to='/account/tracking-settings'><img src={trackingIcon} alt="icon" /> Tracking settings</NavLink></li>
            <li className="li-item"><NavLink to='/account/integration'><img src={integrationIcon} alt="icon" /> Integrations</NavLink></li>
            <li className="li-item"><NavLink to='/account/api'><img src={apiIcon} alt="icon" /> API</NavLink></li>
            <li className="li-item"><NavLink to='/account/calendar-settings'><img src={calendarIcon} alt="icon" /> Calendar Sync</NavLink></li>
        </ul>
    </div>


    </div>
  )
}

export default AccountSidebar