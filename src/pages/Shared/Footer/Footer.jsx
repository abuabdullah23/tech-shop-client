import React from 'react';
import logo from '../../../assets/images/tech-shop-logo.png'
import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer grid grid-cols-1 md:grid-cols-5 gap-10 items-center px-10 py-16 bg-[#1d1d1d] dark:bg-slate-950 transition-colors text-slate-200">
                <div className='md:col-span-2 pe-5'>
                    <Link to="/"> <div className='flex gap-5 items-center'>
                        <img className='h-10 mb-2' src={logo} alt="Tech Shop Logo" />
                    </div></Link>
                    <p>
                        Explore our extensive collection of the latest smartphones, laptops, gadgets, and accessories. From sleek design to powerful performance, we bring you the future of tech. Shop with confidence, backed by expert support, fast shipping, and the latest in tech trends.
                    </p>

                    <div className='flex gap-3 mt-5'>
                        <a className='bg-slate-500 hover:bg-slate-300 hover:text-cyan-600 rounded-full p-2 text-center cursor-pointer'><FaFacebook className='w-5 h-5' /></a>

                        <a className='bg-slate-500 hover:bg-slate-300 hover:text-cyan-600 rounded-full p-2 text-center cursor-pointer'><FaTwitter className='w-5 h-5' /></a>

                        <a className='bg-slate-500 hover:bg-slate-300 hover:text-cyan-600 rounded-full p-2 text-center cursor-pointer'><FaLinkedin className='w-5 h-5' /></a>

                        <a className='bg-slate-500 hover:bg-slate-300 hover:text-cyan-600 rounded-full p-2 text-center cursor-pointer'><FaInstagram className='w-5 h-5' /></a>
                    </div>
                </div>
                <div>
                    <span className="footer-title">About</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/add-product' className="link link-hover">Add Product</Link>
                    <Link to='/my-cart' className="link link-hover">My Cart</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">Get Your Products</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Affiliate</a>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover">techshop@info.com</a>
                    <a className="link link-hover">+00 557 855 522</a>
                    <a className="link link-hover">254, Dhaka, Mirpur</a>
                </div>
            </footer>
            <div className='flex gap-2 items-center justify-center bg-cyan-700 text-white px-5 py-3'>
                <FaCopyright />
                <p><small>All right reserved 2023</small></p>
            </div>
        </div>
    );
};

export default Footer;