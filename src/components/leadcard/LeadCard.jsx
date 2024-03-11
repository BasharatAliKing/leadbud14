import React from 'react'
import { Avatar, Card } from 'antd'
const { Meta} = Card;
import userIcon from '../../assets/images/slider-user.png'
import './card.css'
import { Typography } from 'antd'
const { Paragraph} = Typography;
import { BiLogoFacebookCircle } from "react-icons/bi";

const LeadCard = ({ username }) => {
  return (
    <Card className='card'>
      <div className="social-icon">
      <BiLogoFacebookCircle className='social-source' />
      </div>
  
        <Avatar src={userIcon} />

        <div>
            <Paragraph className='user'>Lisa Max</Paragraph>
        </div>


       
    </Card>
  )
}

export default LeadCard