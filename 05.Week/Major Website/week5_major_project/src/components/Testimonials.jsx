import React from 'react'

function Testimonials() {

    const testimonials = [
        {   id:1,
            name: "Sara Smith",
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, saepe.",
        },
        {   id:2,
            name: "John Doe",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, saepe.",
        },{
            id:3,
            name: "Jane Smith",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, saepe.",
        },
       {
        id:4,
        name: "Mike Johnson",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, saepe.",
       }
    ]

  return (
    <div className='bg-black text-white px-3 py-10 flex flex-col items-center gap-8'> 
        <h1 className='lg:text-5xl text-4xl'>What out students says</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
      {testimonials.map(testimonial => (
        <div className="flex flex-col border rounded-lg  items-center bg-black text-white p-3">
        <img className='rounded-full' src={ testimonial.image } alt={ testimonial.name } />
            <h1 className="lg:text-4xl text-3xl ">{testimonial.name }</h1>
            <p className="lg:text-xl  text-center">{ testimonial.description }</p>
        </div>
    ))}
      </div>
    </div>
  )
}

export default Testimonials 