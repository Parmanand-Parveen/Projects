import React from 'react'

function Info() {

 const infoDetails=[
    {id:1, title:"1M+", desc:"Youtube Subscribers"},
    {id:2, title:"600k+", desc:"Instagram Followers"},
    {id:3, title:"40k+", desc:"Twitter Followers"},
    {id:4, title:"100k+", desc:"LinkedIn Followers"},
 ]

  return (
    <div className='flex flex-col justify-center  lg:flex-row gap-10 bg-black text-white px-5 py-5'>
     {infoDetails.map((info)=>(
        <div className="flex flex-col gap-2 justify-center items-center border py-3 px-5 rounded-md  cursor-pointer" key={info.id} >
            <h3 className='text-3xl'>{info.title}</h3>
            <p className='text-2xl'>{info.desc}</p>
        </div>
     ))}
     
    </div>
  )
}

export default Info