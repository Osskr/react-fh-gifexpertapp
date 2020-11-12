import React from 'react'

const GifGridItem = ({title,description,url}) => {
    
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={description} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem

