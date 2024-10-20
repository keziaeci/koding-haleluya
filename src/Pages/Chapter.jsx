import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Box, Card, Text, Heading,Separator, Skeleton, Spinner, Flex, Container} from '@radix-ui/themes'

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
                    <div className='flex flex-col w-full items-center gap-2 m-5'>
                {load ? (
                    <div>
                        <Container size="1">
                            <Flex direction="column" gap="3">
                                <Text>
                                    <Skeleton>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                                        felis tellus, efficitur id convallis a, viverra eget libero. Nam magna
                                        erat, fringilla sed commodo sed, aliquet nec magna.
                                    </Skeleton>
                                </Text>

                                <Skeleton>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                                        felis tellus, efficitur id convallis a, viverra eget libero. Nam magna
                                        erat, fringilla sed commodo sed, aliquet nec magna.
                                    </Text>
                                </Skeleton>
                            </Flex>
                        </Container>

                        {/* <div className='flex w-full gap-4 items-center '>
                            <Link to={`/`}>
                                <svg width="15" height="15" viewBox="0 0 15 15"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                            </Link>
                                
                            <div className='flex w-full '>
                                <Skeleton width="100px" height="48px" />
                            </div>
                        </div>
                        <Separator orientation="horizontal" size={10} m="0" />
                        
                        <Spinner /> */}
                            
                    </div>
                    ) : (
                        <>
                            <div className='flex w-full gap-4 items-center '>
                                <Link to={`/`}>
                                    <svg width="15" height="15" viewBox="0 0 15 15"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                </Link>
                                
                                <div className='flex w-full justify-between items-center'>
                                    <Link className={datas.previous ? "" : "invisible"} to={`/kitab/${bookId}/${datas.previous?.id}`}>
                                        <svg width="15" height="15" 
                                        viewBox="0 0 15 15" fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                    </Link>
                                    <Heading size="3">                        
                                        {datas.reference}
                                    </Heading>
                                    <Link className={datas.next ? "" : "invisible"}  to={`/kitab/${bookId}/${datas.next?.id}`}>
                                        <svg width="15" height="15" 
                                        viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            </div>
                            <Separator orientation="horizontal" size={10} m="0" />
                            
                            <Box className='w-full'>
                                <Card asChild>
                                    <Text as="div" size="2">
                                        <code dangerouslySetInnerHTML={{ __html: datas.content }} />
                                    </Text>
                                </Card>
                            </Box>
                        </>
                )}
                    </div>
                </div>
            </div>
        </>
        // <div>Chapter</div>
    )
}
