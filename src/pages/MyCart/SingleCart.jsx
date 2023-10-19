import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const SingleCart = ({ cart, index, cartProducts, setCartProducts }) => {
    const { _id, image, name, price, brandName } = cart;

    const handleDeleteCart = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_BASE_API}/cart/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            toast.success('Your product has been deleted.')
                            const remainingCart = cartProducts.filter(p => p._id !== _id);
                            setCartProducts(remainingCart);
                        }
                    })
            }
        })
    }

    return (
        <tr className='bg-gray-200 dark:bg-slate-800 rounded-md border-b border-gray-300 hover:bg-gray-300'>
            <td className="px-3 text-xl font-medium dark:text-gray-400">{index + 1}</td>
            <td className="px-3 py-2 w-20 h-20">
                <img className='w-full h-full object-cover rounded' src={image} alt="product image" />
            </td>
            <td className="px-3 py-2">
                <span className='text-lg font-semibold dark:text-gray-200'>{name}</span>
                <p className="dark:text-gray-400 text-lg text-gray-500">Brand: {brandName}</p>
            </td>
            <td className="px-3 py-2">
                <p className='text-lg font-semibold'>${price}</p>
            </td>
            <td className="px-3 py-2">
                <p onClick={() => handleDeleteCart(_id)} className='p-2 bg-red-500 w-fit rounded-sm text-white hover:bg-red-400 cursor-pointer'> <FaTrashAlt /></p>
            </td>
        </tr>
    );
};

export default SingleCart;