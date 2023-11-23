import HeroSection from '@/components/shared/heroSections'
import ProductsMain from '@/components/products/productsMain'

import React from 'react'

type Props = {}

const Page = (props: Props) => {
    const links = [ 
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'products',
            link: '/products',
        },
    ]
    return (
        <>
            <HeroSection links={links} />
            <ProductsMain/>
        </>
    )
}

export default Page
