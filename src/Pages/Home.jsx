import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Home = () => {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)


    useEffect(() => {
        const getBooks = async () => {
            setLoad(true)
            const response = await fetch('https://api.scripture.api.bible/v1/bibles/2dd568eeff29fb3c-02/books', {
                headers : {
                    'api-key' : import.meta.env.VITE_API_KEY
                }
            })

            const { data } = await response.json()
            setData(data)
            setLoad(false)
        }
        
        getBooks()
    }, [])
    
    return (
        <>
        <div className='flex justify-center min-w-full m-0 p-0'>
            <div className='w-[500px] min-h-screen bg-gray-950'>
                {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
                <div className='p-3'>
                    <Avatar>H</Avatar>
                </div>


                <div className='flex m-5'>
                    <h1 className='text-slate-400 text-3xl font-black'>Kitab-Ku</h1>

                <div>
                    
                </div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>

        </>
    )
}
