import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../CartContext';
import PayPal from '../Paypal';

const Shopingcart = () => {
    const location = useLocation();
    const { cart, setCart, removeFromCart } = useCart();
    const [quantities, setQuantities] = useState([]);
    const isKhmer = location.pathname.startsWith('/kh');

    // Synchronize quantities with the cart length
    useEffect(() => {
        setQuantities(cart.map(() => 1)); // Initialize all quantities to 1
    }, [cart]);

    // Remove item from the cart
    const handleRemove = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        const updatedQuantities = quantities.filter((_, i) => i !== index);
        setQuantities(updatedQuantities);
    };

    // Update quantity
    const handleQuantityChange = (index, value) => {
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = Math.max(1, Number(value)); // Ensure quantity is at least 1
        setQuantities(updatedQuantities);
    };

    // Calculate total price
    const calculateTotal = () =>
        cart.reduce((acc, item, index) => acc + item.price * quantities[index], 0);

    const finalTotal = Number(calculateTotal().toFixed(2));

    useEffect(() => {
        console.log('Rendering PayPal Button');
        return () => {
            console.log('Unmounting PayPal Button');
        };
    }, []);

    return (
        <div>
            {/* Shoping Cart Section Begin */}
            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">{isKhmer ? 'ផលិតផល' : 'Products'}</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((cartItem, index) => (
                                            <tr key={index}>
                                                <td
                                                    className="shoping__cart__item"
                                                    style={{ display: 'flex', alignItems: 'center' }}
                                                >
                                                    <img
                                                        src={cartItem.image}
                                                        alt={cartItem.title}
                                                        style={{
                                                            width: '80px',
                                                            height: '80px',
                                                            objectFit: 'contain',
                                                            marginRight: '15px',
                                                            border: '1px solid #ddd',
                                                            borderRadius: '8px',
                                                            padding: '5px',
                                                        }}
                                                    />
                                                    <h5
                                                        style={{
                                                            fontSize: '16px',
                                                            fontWeight: 'bold',
                                                            margin: 0,
                                                        }}
                                                    >
                                                        {cartItem.title}
                                                    </h5>
                                                </td>
                                                <td
                                                    className="shoping__cart__price"
                                                    style={{ fontSize: '16px', color: '#333' }}
                                                >
                                                    ${cartItem.price.toFixed(2)}
                                                </td>
                                                <td className="">
                                                    <div
                                                        className="quantity"
                                                        style={{ display: 'flex', alignItems: 'center' }}
                                                    >
                                                        <input
                                                            type="number"
                                                            min="1"
                                                            value={quantities[index]}
                                                            onChange={(e) =>
                                                                handleQuantityChange(index, e.target.value)
                                                            }
                                                            style={{
                                                                width: '50px',
                                                                textAlign: 'center',
                                                                border: '1px solid #ddd',
                                                                borderRadius: '4px',
                                                                padding: '5px',
                                                            }}
                                                        />
                                                    </div>
                                                </td>
                                                <td
                                                    className="shoping__cart__total"
                                                    style={{
                                                        fontSize: '16px',
                                                        fontWeight: 'bold',
                                                        color: '#555',
                                                    }}
                                                >
                                                    ${(cartItem.price * quantities[index]).toFixed(2)}
                                                </td>
                                                <td className="shoping__cart__item__close">
                                                    <span
                                                        // className="icon_close"
                                                        onClick={() => removeFromCart(cartItem.id)}
                                                        style={{
                                                            color: '#e74c3c',
                                                            fontSize: '18px',
                                                            cursor: 'pointer',
                                                        }}
                                                    >
                                                        &#x2715;
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <Link to="/shopgrid" className="primary-btn cart-btn">
                                    CONTINUE SHOPPING
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input
                                            type="text"
                                            placeholder="Enter your coupon code"
                                            style={{
                                                padding: '10px',
                                                border: '1px solid #ddd',
                                                borderRadius: '4px',
                                                marginBottom: '10px',
                                            }}
                                        />
                                        <button
                                            type="submit"
                                            className="site-btn"
                                            style={{
                                                backgroundColor: '#5cb85c',
                                                color: '#fff',
                                                padding: '10px 20px',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            APPLY COUPON
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>
                                        Subtotal <span>${calculateTotal().toFixed(2)}</span>
                                    </li>
                                    <li>
                                        Total <span>${calculateTotal().toFixed(2)}</span>
                                    </li>
                                </ul>
                                {/* <div style={{ display: paymentMethod === 'paypal' ? 'block' : 'none' }}>

                                </div> */}
                                <PayPal total={finalTotal} />
                                {/* <a
                                    href="#"
                                    className="primary-btn"
                                    style={{
                                        backgroundColor: '#ff6f61',
                                        color: '#fff',
                                        padding: '10px 20px',
                                        border: 'none',
                                        borderRadius: '4px',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    PROCEED TO CHECKOUT
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shoping Cart Section End */}
        </div>
    );
};

export default Shopingcart;