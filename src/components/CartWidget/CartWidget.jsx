import { Link, NavLink } from "react-router-dom"

const CartWidget = () => {
    return (
        <div>
            <Link to="cart/">
            <img className='carroCompras' src='/carro.png' />
            </Link>
        </div>
    )


}

export default CartWidget