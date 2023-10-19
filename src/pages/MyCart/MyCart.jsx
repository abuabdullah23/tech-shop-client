import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SingleCart from './SingleCart';
import EmptyContent from '../../components/EmptyContent/EmptyContent';

const MyCart = () => {
    const { user } = useAuth();
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_API}/cart?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }, [])

    return (
        <>
            {cartProducts.length > 0 ?
                <div className='my-16'>
                    <SectionTitle sectionTitle={'Your Shopping Cart'} />

                    <div className="overflow-x-auto">
                        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                            <thead>
                                <tr className="dark:bg-gray-700 bg-gray-400 text-white text-lg">
                                    <th className="p-3">No</th>
                                    <th className="p-3">Image</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody className="border-b dark:bg-gray-900 dark:border-gray-700">
                                {cartProducts.map((cart, index) => <SingleCart
                                    key={index}
                                    index={index}
                                    cart={cart}
                                    cartProducts={cartProducts}
                                    setCartProducts={setCartProducts}
                                />)}
                            </tbody>
                        </table>
                    </div>
                </div>
                :
                <EmptyContent emptyText={'You have not added any product in your shopping cart.'}/>
            }
        </>
    );
};

export default MyCart;