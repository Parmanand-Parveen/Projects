import React from "react";

function OurInstructor() {
  return (
    <div className="flex flex-col items-center bg-black text-white px-3">
      <h1 className="lg:text-5xl text-4xl mt-16">Our Top Instructors</h1>
      <p className="lg:text-2xl text-center">
        Discover brilliance in code with our expert instructors. Passionate
        mentors dedicated to fueling
        <br className="hidden lg:block" /> your coding journey at CodeX
      </p>
      <div className=" lg:flex gap-10 lg:w-4/5  justify-center mt-10 lg:px-5">
        <div className=" ">
          <img
            className="h-96 object-cover rounded-lg"
            src="https://www.skillreactor.io/blog/wp-content/uploads/2024/02/image.jpeg"
          />
        </div>
        <div className="lg:w-2/3 flex flex-col lg:gap-4">
          <h1 className="text-4xl">John Doe</h1>
          <div className="flex gap-4 mb-4">
            <p className="text-sm">Full Stack Developer</p>
            <p className="text-sm">@Google</p>
          </div>
          <p className="text-xl -tracking-normal">
            <span className="font-semibold text-3xl"> Jhon Doe</span> is an ace
            software engineer working in the role of Computer Scientist at
            Google India and a popular computer science instructor on CodeX. He
            is working in the industry for the past 4.5 years, working on
            different real-world problems. He is well-known among students for
            his amazingly simplified explanations with real-life examples,
            enabling students to understand complex topics very easily. Many of
            his ex-students are now working in top product companies like
            Microsoft, Amazon, De-Shaw etc.
          </p>
          <button className="bg-[#0F97DC] mt-5 lg:mt-0 rounded-lg lg:w-max px-4 py-2">
            Get 1:1 Session
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurInstructor;
