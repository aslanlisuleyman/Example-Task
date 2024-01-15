import React, { useContext } from 'react'
import Maincontext from '../../context/context'
import Card from '../Card/Card'
import "./Cards.scss"

const Cards = () => {
    const{filter,handleFilter,searchHandler}=useContext(Maincontext)
  return (
    <div className='mainn'>
      

      <div className='mainn__left'>
          <div className='we'>
            <p><i class="fa-solid fa-bell-concierge"></i></p>
            <h1 className='hh'>Our Menu</h1>
          </div>
          <div style={{display:'flex',gap:'5px',marginTop:'30px',marginLeft:'59.9%'}}>
            <div> <button onClick={(e)=>{
                handleFilter(e.target.value)
            }} name="" id="">Sort By Price</button>
            
            
            
            </div>
            <div><input onChange={(e)=>{
                searchHandler(e.target.value)
            }} type="text" placeholder='search' /></div>
           
            


          </div>



      </div>
      <div className='mainn__right'>
         {filter.map((item,index)=>(
            <Card key={index} item={item} />
         ))}
      </div>



    </div>
  )
}

export default Cards