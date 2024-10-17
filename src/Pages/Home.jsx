import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Card, Text } from '@radix-ui/themes'

export const Home = () => {

    const [datas, setData] = useState([])
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
            console.table(datas);
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
                    </div>

                    <div className='flex w-full'>
                        {load ? (
                            <h1>Loding</h1>
                        ) : (

                        <div className='flex flex-wrap justify-center gap-2 lg:mx-4 my-2'>
                            {datas.map((data) => 
                                <Link  key={data.id} to={`/kitab/${data.id}`}>
                                    <div className="hover:scale-90 duration-300 card w-80 lg:w-60 bg-gray-900 shadow-xl">
                                        <div className="card-body">
                                            <h2 className="card-title text-white">{data.name}</h2>
                                            <p>{data.nameLong}</p>
                                        </div>
                                    </div>
                                </Link>
                                )}
                        </div>
                        // <div className='flex'>
                        //     {datas.map((data) => {
                        //             console.table(data.id);
                        //         <div key={data.id}>
                        //             <h1 className='text-white'>{data.abbreviation}</h1>
                        //             <p className='text-white'>{data.name}</p>
                        //             <p className='text-white'>{data.nameLong}</p>
                        //         </div>
                        //     })}
                        // </div>

                        ) }
                    </div>

                </div>
            </div>

        </>
    )
}
