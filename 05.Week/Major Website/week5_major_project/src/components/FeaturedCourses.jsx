import { PriceChange } from "@mui/icons-material";
import React from "react";

function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      name: "Introduction to C++",
      img: "https://hunarindia.org.in/public//uploads/media_manager/1410.jpg",
      price: "99.99",
      salePrice: "79.99",
    },
    {
      id: 2,
      name: "Learn MERN from Scratch",
      img: "https://schportalmedia.s3.amazonaws.com/courseimg/MERN-COURSE.png",
      price: "159",
      salePrice: "0",
    },
    {
      id: 3,
      name: "Learn AI ML from Scratch",
      description: "Learn C++ from scratch",
      img: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2150833157/settings_images/d74d251-04af-46de-ae8-4e2026466b28_Artificial_Intelligence_and_Machine_Learning_Training_Home_.png",
      price: "139.99",
      salePrice: "89.99",
    },
  ];

  return (
    <div className="bg-black text-white flex flex-col items-center">
      <h1 className="text-5xl py-5 my-10">Featured Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-3 ">
        {courses.map((course) => (
          <div
            className="flex flex-col gap-2 justify-center border py-5 px-5 rounded-md  cursor-pointer"
            key={course.id}
          >
            <img src={course.img} alt={course.name} className="w-full h-2/3 rounded-md" />
            <h3 className="text-3xl">{course.name}</h3>
            <div className="flex items-center gap-2">
              <p
                className={`text-2xl ${
                  Number(course.salePrice) > 0
                    ? "text-red-500 line-through text-lg"
                    : "text-green-500"
                }`}
              >
                {`$${course.price}`}
              </p>
              {course.salePrice > 0 ? (
                <p className="text-2xl text-green-500">
                  {` $${Number(course.salePrice) > 0 ? course.salePrice : ""}`}
                </p>
              ) : (
                ""
              )}
              <p className="text-xs rounded-md px-1  bg-green-500">
                {course.salePrice > 0
                  ? `${(
                      ((course.price - course.salePrice) / course.price) *
                      100
                    ).toFixed(2)}%off`
                  : ""}
              </p>
            </div>
            <button className="bg-[#0F97DC] text-white px-3 py-1 rounded-md">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCourses;
