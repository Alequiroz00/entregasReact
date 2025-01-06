import cart from "./assets/carrito.png"

const CartWidget =()=>{
    return(
        <div>
            <img className="imgCarrito" src={cart} alt="cartWidget"/>
            0
        </div>
    )
}

export default CartWidget