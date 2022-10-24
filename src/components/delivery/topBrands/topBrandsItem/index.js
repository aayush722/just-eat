import React from 'react'
import './topBrandsItem.css'

const TopBrandsItem = ({item}) => {
    return (
        <div className='main'>
        <div className='top-brands-cover'>
            <img src={item.cover} className='top-brands-image' alt={item.title} />
        </div>
        <div className='top-brands-time'>{item.time}</div>
        </div>
    );

}

export default TopBrandsItem