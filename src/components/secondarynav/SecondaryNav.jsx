import React from 'react'
import './second-nav.css'
import { Link } from 'react-router-dom'
import { Layout, Menu} from 'antd'
const { Sider } = Layout;



const SecondaryNav = ({ links }) => {

    if (!links || links.length === 0) {
        return null;
      }
    

  return (

    <Sider>
        <Menu>
            {
                links.map((link, index) => (
                    <Menu.Item key={index + 1} className='menu-item'>
                        <Link to={link.url}>{link.title}</Link>
                    </Menu.Item>
                ))
            }
        </Menu>
    </Sider>

  )
}

export default SecondaryNav