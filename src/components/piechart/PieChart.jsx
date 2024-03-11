import React from 'react'
import { Pie } from "@ant-design/charts";
import './pie.css'

const PieChart = () => {

    const data = [
        {
          type: 'All',
          value: 27,
        },
        {
          type: 'New',
          value: 25,
        },
        {
          type: 'Old',
          value: 18,
        },
        {
          type: 'Finished',
          value: 15,
        },
        {
          type: 'Pedning',
          value: 10,
        },
        {
          type: 'Completed',
          value: 5,
        },
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            content: '15%',
          },
        },
      };




  return (
    <Pie {...config} />
  )
}

export default PieChart