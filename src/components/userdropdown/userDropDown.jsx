import React from 'react'
import './main.css'
import { Dropdown, Space } from 'antd';
import { Button,Tooltip , message } from 'antd'
import Typography from 'antd/es/typography/Typography'
const { Paragraph } = Typography;
import { MdExpandMore } from "react-icons/md";
import userIcon from '../../assets/images/user-icon.png'
import { BiWalletAlt} from "react-icons/bi";
import {BiUser} from 'react-icons/bi'
import { Link } from 'react-router-dom';


const userDropDown = () => {


    const UserOptions = (
        <div className='custom-dropdown'>
            <Typography>
            <Paragraph className="signed">Signed in as</Paragraph>
            <Paragraph className="email">ahsan@test.com</Paragraph>
            </Typography>
            <div className="packages">
                <span className='trial'>Trial</span>
                <span className='month'>Monthly</span>

            </div>

            <ul>
                <li><Link to='/' className='li'><BiWalletAlt className='li-icon'/> Plans</Link></li>
                <li><Link to='/account/profile' className='li'> <BiUser className='li-icon'/> Account</Link></li>
            </ul>

            <Button>Logout</Button>

    
    
        </div>
    )
    


  return (
    <div>
         <Dropdown className='drop-down'
                   overlay={() => UserOptions}
                    trigger={['click']}
                >
                    <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className='user'>
                        <img src={userIcon} alt="icon" />
                        <div className="content">
                            <Typography>
                                <Paragraph className="name">Travis Bradely</Paragraph>
                                <Paragraph className="company">Company</Paragraph>

                            </Typography>
                        </div>
                        <MdExpandMore size={20} style={{color: '#030621', fontWeight: '500'}} />
                        </div>
                       
                     
                    </Space>
                    </a>
                </Dropdown>

    </div>
    
  )
}

export default userDropDown