import React from "react";

function Herosection() {
  const imageLink = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21pbGluZyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      img: "https://c.pxhere.com/photos/1e/73/portrait_man_man_portrait_male_person_adult_face_caucasian-601668.jpg!d",
    },
    {
      id:3,
      img:"https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
    },
    {
      id:4,
      img:"https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
    },
    {
      id:5,
      img:"https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg"
    }
    

  ];

  return (
    <div className="w-full h-[90vh]  px-3 lg:px-0 bg-gradient-to-r from-black to-blue-900 text-white flex flex-col justify-center lg:items-center gap-4 lg:gap-3">
      <h1 className=" text-5xl leading-none lg:text-7xl tracking-tighter">
        Unlock Your Learning Potential
      </h1>
      <p className="text-2xl lg:text-3xl">
        Access expert-led courses, quizzes, and certifications from anywhere.
      </p>
      <div className="lg:flex gap-5 ">
        <div className="lg:flex gap-5 items-center">
          Trusted by 10,000+ learners
         <div className=" relative flex px-3 py-2">
         {imageLink.map((image) => (
          <a key={image.id} href="#" className="ml-[-13px]" >
          <img  
          className="h-9 w-9 rounded-full object-cover hover:scale-150 transition hover:cursor-pointer " src={image.img} />
        </a>
        ))}
         </div>
        </div>
        <button className="text-2xl py-2 px-3 rounded-md bg-gradient-to-l from-black to-blue-900">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Herosection;
