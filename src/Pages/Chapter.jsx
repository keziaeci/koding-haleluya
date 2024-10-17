import React,  { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Card, Text } from '@radix-ui/themes'

export const Chapter = () => {
    const { id } = useParams()
    const [datas, setData] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const getChapters = async () => {
            setLoad(true)
            const url = `https://api.scripture.api.bible/v1/bibles/2dd568eeff29fb3c-02/books/${id}/chapters`;
            // const url = `https://api.scripture.api.bible/v1/bibles/2dd568eeff29fb3c-02/chapters/GEN.intro`;
            const response = await fetch(url, {
                headers: {
                    "api-key" : import.meta.env.VITE_API_KEY
                }
            })

            const { data } = await response.json()
            setData(data)
            setLoad(false)
        }

        getChapters()
    },[id])

    return (
        <>
            {console.table(datas)}

            <div className='flex justify-center min-w-full m-0 p-0'>
                <div className='flex w-full'>
                {load ? (
                    <h1>Loding</h1>
                    ) : (

                    <div className='flex flex-col w-full items-center gap-2 m-5'>
                        {datas.map((data) => 
                            <Box className='w-full'>
                                <Card asChild>
                                    <Link  key={data.id} to={`/kitab/${data.id}`}>
                                        <Text as="div" size="2" weight="bold">
                                            {data.bookId} {data.number}
                                        </Text>
                                        <Text as="div" color="gray" size="2">
                                            {data.reference}
                                        </Text>
                                    </Link>
                                </Card>
                            </Box>
                        )}
                    </div>
                )}
                </div>
            </div>
        </>
    )
}
