import './Popular.css'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'

const Popular = () => {

  const [popularProducts, setpopularProducts] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/popularwomen')
    .then((res=>res.json()))
    .then((data=>setpopularProducts(data)))
  }, [])
  
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item , index)=>{
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular
