import HeroSection from '@/components/shared/heroSections'

import React from 'react'

type Props = {}

const Page = (props: Props) => {
    const links = [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'Checkout',
            link: '/checkout',
        },
    ]
    return (
        <>
            <HeroSection links={links} />
        </>
    )
}

export default Page
