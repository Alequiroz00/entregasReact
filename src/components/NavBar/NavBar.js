import CartWidget  from "../CartWidget/CartWidget"

const NavBar = ()=>{
    return(
        <nav>
            <h3>El Campeon</h3>
            <div>
                <button>Equipamiento</button>
                <button>Accesorios</button>
                <button>Indumentaria</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar