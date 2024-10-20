import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Avatar } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Card, Text, Heading } from '@radix-ui/themes'

export const Home = () => {

    const [datas, setData] = useState([])
    const [load, setLoad] = useState(false)


    useEffect(() => {
        const getBooks = async () => {
            setLoad(true)
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/books`, {
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
                {/* <div className='w-[500px] min-h-screen bg-gray-950'> */}
                <div className='w-[500px] min-h-screen'>
                    {/* <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
                    <div className='p-3'>
                        <Avatar>H</Avatar>
                    </div>


                    <div className='flex m-5'>
                        <Heading>Kitab-Ku</Heading>
                        {/* <h1 className='text-white text-3xl font-black'>Kitab-Ku</h1> */}
                    </div>

                    <div className='flex w-full'>
                        {load ? (
                            <h1>Loding</h1>
                        ) : (

                        <div className='flex flex-col w-full items-center gap-2 lg:m-4 m-4'>
                            {datas.map((data) => 
                                <Box className='w-full'  key={data.id}>
                                    <Card asChild>
                                        <Link  to={`/kitab/${data.id}`}>
                                            <Text as="div" size="2" weight="bold">
                                                {data.name}
                                            </Text>
                                            <Text as="div" color="gray" size="2">
                                                {data.nameLong}
                                            </Text>
                                        </Link>
                                    </Card>
                                </Box>
                        
                                //     <div className="hover:scale-90 duration-300 card outline-1">
                                //         <div className="card-body">
                                //             <h2 className="card-title text-white">{data.name}</h2>
                                //             <p className='text-gray-400'>{data.nameLong}</p>
                                //         </div>
                                //     </div>
                                // </Link>
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
