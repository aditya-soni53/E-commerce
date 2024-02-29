import './Navbar.css'
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../../assets/dropdown_icon.png'

const Navbar = () => {
  const [Menu, setMenu] = useState("shop")
  const menuRef = useRef()

  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  const{getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <div className="nav-menu-circle">
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" height={10} />
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none', color:'#626262'}} to='/'>Shop</Link> {Menu==="shop"?<hr />:<></>} </li>
        <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:'none' , color:'#626262'}} to='/mens'>Men</Link> {Menu==="mens"?<hr />:<></>} </li>
        <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration:'none' , color:'#626262'}} to='/womens'>Women</Link> {Menu==="womens"?<hr />:<></>} </li>
        <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration:'none' , color:'#626262'}} to='kids'>Kids</Link> {Menu==="kids"?<hr />:<></>} </li>
      </ul>
      <div className="nav-login-card">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link style={{textDecoration:'none' , color:'#626262'}} to='/login'><button>Login</button></Link>}
        <Link style={{textDecoration:'none' , color:'#626262'}} to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-card-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
