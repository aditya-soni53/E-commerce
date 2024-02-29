import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image} onClick={window.scrollTo(0,0)} width={280} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-prices-new">
            ${props.new_price}
        </div>
        <div className="item-prices-old">
            ${props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
