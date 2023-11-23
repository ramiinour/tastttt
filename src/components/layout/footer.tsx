import React from 'react'
// import Logo from '../shared/icons/logo'
// import Facebook from '../shared/icons/facebook'
// import Linkedin from '../shared/icons/linkedin'
// import Instagram from '../shared/icons/instagram'
// import Twitter from '../shared/icons/twitter'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
    return (
        <section className="w-full flex flex-col items-center  section-spacing bg-black">
            <div className="container flex flex-wrap gap-16 lg:gap-32 px-4 text-white pt-28 pb-20">
                <div className="flex flex-col   max-w-[340px]">
                    {/* <Logo color="white" /> */}
                    <p className=" pt-3 font-light">
                        {
                            'Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue.'
                        }
                    </p>
                    <div className="flex items-center gap-2 pt-5">
                        {/* <Link
                            href={''}
                            className="px-2 py-2 rounded-md hover:bg-white group"
                        >
                            <Facebook className="fill-white group-hover:fill-black" />
                        </Link>

                        <Link
                            href={''}
                            className="px-2 py-2 rounded-md hover:bg-white group"
                        >
                            <Linkedin className="fill-white group-hover:fill-black" />
                        </Link>

                        <Link
                            href={''}
                            className="px-2 py-2 rounded-md hover:bg-white group"
                        >
                            <Instagram className="fill-white group-hover:fill-black" />
                        </Link>

                        <Link
                            href={''}
                            className="px-2 py-2 rounded-md hover:bg-white group"
                        >
                            <Twitter className="fill-white group-hover:fill-black" />
                        </Link> */}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h4>Project</h4>
                    <div className="flex flex-col gap-1 font-light">
                        <Link href={''}>
                            <p>Houses</p>
                        </Link>
                        <Link href={''}>
                            <p>Rooms</p>
                        </Link>
                        <Link href={''}>
                            <p>Flats</p>
                        </Link>
                        <Link href={''}>
                            <p>Appartments</p>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h4>Company</h4>
                    <div className="flex flex-col gap-1 font-light">
                        <Link href={''}>
                            <p>How we work?</p>
                        </Link>
                        <Link href={''}>
                            <p>Capital</p>
                        </Link>
                        <Link href={''}>
                            <p>Security</p>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h4>Movement</h4>
                    <div className="flex flex-col gap-1 font-light">
                        <Link href={''}>
                            <p>How are we</p>
                        </Link>
                        <Link href={''}>
                            <p>Support us</p>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h4>Help</h4>
                    <div className="flex flex-col gap-1 font-light">
                        <Link href={''}>
                            <p>Privacy</p>
                        </Link>
                        <Link href={''}>
                            <p>Condition</p>
                        </Link>
                        <Link href={''}>
                            <p>Blog</p>
                        </Link>
                        <Link href={''}>
                            <p>FAQs</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#303A44]" />

            <p className="text-[#D6D6D6] py-4">{`Copyright @West Gate Real Estate. ${new Date()?.getFullYear()}. All right reserved`}</p>
        </section>
    )
}

export default Footer
