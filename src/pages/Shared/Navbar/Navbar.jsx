import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import { allNav } from './NavItem';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import { FaList } from 'react-icons/fa';
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi';
import logo from '../../../assets/images/tech-shop-logo.png'
import smallLogo from '../../../assets/images/logo.png'
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { BiSun } from 'react-icons/bi';
import { useEffect } from 'react';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [show, setShow] = useState(false);
    const [theme, setTheme] = useState(null);

    const handleLogOut = () => {
        logOut().then(res => {
            toast.success('Log Out successful')
        })
    }

    useEffect(() => {
        const storageTheme = localStorage.getItem('theme')
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (storageTheme) {
            setTheme(storageTheme)
        } else {
            setTheme(prefersDark ? 'dark' : 'light')
        }
    }, [])

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.toggle('dark', theme === 'dark');
            localStorage.setItem('theme', theme)
        }
    }, [theme])

    const handleThemeToggle = () => {
        setTheme((pre) => pre === 'dark' ? 'light' : 'dark');
    }

    return (
        <div className='sticky top-0 z-10 shadow py-3 bg-white dark:bg-slate-900 transition-colors duration-500 dark:text-white dark:shadow-md dark:shadow-slate-200/50'>
            <Container>
                <div className='flex items-center justify-between relative'>
                    <Link to={'/'} className='hidden lg:block'>
                        <img className='h-8' src={logo} alt="logo image" />
                    </Link>

                    <div onClick={() => setShow(!show)} className='lg:hidden p-2 rounded bg-cyan-500 text-white'>
                        <FaList />
                    </div>

                    <Link to={'/'} className='lg:hidden'>
                        <img className='h-6' src={smallLogo} alt="logo image" />
                    </Link>

                    {/* show only from medium device */}
                    <div className={`${show ? 'absolute bg-white z-20 w-3/4 h-screen -top-3 -left-5 p-8 dark:bg-slate-900 transition-colors duration-500 dark:text-white' : 'hidden'} lg:hidden`}>
                        <ul className='flex flex-col items-start gap-2 font-semibold'>
                            {
                                allNav.map((nav) => <li key={nav.id} onClick={() => setShow(false)}>
                                    <ActiveLink to={nav.path}>
                                        {nav.title}
                                    </ActiveLink>
                                </li>)
                            }
                        </ul>
                    </div>

                    {/* show in large device */}
                    <div className='hidden lg:block'>
                        <ul className='lg:flex items-center gap-5 font-semibold'>
                            {
                                allNav.map((nav) => <li key={nav.id} onClick={() => setShow(false)}>
                                    <ActiveLink to={nav.path}>
                                        {nav.title}
                                    </ActiveLink>
                                </li>)
                            }
                        </ul>
                    </div>

                    <div className='flex items-center gap-3'>
                        <button onClick={handleThemeToggle} className='mr-3'>
                            {
                                theme === 'light' ? <WiMoonAltWaningCrescent4 className='cursor-pointer w-5 h-5' /> : <BiSun className='cursor-pointer w-5 h-5 text-white' />
                            }
                        </button>
                        {
                            user ? <>
                                <div className='flex items-center gap-3'>
                                    <img className='h-8 w-8 rounded-full' src={user ? user.photoURL : "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"} alt="user image" title={user?.displayName} />
                                    <button onClick={handleLogOut} className='text-gray-600 dark:text-white hover:text-red-500 font-semibold'>Log Out</button>
                                </div>
                            </> : <>
                                <Link className='text-gray-600 dark:text-white hover:text-cyan-500 font-semibold' to={'/login'}>Log In</Link>
                            </>
                        }
                    </div>
                </div>
            </Container>
            <div onClick={() => setShow(false)} className={`fixed duration-200 ${!show ? 'invisible' : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10 lg:hidden`}></div>

        </div>
    );
};

export default Navbar;