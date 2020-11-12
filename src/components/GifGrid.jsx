import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGif';
import GifGridItem from './GifGridItem';
//import { getGifs } from './helpers/getGifs';



const GifGrid = ({category}) => {


    const {data:images, loading} = useFetchGifs(category) //custom hook
      
    return (

        <div>
            <h3>{category}</h3>
         
            
            <div className='card-grid '>

                {loading ? <p className="animate__animated animate__bounce">Loading chaval</p> : null}
                { images.map((image)=> <GifGridItem key={image.id} 
                                                      {...image}/>)}
            </div> 
        </div>
        
    )
}

export default GifGrid
