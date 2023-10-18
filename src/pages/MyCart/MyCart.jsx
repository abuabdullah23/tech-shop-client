import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyCart = () => {
    const { user } = useAuth();
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_API}/cart?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }, [])

    return (
        <div>
            My cart: {cartProducts.length}
        </div>
    );
};

export default MyCart;