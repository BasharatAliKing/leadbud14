import React from 'react'
import { Dropdown, Menu} from 'antd'
import { MdMoreHoriz } from "react-icons/md";
import { EllipsisOutlined } from "@ant-design/icons";
import './dropdown.css'

const CustomDropdown = ({ overlayItems}) => {

    const items = (
        <Menu>
            {
                overlayItems.map(item => (
                    <Menu.Item key={item.key}></Menu.Item>
                ))
            }
        </Menu>
    )


  return (

    <Dropdown overlay={items} placement="bottomLeft" arrow><EllipsisOutlined className="site-form-item-icon" /></Dropdown>
  )
}

export default CustomDropdown