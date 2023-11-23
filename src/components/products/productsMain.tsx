'use client'

import React, { useState,useEffect } from 'react'
import { useQuery } from 'react-query'
import Link from 'next/link'
import { LuMenuSquare } from "react-icons/lu";
import { BsGrid } from "react-icons/bs";
import SelectField from '../shared/selectField';
import { fetchAllProducts } from '@/data/products/query';
import axios from 'axios';



type Props = {
 
}

const ProductsMain = ({
 
}: Props) => {
    const [currency, setCurrency] = useState('aed')
    const [products,setProducts] = useState([])
    const [currOpen, setCurrOpen] = useState('')
    const [open, setOpen] = useState('')
    const [sort, setSort] = useState('')

    // const { data, isLoading } = useQuery(
    //     ['get all products'],
    //     () => fetchAllProducts(),
    //     { refetchOnWindowFocus: false }
    // )


    useEffect(() => {
       console.log("inside")
    axios
    .get(
        `https://course-api.com/react-store-products`
    )
    .then((res) => console.log('aaaaaaa',res))
    .catch(e=>console.log(e))

    }, [])


    const [areaUnit, setAreaUnit] = useState('sq.ft')
    const toSquareMeter = 0.09290304

    const scrollToContact = () => {
        const element = document.getElementById('contact')
        if (element) {
            window.scrollTo({
                top: element.getBoundingClientRect().top - 150,
                behavior: 'smooth',
            })
        }
    }

    

    console.log("lkefdleflkkefkefkelkfkeklf")

    return (
        <section className="section-spacing w-full flex flex-col items-center px-4 ">
            <div className="flex flex-col items-center container">
                <div className="w-full flex justify-between gap-5">
                    
                    <div className="flex flex-col relative min-w-[350px] max-w-[350px]">
                        <div className="w-full sticky top-[140px] left-0 flex flex-col gap-2 p-4 bg-[#F1F1F1] rounded-md">
                            <Link
                                href={`/`}
                                className="flex items-center gap-4"
                            >
                                <h2 className="font-light">here</h2>
                            </Link>
                            <div className="grid grid-cols-2 gap-2">
                                <a
                                    href={`tel:`}
                                    target="_blank"
                                    className="w-full text-brand-100 text-center border border-brand-100 py-3 hover:bg-brand-100 hover:text-white rounded-md transition-colors duration-300 ease-in-out"
                                >
                                    Call us
                                </a>
                                <button
                                    className="w-full text-center border border-brand-100 py-3 text-brand-100 hover:bg-brand-100 hover:text-white rounded-md transition-colors duration-300 ease-in-out"
                                >
                                    Inquiry
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 w-full ">
                        {/* Sorting */}

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex flex-wrap flex-grow items-center gap-4 lg:gap-7">
                                <div className='flex gap-2'>
                                <BsGrid color="black" fontSize="1.5em" />
                                <LuMenuSquare color="black" fontSize="1.5em" />
                                
                                </div>

                               <p className='flex flex-col'>
                                <span>
                                    22 Products
                                </span>
                                <span>
                                Found
                                </span>
                               </p>
                               </div>

                                <div className="flex flex-wrap flex-grow items-center gap-4 lg:gap-7 lg:justify-end mt-4 lg:mt-0">
                                    <span>
                                    SORT BY
                                    </span>
                                    <SelectField
                                    className=" bg-gray-800 border-white col-span-5"
                                    open= {open}
                                    value={sort}
                                    setOpen={setOpen}
                                    type='lang'
                                    items={
                                        [
                                            {
                                                text: 'A-z',
                                                value: 'A-z',
                                            },
                                            {
                                                text: 'Z-a',
                                                value: 'Z-a',
                                            }, 
                                        ]
                                    }
                                    onChange={(value)=> setSort(value)}
                                    listClass="bg-blue-200 border"
                                    isSharp
                                    placeholder="A-z"
                                    iconClass="fill-black"
                                    
                                    />

                                </div>
                        </div>





                        {/* Products */}
                        <div className="flex">
                        {/* {
                            data?.data?.properties?.length > 0 ? 
                            (
                                <div className="flex flex-col " ref={scrollRef}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {data?.data?.properties?.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <PropertyCard
                                                        propertyId={item?.id}
                                                        key={item?.title + index}
                                                        img={item?.images?.[0]?.link}
                                                        type={item?.isbuy ? 'Buy' : 'Rent'}
                                                        propertyType={item?.propertyType}
                                                        title={item?.title}
                                                        address={item?.areaPlace?.name}
                                                        beds={
                                                            item?.specification?.find(
                                                                (temp: any) =>
                                                                    temp?.specification
                                                                        ?.key ==
                                                                        'Bedroom' ||
                                                                    temp?.specification
                                                                        ?.key == 'Rooms'
                                                            )?.answer
                                                        }
                                                        baths={
                                                            item?.specification?.find(
                                                                (temp: any) =>
                                                                    temp?.specification
                                                                        ?.key == 'Bath'
                                                            )?.answer
                                                        }
                                                        area={
                                                            areaType == 'sqft'
                                                                ? item?.specification
                                                                    ?.find(
                                                                        (temp: any) =>
                                                                            temp
                                                                                ?.specification
                                                                                ?.key ==
                                                                            'Size'
                                                                    )
                                                                    ?.answer?.toLocaleString()
                                                                : Math.round(
                                                                    item?.specification?.find(
                                                                        (temp: any) =>
                                                                            temp
                                                                                ?.specification
                                                                                ?.key ==
                                                                            'Size'
                                                                    )?.answer *
                                                                        toSquareMeter
                                                                )?.toLocaleString()
                                                        }
                                                        areaText={
                                                            areaType == 'sqft'
                                                                ? 'sq.ft'
                                                                : 'sq.m'
                                                        }
                                                        price={
                                                            Math.round(
                                                                item?.propertyPrice *
                                                                    (currencyData?.[
                                                                        currency
                                                                    ]
                                                                        ? currencyData?.[
                                                                            currency?.toLowerCase()
                                                                        ]
                                                                        : 1)
                                                            ) ?? item?.propertyPrice
                                                        }
                                                        currency={currency}
                                                        avatar={item?.teamMember?.avatar}
                                                        name={`${item?.teamMember?.firstName} ${item?.teamMember?.lastName}`}
                                                    />
                                                )
                                            }
                                        )}
                                    </div>
                                    <div className="mt-4 w-full">
                                        <Pagination
                                            page={page}
                                            totalPages={totalPages}
                                            offset={5}
                                            onChange={onChangePageNumber}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <h2>No Data Found</h2>
                )} */}
                        </div>
                        
                        

                      
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductsMain
