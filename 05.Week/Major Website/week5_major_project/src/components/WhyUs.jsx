import React from "react";

function WhyUs() {
  return (
    <div className="flex flex-col items-center justify-center px-3 lg:px-0 gap-10 pt-3 text-white bg-black">
      <h1 className="text-4xl lg:text-6xl font-bold">Why Choose Us</h1>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col gap-4 lg:gap-10 lg:flex-row items-center">
          <div className="text-[#0F97DC] px-3">
            <h1 className="text-4xl lg:text-5xl mb-3 lg:mb-0">300+ hours content</h1>
            <p className="text-white text-xl leading-none lg:text-2xl">
              We have a wide range of content to help you get <br className="hidden lg:block"/> started and
              grab your dream job
            </p>
          </div>
          <div className=" w-96 p-3">
            <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" />
          </div>
        </div>
        <div className="flex flex-col-reverse gap-4 lg:gap-10 lg:flex-row items-center">
          <div className=" w-96 p-3 lg:p-0">
            <img
              className=" "
              src="https://i.pinimg.com/originals/e1/e6/04/e1e604fecdb8ec418ee236aeaef52213.png"
            />
          </div>
          <div className="text-[#0F97DC] px-3 lg:px-0">
            <h1 className="text-4xl lg:text-5xl mb-3 lg:mb-0">Intractive dashboard</h1>
            <p className="text-white leading-none text-xl lg:text-2xl">
              By our Intractive dashboard you can see your <br className="hidden lg:block"/> progress in
              real time
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row items-center">
         
          <div className="text-[#0F97DC] px-3 lg:px-0">
            <h1 className="text-4xl lg:text-5xl mb-3 lg:mb-0">Quizzes and Assessments</h1>
            <p className="text-white leading-none text-xl lg:text-2xl">
              Enhance your knowledge with our Quizzes and <br className="hidden lg:block"/> Assessments
            </p>
          </div>
          <div className=" w-96 px-3 lg:p-0">
          <img
            className=" "
            src="https://www.rapidoform.com/be/images/blog/quiz-test-exam-differences.png"
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
