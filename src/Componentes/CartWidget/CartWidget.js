import cart from './cart.svg'

const CartWidget = () => {

    return(
        <div to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {10}
        </div>
    );
}

export default CartWidget;