import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((Response) => Response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

    //using hooks
    const data = useLoaderData()

    
  return (
    <div className='text-center flex flex-col m-4  text-black text-2xl p-4'>
        <div>Github name : {data.name}</div>
        <div>Github followers : {data.followers}</div>
        <div>Github bio : {data.bio}</div>
        <div>Github location : {data.location}</div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch ('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}