import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Card, Text, Heading,Separator, Skeleton,Spinner} from '@radix-ui/themes'

export const Chapter = () => {
    const { bookId,chapId } = useParams()
    // console.log(chapId)
    const [datas, setData] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const getChapters = async () => {
            setLoad(true)
            const url = `${import.meta.env.VITE_API_BASE_URL}/chapters/${chapId}`
            const response = await fetch(url, {
                headers: {
                    "api-key" : import.meta.env.VITE_API_KEY
                }
            })

            const {data} = await response.json()
            setData(data)
            setLoad(false)
        }

        getChapters()
    }, [chapId])

    return (
        <>
            {console.table(datas)}
            <div className='flex justify-center min-w-full m-0 p-0'>
                <div className='flex w-full'>
                {load ? (
                    <Spinner />

                    // <Skeleton/>
                    // <Skeleton width="48px" height="48px" />
                    // <Skeleton>
                    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                    //     felis tellus, efficitur id convallis a, viverra eget libero. Nam magna
                    //     erat, fringilla sed commodo sed, aliquet nec magna.
                    // </Skeleton>
                    // </Skeleton>
                    // <h1>Loding</h1>
                    ) : (
                    <div className='flex flex-col w-full items-center gap-2 m-5'>
                        <div className='flex w-full justify-center items-center '>
                            <Link className={datas.previous ? "" : "hidden"} to={`/kitab/${bookId}/${datas.previous?.id}`}>
                                <svg width="15" height="15" 
                                viewBox="0 0 15 15" fill="none" 
                                xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </Link>
                            <Heading size="3">                        
                                {datas.reference}
                            </Heading>
                            <Link  to={`/kitab/${bookId}/${datas.next?.id}`}>
                                <svg width="15" height="15" 
                                viewBox="0 0 15 15" fill="none"
                                xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </Link>
                        </div>
                        <Separator orientation="horizontal" size={10} m="0" />
                        
                        <Box className='w-full'>
                            <Card asChild>
                                <Text as="div" size="2">
                                {/* <Text as="div" size="2" weight="bold"> */}
                                    <code dangerouslySetInnerHTML={{ __html: datas.content }} />
                                </Text>
                                {/* <Text as="div" size="2" dangerouslySetInnerHTML={{ __html: datas.content }} /> */}
                                {/* <Link  key={data.id} to={`/kitab/${data.bookId}/${data.id}`}>
                                    <Text as="div" size="2" weight="bold">
                                        {data.bookId} {data.number}
                                    </Text>
                                    <Text as="div" color="gray" size="2">
                                        {data.reference}
                                    </Text>
                                </Link> */}
                            </Card>
                        </Box>
                    </div>
                )}
                </div>
            </div>
        </>
        // <div>Chapter</div>
    )
}
