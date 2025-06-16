import { Link } from 'react-router-dom'

const Cart = ({ cart, setCart }) => {
    const removeFromCart = (index) => {
        const newCart = [...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <div id="invoice" style={{ padding: '200px 0' }}>
            <h1 style={{ color: 'white' }}>Your Cart</h1>
            {cart.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is empty</p>
                    <Link to="/" className="button" style={{ display: 'inline-block', marginTop: '1rem' }}>
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={index}>
                                    <td data-label="Item">{item.name}</td>
                                    <td data-label="Price">{item.price} PKR</td>
                                    <td data-label="Action">
                                        <button onClick={() => removeFromCart(index)} className="cart_button">
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="2">Total</th>
                                <td>{total} PKR</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/" className="button">
                            Continue Shopping
                        </Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default Cart 