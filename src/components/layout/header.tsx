'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { navLinks, navLinkType } from '@/data/types'
import Hamburger from 'hamburger-react'
import Logo from '../shared/icons/Logo'
import { FaUserPlus } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";



import { usePathname } from 'next/navigation'
// import { fetchAllProjectsByFilters } from '@/data/off-plan/query'
// import { fetchAllAreasBySearch } from '@/data/areas/query'
// import { useQuery } from 'react-query'
// import ArrowDown from '../shared/icons/arrowDown'
// import Link from 'next/link'
// import Logo from '../shared/icons/logo'
// import Facebook from '../shared/icons/facebook'
// import Linkedin from '../shared/icons/linkedin'
// import Instagram from '../shared/icons/instagram'
// import Twitter from '../shared/icons/twitter'
// import Phone from '../shared/icons/phone'
// import Mail from '../shared/icons/mail'

type Props = {}

const Header = (props: Props) => {
    const [isOpen, setOpen] = useState(false)
    const pathname: string = usePathname()
    const [isScrolled, setScrolled] = useState(false)
   
    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = (window.scrollY / window.innerHeight) * 100
            if (scrollPercent > 5) setScrolled(true)
            else setScrolled(false)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        setOpen(false)
    }, [pathname])

  
    const isTransparent: any = {
        '/': true,
    }

   
    const [mobileLink, setMobileLink] = useState('')

    return (
        <>
            <nav
                className={`${
                    isOpen ? 'w-full  px-4 opacity-100' : 'w-0 opacity-0'
                } flex lg:hidden flex-col gap-10 min-h-screen overflow-x-hidden overflow-y-auto fixed left-0 top-0 bg-black z-50 py-10 pt-20 transition-all duration-300 ease-in-out  `}
            >
                {/* <Logo color="white" /> */}
                <ul className="text-white mt-10">
                    {navLinks.map((link: navLinkType, index: number) => {
                        return (
                            <li
                                key={link?.link + index}
                                className="w-full border-b border-gray-700 py-4"
                            >
                            <Link href={link?.link}>
                                <p className="text-base">
                                    {link?.text}
                                </p>
                            </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className='flex'>
                    <Link
                    href={'https://propertymanagementcompany.ae/'}
                    className="px-5 py-2 bg-white w-fit mx-auto rounded-md text-base text-black whitespace-nowrap flex flex-col"
                >
                    Property Management
                </Link>
                <Link
                    href={'/list-property'}
                    className="px-5 py-2 bg-white w-fit mx-auto rounded-md text-base text-black whitespace-nowrap flex flex-col"
                >
                    List Your Property
                </Link>
                </div>
            </nav>
            <header
                className={`fixed w-full flex flex-col left-0 top-0 z-50 transition-colors duration-300 ease-in-out ${
                    isTransparent?.[pathname]
                        ? isScrolled
                            ? 'bg-black'
                            : 'bg-none'
                        : 'bg-black'
                }`}
            >

                <div className="w-full flex flex-col items-center p-5 select-none">
                    <div className="flex flex-row w-full items-center container justify-between ">
                        <Logo
                            color={
                                isTransparent?.[pathname]
                                    ? isScrolled
                                        ? 'white'
                                        : 'white'
                                    : 'white'
                            }
                        />

                        <ul className="hidden lg:flex gap-7 xl:gap-10 2xl:gap-14 items-center ">
                            {navLinks.map(
                                (link: navLinkType, index: number) => {
                                    return (
                                        <li
                                            className="text-sm"
                                            key={link.text + index}
                                        >
                                    <Link
                                        scroll={false}
                                        href={link.link ?? '/'}
                                        className={`${
                                            isTransparent?.[
                                                pathname
                                            ]
                                                ? isScrolled
                                                    ? 'text-white'
                                                    : 'text-white'
                                                : 'text-white'
                                        }`}
                                    >
                                        {link.text}
                                    </Link>
                                        </li>
                                    )
                                }
                            )}
                        </ul>

                        <div className="flex items-center gap-2">

                            <div className='flex'>
                                <span className='mr-2'>
                                    Cart
                                </span>
                                <div>
                                <FaCartShopping color="white" fontSize="1.5em" />
                                </div>
                            </div>
                            <div className='flex'>
                                <span className='mr-2'>
                                    Login
                                </span>
                                <div>
                                <FaUserPlus color="white" fontSize="1.5em" />
                                </div>
                            </div>
                            {/* <Link
                                href={'https://propertymanagementcompany.ae/'}
                                className={`px-5 py-3 ${
                                    isTransparent?.[pathname]
                                        ? isScrolled
                                            ? 'bg-white text-black'
                                            : 'bg-white text-black'
                                        : 'bg-white text-black'
                                }  rounded-md text-base  whitespace-nowrap hidden lg:flex flex-col transition-colors duration-200 ease-in-out`}
                            >
                                Property Management
                            </Link>
                            <Link
                                href={'/list-property'}
                                className={`px-5 py-3 ${
                                    isTransparent?.[pathname]
                                        ? isScrolled
                                            ? 'bg-white text-black'
                                            : 'bg-black text-white'
                                        : 'bg-white text-black'
                                }  rounded-md text-base  whitespace-nowrap hidden lg:flex flex-col transition-colors duration-200 ease-in-out`}
                            >
                                List Your Property
                            </Link> */}

                            <div className={'block lg:hidden'}>
                                <Hamburger
                                    toggle={setOpen}
                                    toggled={isOpen}
                                    size={24}
                                    color={'white'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
